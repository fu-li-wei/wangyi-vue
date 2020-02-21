<template>
  <div id="footerContainer">
    <div :class="{active: $route.path === '/home'}" @click="goPath('/home')" class="botItem">
      <i class="iconfont icon-earth"></i>
      <span>首页</span>
    </div>
    <div :class="{active: $route.path === '/classify'}" @click="goPath('/classify')" class="botItem">
      <i class="iconfont icon-category"></i>
      <span>分类</span>
    </div>
    <div :class="{active: $route.path === '/buy'}" @click="goPath('/buy')" class="botItem">
      <i class="iconfont icon-furniture"></i>
      <span>值得买</span>
    </div>
    <div :class="{active: $route.path === '/car'}" @click="goPath('/car')" class="botItem">
      <i class="iconfont icon-cart-Empty"></i>
      <span>购物车</span>
    </div>
    <div :class="{active: $route.path === '/my'}" @click="goPath('/my')" class="botItem">
      <i class="iconfont icon-office-supplies"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      goPath(path){
        //跳转到指定的页面 
        //编程式导航 $router  ||  $route
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus">
#footerContainer
  background-color #fff
  display flex
  border-top 1px solid #eee
  position fixed
  left 0
  bottom -1px
  width 100% + 1px
  height 100px
  box-sizing border-box
  .botItem
    width 25%
    height 72px
    text-align center
    display flex
    flex-direction column
    color rgb(127, 127, 127)
    &.active
      color rgb(180, 40, 45)
    .iconfont
      font-size 62px
</style>
