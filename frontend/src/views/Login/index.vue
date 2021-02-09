<template>
  <div class="login-body">
    <div class="login-contain" :class="{'login-wrap-show': loginWrapShow}">
      <div class="login-wrap">
        <div class="login-item">
          <input type="text" class="login-input" placeholder="请输入账号" v-model="username">
        </div>
        <div class="login-item">
          <input type="password" class="login-input" placeholder="请输入密码" value="test" v-model="password">
        </div>
        <div class="login-item">
          <div class="login-button" @click="login" v-loading="isLogin">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/user'
export default {
  data () {
    return {
      loginWrapShow: false,
      isLogin: false,
      password: '',
      username: '',
    }
  },
  mounted () {
    setTimeout(() => {
      this.loginWrapShow = true;
    }, 300)
  },
  methods: {
    login () {
      this.isLogin = true;
      let form = new FormData();
      form.append('username', this.username);
      form.append('password', this.password);
      api.login(form).then(res => {
        this.isLogin = false;
        if (!res.data.status) {
          this.$message({
            message: res.data.msg,
            type: 'warning'
          })
        } else {
          this.$router.replace({name: 'records'})
        }
      }).catch(err => {
        this.isLogin = false;
        this.$message({
          message: '登录失败，稍后再试',
          type: 'warning'
        })
      })
    },
  }
}
</script>
<style scoped>
  .login-body {
    height: 100%;
    background: url(../../assets/image/common/bj.jpg) no-repeat center center;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-contain {
    width: 540px;
    height: 550px;
    background: url(../../assets/image/common/e.png) no-repeat center center;
    background-size: 100% 100%;
    opacity: 0;
    transition: .3s;
    transform: translateY(-20px);
  }
  .login-wrap {
    position: relative;
    margin: 190px 50px 50px;
    overflow: hidden;
  }
  .login-wrap-show {
    opacity: 1;
    transform: translateY(0);
  }
  .login-item {
    margin: 40px 30px;
  }
  .login-item:first-child {
    margin-top: 0;
  }
  .login-input {
    text-indent: 12px;
    width: 100%;
    height: 58px;
    font-size: 20px;
    color: #000;
    outline: none;
    border: 0;
    border-radius: 5px;
  }
  .login-button {
    background: #00eaff;
    color: #fff;
    font-size: 26px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
</style>