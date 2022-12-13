<template>
  <div class="title">
    <div class="box">
      <el-form class="form" ref="form" :model="form" :rules="rules">
        <el-form-item>
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="come('form')">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="img">
      <img src="xz.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import { setToken } from "../../untils/auth"
import { STATUS } from "@/constStatus/initStatus"
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    come(formName) {
      /***获取节点***/
      this.$refs[formName].validate((valid) => {
        if (valid) {
					/**获取登录接口的数据***/
          this.$http
            .post(this.$http.addorUrl("/login"), this.form)
            .then((res) => {
              console.log(res)
              if (res.data.meta.status == STATUS.SUCCESS) {
                setToken(res.data.data.token)
                this.$notify({
                  title: "登陆成功",
                  message: res.data.meta.mag,
                  type: "success",
                  duration: 4000
                })
                this.$router.replace("/welcome")
              } else {
                this.$notify.error({
                  title: "登陆失败",
                  message: res.data.meta.mag,
                  duration: 2000
                })
              }
            })
        }
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.title {
  background: url("~@/assets/bj.jpg");
  // background-color: #ccc;
  width: 100vw; //大小设置为100%
  height: 100vh; //大小设置为100%
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
}
.box {
  width: 460px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #ccc;
}
.img {
  width: 150px;
  height: 150px;
  position: fixed;
  top: 215px;
  border-radius: 50%;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #efefef;
  }
}
.form {
  margin: 50px;
}
</style>
