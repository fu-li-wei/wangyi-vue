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
        <div class="wrapper" ref="wrapper">
          <ul class="content">
            <li>首页</li>
            <li>网易严选</li>
            <li>网易严选</li>
            <li>网易严选</li>
            <li>网易严选</li>
            <li>网易严选</li>
            <li>网易严选</li>
            <li>网易严选</li>
          </ul>
        </div>
        <span class="xia icon-arrow-down"> </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
     mounted() {
       new BScroll('.wrapper',{
         scrollX:true
       })
    }
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
  .swiperBar
    .wrapper
      width 100%
      height 60px
      overflow hidden
      .content
        margin 0
        padding-left 30px
        display flex
        list-style none 
        width 2000px
        font-size 28px
        li
          width 100xp
          height 60px
          line-height 60px
          padding 0 20px
    .xia
      position relative

</style>
