<template>
  <div ref="pronbit" class="head">
    <ul class="ul">
      <li @contextmenu.prevent="openMenu($event, item)" @click="edit(i, item)" v-for="(item, i) in $store.state.list"
        :key="i">{{ item.name }}</li>
      <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
    </ul>
    <!-- 点击弹出框 -->
    <el-dialog :title="(index == -1 ? '添加人员' : '编辑')" :visible.sync="dialogFormVisible">
      <el-form style="width:500px;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
        class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>

        </el-form-item>
        <el-form-item :inline="true" label="验证码" prop="code">
          <el-col :span="8">
            <el-input v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
          </el-col>
          <el-button style="margin-left: 30px;" type="primary" :disabled="sendModel.countFlag" @click="getCode">
            {{ sendModel.btnMsg == null ? sendModel.countNum + 's后重新发送' : sendModel.btnMsg }}
          </el-button>
        </el-form-item>
        <el-form-item label="充值">
          <el-input v-model="ruleForm.money" placeholder="最两位小数"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">

      </div>
    </el-dialog>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <li @click="handleDelete">popconfirm</li>
    </ul>
    <div>
      <el-button type="primary" :style="flag == true ? iconstyle : ''" class="every"
        @click="luck"><span>抽奖</span></el-button>
      <!-- 抽奖弹框 -->
      <el-dialog title="抽奖" :visible.sync="centerDialogVisible" width="30%">
        <h1 class="con">{{ title }}</h1>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addluck" :disabled="status">开始抽奖</el-button>
        </span>

      </el-dialog>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    let validatePhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('手机号不能为空！'));
      } else {
        callback()
      }
      //使用正则表达式进行验证手机号码
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error('手机号不正确！'));
      } else {
        callback()
      }
    }
    let validatenewPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('手机号不能为空！'));
      } else {
        callback()
      }
      //使用正则表达式进行验证手机号码
      if (this.$store.state.list[this.index].phone == value) {
        callback(new Error('新旧不能一样手机号！'));
      } else {
        callback()
      }
    }
    let validateName = (rule, value, callback) => {

      if (!value) {
        callback(new Error('请输入姓名'));
      } else {
        callback()
      }
      //使用正则表达式进行验证手机号码
      if (!value.length > 1 && !value.length < 10) {
        callback(new Error('姓名1到10位'));
      } else {
        callback()
      }
    }
    let validateCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入验证码'));
      } else {
        callback()
      }
      //使用正则表达式进行验证手机号码
      if (!/^\d{6}$/.test(value)) {
        callback(new Error('验证码格式不正确'));
      } else {
        callback()
      }
    }
    return {
      statusphone: false,
      ruleForm: {
        name: "",
        phone: "",
        code: "",
        money: ""
      },
      gainCode: "获取验证码",
      rules: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        newPhone: [
          { validator: validatenewPhone, trigger: 'blur' }
        ],
        code: [
          { validator: validateCode, trigger: 'blur' }

        ]

      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      sendModel: {
        // 倒计时周期
        countNum: 60,
        // 用于倒计时标记，true-正在倒计时
        countFlag: false,
        // 定时器
        intervalBtn: {},
        // 默认按钮的值
        btnMsg: '获取验证码'
      },
      index: -1,
      menus: [1, 2, 3], // 模拟数据
      rightClickItem: '',
      visible: false, // 是否展示右键菜单
      top: 0,
      left: 0,
      delId: 0,
      lists: this.$store.state.list,
      title: "王一博", //幸运观众
      centerDialogVisible: false,
      status: false, //按钮禁用状态
      flag: false, // 旋转状态
      iconrotate: 45, //旋转deg
      icontranslateX: 30, //沿x轴位移px
      timer: null
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (this.index == -1) {
          if (!valid) return false

          this.$store.commit("add", this.ruleForm)
          this.ruleForm = {}
          this.dialogFormVisible = false
        } else {
          if (!valid) return false
          this.$store.commit("amend", { ...this.ruleForm, i: this.index })
          this.ruleForm = {}
          this.dialogFormVisible = false
          this.index = -1
        }



      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.index = -1
      this.dialogFormVisible = false
    },

    countDown() {
      // 设置btn倒计时时显示的信息
      this.sendModel.btnMsg = null
      // 更改btn状态
      this.sendModel.countFlag = !this.sendModel.countFlag
      // 设置倒计时
      this.sendModel.intervalBtn = setInterval(() => {
        if (this.sendModel.countNum <= 0) {
          // 重置btn提示信息
          this.sendModel.btnMsg = '获取验证码'
          // 清除定时器
          clearInterval(this.sendModel.intervalBtn)
          // 更改btn状态
          this.sendModel.countFlag = !this.sendModel.countFlag
          // 重置倒计时状态
          this.sendModel.countNum = 60
        };
        // 倒计时
        this.sendModel.countNum--
      }, 1000)
    },
    getCode() {
      this.countDown()

    },
    edit(i, item) {
      this.index = i
      this.dialogFormVisible = true
      this.ruleForm = {
        ...item
      }

    },
    openMenu(e, item) {
      console.log(e, item);
      this.delId = item.id
      this.visible = true;
      this.top = e.pageY;
      this.left = e.pageX;
      this.rightClickItem = item;
    },
    // 关闭右键菜单
    closeMenu() {
      this.visible = false;
    },

    handleDelete() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.$store.commit("del", this.delId)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },


    luck() {
      if (this.$store.state.list.length < 5) {
        this.$message({
          message: "人员未超过5人，清去添加人员",
          type: "warning",
        });
      } else {
        this.centerDialogVisible = true;
        this.flag = true;
      }
    },
    addlock() {
      this.status = true;
      let time = setInterval(() => {
        let num = Math.ceil(Math.random() * this.lists.length - 1);
        this.title = this.lists[num].name;
      }, 200);

      setTimeout(() => {
        clearInterval(time);
        let time1 = setInterval(() => {
          let num = Math.ceil(Math.random() * this.lists.length - 1);
          this.title = this.lists[num].name;
        }, 400);
        setTimeout(() => {
          clearInterval(time1);
          let time2 = setInterval(() => {
            let num = Math.ceil(Math.random() * this.lists.length - 1);
            this.title = this.lists[num].name;
          }, 600);
          setTimeout(() => {
            clearInterval(time2);
            let time3 = setInterval(() => {
              let num = Math.ceil(Math.random() * this.lists.length - 1);
              this.title = this.lists[num].name;
            }, 800);
            setTimeout(() => {
              clearInterval(time3);
              this.status = false;
            }, 1000);
          }, 2000);
        }, 3000);
      }, 5000);
    },

    handleScrollx() {
      this.flag = true
      if (this.timer !== null) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.flag = false
      }, 1000)
    }
  },

  created() { },
  mounted() {
    console.log(window.screenTop);
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  components: {},
  computed: {
    iconstyle: function () {
      //图标动态样式
      let arr = new Array();
      arr.push("transform:"); //先移动后旋转
      arr.push("translateX(" + this.icontranslateX + "px) ");
      arr.push("rotate(" + this.iconrotate + "deg) ");
      return arr.join("");
    },
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    },

  },

};
</script>

<style lang='scss' scoped>
.head {
  height: 2000px;
}

.active {
  display: none;
}

.deactive {
  color: red;
}

.ul {
  display: flex;
  align-items: center;

  li {
    margin: 10px;
  }
}

.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
}

.contextmenu li {
  margin: 0;
  padding: 7px 16px;
  cursor: pointer;
}

.contextmenu li:hover {
  background: #eee;
}

.every {
  width: 50px;
  height: 100px;
  position: fixed;
  right: 0;
  bottom: 20px;
  padding: 8px;
}

.con {
  text-align: center;
}

.dialog-footer {
  text-align: center;
}
</style>

