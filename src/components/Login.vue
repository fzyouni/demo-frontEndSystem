<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked"  class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录
      </el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</template>
<script>
import { userLogin } from '../api/api'
export default {
  data () {
    return {
      logining: false,
      ruleForm: {
        account: '张三',
        checkPass: '123'
      },
      rules: {
        account: [{
          required: true, message: '请输入账号', trigger: 'blur'
        }]
      },
      checkPass: [{
        required: true, message: '请输入密码', trigger: 'blur'
      }],
      checked: false
    }
  },
  methods: {
    handleSubmit () {
      debugger
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          let loginParams = { userName: this.ruleForm.account, userPassword: this.ruleForm.checkPass }
          userLogin(loginParams).then(result => {
            this.logining = false
            let { code, message, data } = result
            if (code !== 'success') {
              this.$message({
                message: message,
                type: 'error'
              })
            } else {
              sessionStorage.setItem('user', JSON.stringify(data))
              this.$router.push({ path: '/home' })
            }
          })
        } else {
          console.log('submit error!')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
