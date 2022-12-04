<template>
  <div>
    <!-- 点击添加 -->
    <el-button type="primary" @click="dialogVisible = true"
      >新建todolist</el-button
    >
    <!-- 添加到日历页面 -->
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
        <ul>
          <li
            :class="item.status == '已完成' ? 'redcolor' : 'bluecolor'"
            v-for="(item, index) in $store.state.list"
            :key="index"
            v-show="item.date == data.day"
            @click="edit(item, index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </template>
    </el-calendar>

    <!-- 弹出框 -->
    <el-dialog title="添加趣事" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="事件名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="日期选择">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="事件状态">
          <el-radio-group v-model="form.status">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add()">立即创建</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑趣事" :visible.sync="dialogVisible1" width="50%">
      <el-form ref="form" :model="form1" label-width="80px">
        <el-form-item label="事件名称">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item label="日期选择">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form1.date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="事件状态">
          <el-radio-group v-model="form1.status">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="serve()">立即修改</el-button>
          <el-button @click="dialogVisible1 = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      form: {
        name: "",
        date: "",
        status: "",
      },
      form1: {
        name: "",
        date: "",
        status: "",
      },
      editIndex: -1,
    };
  },
  methods: {
    add() {
      console.log(this.form.date);
      console.log(this.form);
      //把时间格式从 / 转化成 -
      let str = this.form.date
        .toLocaleString()
        .split(" ")[0]
        .split("/")
        .join("-");
      //数字补0判断
      if (str.length < 10) {
        let newtime = this.insertStr(str, 8, "0");
        this.form.date = newtime;
      } else {
        this.form.date = str;
      }
      this.$store.commit("add", this.form);
      this.dialogVisible = false;
    },

    //在指定的位置插入一个字符串
    insertStr(source, start, newStr) {
      return source.slice(0, start) + newStr + source.slice(start);
    },
    edit(row, i) {
      this.dialogVisible1 = true;
      this.form1.name = row.name;
      this.form1.date = row.date;
      this.form1.status = row.status;
      this.editIndex = i;
    },
    serve() {
      //把时间格式从 / 转化成 -
      let str = this.form1.date
        .toLocaleString()
        .split(" ")[0]
        .split("/")
        .join("-");
      //数字补0判断
      if (str.length < 10) {
        let newtime = this.insertStr(str, 8, "0");
        this.form1.date = newtime;
      } else {
        this.form1.date = str;
      }
      this.$store.commit("serve", { ...this.form1, index: this.editIndex });
      console.log(this.form1);
      this.dialogVisible1 = false;
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.is-selected {
  color: #1989fa;
}
.redcolor {
  width: 50px;
  height: 20px;
  background-color: red;
  text-align: center;
  line-height: 20px;
}
.bluecolor {
  width: 50px;
  height: 20px;
  background-color: blue;
  text-align: center;
  line-height: 20px;
}
</style>
