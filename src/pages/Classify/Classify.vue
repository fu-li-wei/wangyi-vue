<template>
  <div id="classifyContent">
    <div class="search">
      <div class="inpt">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜索商品, 共20259款好物</span>
      </div>
    </div>
    <div class="listContent swiperBar">
      <div class="list-left wrapper">
        <ul class="content" >
          <li class="actioon">1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
        </ul>
      </div>
      <div class="list-right">
          <div class="list-rightTop">
            <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png" alt="">
          </div>

          <div class="list-ringhtBottom">
            <ul class="list" data-reactid=".0.1.1.0.0.1:$categroup0.1">
              <li class="cateItem" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_0">
                <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png">
                <span>精选好物15元起</span>
              </li>
              <li class="cateItem" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_1">
                <img src="https://yanxuan.nosdn.127.net/cda4a56526a230055bea8221a6b7ab11.png">
                <span>精选好物15元起</span>
              </li>
              <li class="cateItem" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_2">
                <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png">
                <span>精选好物15元起</span>
              </li>
              <li class="cateItem" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_3">
                <img src="https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png">
                <span>精选好物15元起</span>
              </li>
              <li class="cateItem" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_5">
                <img src="https://yanxuan.nosdn.127.net/a449c1305adff30ce82922f2e3546cf2.png">
                <span>精选好物15元起</span>
              </li>
              <li class="cateItem" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_6">
               <img src="https://yanxuan.nosdn.127.net/1aa18004d8b43e7bc55d54dd03ee5f29.png">
               <span>精选好物15元起</span>
              </li>

              <li class="cateItem" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_7">
                <img src="https://yanxuan.nosdn.127.net/0cb19987ddd873c693272c60352ba6a7.png">
                <span>精选好物15元起</span>
              </li>
            </ul>

          </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import '../../common/data/cateLists.json'
import BScroll from 'better-scroll'
import 'swiper/css/swiper.css'
import  Swiper from 'swiper'
  export default {
    mounted() {
      new BScroll('.wrapper',{
        scrollY:true
      })

      new Swiper('.swiper-container',{  
        scrollbar: {
          el: '.swiper',
        },
          direction : 'vertical',
          autoplay:true,
          loop:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#classifyContent
  width 100%

  height 100%
  .search
    width 100%
    height 88px
    border-bottom 1px solid #eee
    box-sizing:border-box
    padding-top 15px
    .inpt 
      width 90%
      height 56px
      background-color #ededed
      margin 0 auto
      line-height 56px
      border-radius 10px
      text-align center
      color #666
      span 
        font-size 28px
        margin-left 10px
  .listContent
    width 750px
    height 1148px
    overflow hidden
    .list-left
      float left        
      width 162px
      height 1150px
      border-right 3px solid #eee
      ul
        width 162px
        padding-top 10px
        li
          // display block
          // float left
          height 40px
          text-align center
          line-height 40px
          font-size 28px
          // padding 10px 0
          margin-top 30px
          &.actioon
            color #ab2b2b
            border-left 6px solid #ab2b2b 
    .list-right
      width 584px
      height 100%
      box-sizing border-box
      padding 20px
      float right 
      .list-rightTop  
       width 528px
       height 192px
       margin-bottom 50px
       img 
        width 100%
        height 100%
      .list-ringhtBottom
        height 100%
        ul 
          height 100%
          li
            width 144px
            height 216px
            float left
            display inline-block
            margin-left 34px
            img 
              width 144px
              height 144px
            span 
              display block
              // width 100%
              text-align center
  


 
</style>
