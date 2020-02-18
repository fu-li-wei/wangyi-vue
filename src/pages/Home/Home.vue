<template>
  <div id="homeContenter">
    <div class="topSearch">
      <a href="">
        <img src="../../common/images/wangyiyanxauan.png" alt="">
      </a>
      <input type="text" placeholder='提示信息!!'>
      <mt-button class="mint-button mint-button--danger is-plain">登录</mt-button>
    </div>
    <div class="swiperBar">
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">
#homeContenter  
  margin 0
  padding 0
  .topSearch
    display flex
    padding 32px 30px 
    a
      img 
        width 138px
        height 40px
    input   
      width 442px
      height 56px
      border none 
      background #eee
      border-radius 8px
      margin-left  10px
      margin-top -8px
      margin-right 10px
      padding-left 50px
      background-image: url('../../common/images/fagdajing.png');
      background-size 30px 30px
      background-position 15px 15px
      background-repeat:no-repeat;
    button  
      border-radius 10px
      width 74px
      height 40px

    
 
</style>
