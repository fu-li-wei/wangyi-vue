<template>
  <div id="contenter">
      <HeaderGuideLogin/>
      <div class="loginWrap">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="" class="img">
      </div>
      <div class="userForm">
        <el-input placeholder="邮箱账号" v-validate="'required'"  clearable size="large"></el-input>
        <el-input placeholder="请输入密码" v-validate="'required'" size="large"></el-input>
        <el-button size="large">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderGuideLogin from '../../components/headerLogin/headerLogin'
  export default {
      components:{
        HeaderGuideLogin
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#contenter
  width 100%
  .loginWrap
    width 100%
    height 100%
    box-sizing border-box
    .logo
      width 100%
      height 90px
      margin-top 156px
      text-align center
      .img
        width 268px
        height 90px
    .userForm
      width 100%
      height 578px
      margin-top 40px
      background-color #fff
      padding 116px 40px 0
      box-sizing border-box
      .el-input--large
        height 91px
        border-bottom 1px solid #000
        .el-input__inner
          height 91px
          line-height 91px
          font-size 28px
          border none 
        .el-input__suffix
          font-size 28px
          .el-input__suffix-inner
            font-size 28px
            i 
              font-size 28px
              line-height 91px
    .el-button--large
      margin-top 100px
      border-color #dd1a21 
      background-color #dd1a21
      width 100%
      height 91px
      span 
        color #ffffff
        font-size 28px
 
</style>
