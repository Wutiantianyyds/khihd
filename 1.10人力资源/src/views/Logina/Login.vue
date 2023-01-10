<template>

  <div class="home">

   <div class="form">
		 <!-- 表单 -->
		 <h1>i H R M 后台登录系统</h1>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item  prop="username">
        <el-input v-model="ruleForm.username" :prefix-icon="UserFilled" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" type="password" :prefix-icon="Lock" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)" class="login">登录</el-button>
        <!-- <el-button @click="resetForm(ruleFormRef)">重置</el-button> -->
      </el-form-item>
    </el-form>
    <!-- 表单 -->
	 </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, getCurrentInstance } from 'vue'
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
// const formSize = ref('default')
import type { FormInstance, FormRules } from 'element-plus'
import * as ts from '../common/api/api'
import { login } from '@/api/login'

import { UserFilled ,Lock} from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'

    const ruleForm: ts.Login = reactive({
      username: '',
      password: ''
    })

    const ruleFormRef = ref<FormInstance>()
    const rules = reactive<FormRules>({
      username: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },
        { min: 2, max: 5, message: '请输入正确用户名', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '密码名不能为空', trigger: 'blur' },
        { min: 3, max: 10, message: '请输入正确密码', trigger: 'blur' }
      ]
    })

    const router = useRouter()
    const submitForm =  () => {
			login(ruleForm).then((res) => {
    	console.log(res)
			if(res.status==200){
					localStorage.setItem('token',res.data.code)
					router.push('./about')
					 ElNotification({
    title: '登录成功',
    message: '恭喜你登录成功',
    type: 'success',
  })
			}

  })
          console.log('submit!')


    }

    // return {
    //   ruleForm,
    //   submitForm,
    //   rules,
    //   ruleFormRef,
    //   router
    // }

</script>

<style lang="scss" scoped>
.home {
	 width: 100vw;
  height: 100vh;
  display: flex;
	align-items: center;
  justify-content: center;
	background-image: url('@/assets/login.jpg');

}
.form{
	h1{
		text-align: center;
		padding: 10px;
		color: #fff;
		font-size: 40px;
		font-weight: normal;
	}
}
.login{
	width: 86%;
	height: 60px;
	background-color: #407FFE;
}
.demo-ruleForm {
  width: 500px;
  height: 260px;
  // background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}
.el-form-item--feedback {
  margin-top: 40px;
  margin-left: -20px;
}
.el-input {
  width: 360px !important;
	height: 40px;
	border-radius: 20px;
	border: 0;
}


</style>
