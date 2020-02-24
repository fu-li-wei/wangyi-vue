<template>
  <div id="homeContenter">
    <div style="width:100%;height:100px"></div>
    <div class="header">
      <div class="topSearch">
        <a href="">
          <img src="../../common/images/wangyiyanxauan.png" alt="">
        </a>
        <input type="text" placeholder='提示信息!!' @click="goToSearch">
        <mt-button class="mint-button mint-button--danger is-plain">登录</mt-button>
      </div>
      <div class="swiperBar">
          <div class="wrapper" ref="wrapper">
            <ul class="content">
              <li class="hoverLi" @click="updataLI">首页</li>
              <!-- <li v-for="(item, index) in datas[0].subCateList" :key="index" @click="{updataLI}">{{item.name}}</li> -->
              <li v-for="(item, index) in indexCateModule" :key="index">{{item.name}}</li>
              <!-- <li>网易严选</li>
              <li>网易严选</li>
              <li>网易严选</li>
              <li>网易严选</li>
              <li>网易严选</li> -->
            </ul>
          </div>
          <span class="xia"><i class="iconfont icon-arrow-down"></i></span>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in indexCateModule" :key="index">
            <img :src="item.imgUrl" alt="">
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>
    <div class="smallBar">
      <div class="icoo">
        <i style="background-image: url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"></i>
        <span>网易自营品牌</span>
      </div>
       <div class="icoo">
         <i style="background-image: url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png)"></i>
        <span>30天无忧退货</span>
      </div>
       <div class="icoo">
         <i style="background-image: url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png)"></i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <div class="spList">
      <ul>
        <li v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl" class="img">
          <span>{{item.text}}</span>
        </li>
      </ul>
    </div>
    <div class="haiBao">
      <div class="baner">
        <img src="../../common/images/guanggao.png" alt="">
        <img src="../../common/images/xin.png" alt="" class="xin">
      </div>
    </div>
    <div class="blue">
      <div class="top">
          <a style="background:url(https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif);background-size:100%"></a>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <img src="../../common/images/list.png" alt="">
          </li>
           <li>
            <img src="../../common/images/list.png" alt="">
          </li>
           <li>
            <img src="../../common/images/list.png" alt="">
          </li>
           <li>
            <img src="../../common/images/list.png" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="newPerson">
      <span class="title"> - 新人专享礼 - </span>
      <div class="content">
        <div class="con-left">
          <span>新人专享礼包</span>
          <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
        </div>
        <div class="con-right">
          <div class="right-top">
            <span>福利社</span>
            <div>今日特价</div> 
            <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png" alt="">
          </div>
          <div class="right-bottom">
            <span>新人拼团</span>
            <span class="xiao">
              1元起包邮
            </span>
          </div>
        </div>
      </div>
    
    
    </div>
    <div class="rexiao">
      <span>类目热销榜</span>
      <div class="cont">
        <div class="cont-top">
          <a href="">
            <span>热销榜</span>
            <img src="https://yanxuan-item.nosdn.127.net/db4a9cbd2bdfed303e2536db8b40fe33.png" alt="">
          </a>
          <a href="">
            <span>好评榜</span>
            <img src="https://yanxuan-item.nosdn.127.net/487de4b51822cf85b859bb94cd65e9a6.png" alt="">
          </a>
        </div>
        <div class="cont-bot">
          <a class="item" v-for="(item, index) in indexData.categoryHotSellModule.categoryList.slice(2,10)" :key="index">
            <span>{{item.categoryName}}</span>
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="xianshigou">
      <div class="gou-top">
        <div class="daotimg">
          <p>限时购</p>
        </div>
        <span> 更多 <b>></b></span>
      </div>
      <div class="gou-b">
        <a class="item" v-for="(item, index) in indexData.flashSaleModule.itemList" :key="index">
            <div>
                <img :src="item.picUrl" alt="">
            </div>
            <span class="new">￥{{item.activityPrice}}<s>￥{{item.originPrice}}</s></span>
        </a>
      </div>
    </div>
    <div class="foot">
      <a href="">下载APP</a>
      <a href="">电脑版</a>
      <p class="copyright">
        <span>网易公司版权所有 © 1997-</span>
        <span>2020</span><br>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import 'swiper/css/swiper.css'
  import  Swiper from 'swiper'
  import indexCateModule from '../../common/data/indexCateModule.json'
  import indexData from '../../common/data/index.json'
  export default {
    data(){
      return{
        // datas:navigation,
        // showLi:true
      }
    },
    data(){
      return{
        indexCateModule,
        indexData
      }
    },
    mounted() {
      new BScroll('.wrapper',{
        scrollX:true
      }),

      new Swiper('.swiper-container',{  
        scrollbar: {
          el: '.swiper-scrollbar',
        },
          autoplay:true,
          loop:true
      })
    },
    methods:{
      updataLI(){
        this.showLi = !this.showLi
      },
      goToSearch(){
        this.$router.push('/search')
      }
    }
  }
</script>

<style lang="stylus">
#homeContenter  
  margin 0
  padding 0 
  // height 10000px
  background-color #eee
  .header
    background-color #fff
    width 100%
    height 180px
    position fixed
    z-index 5
    top 0 
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
      // padding-left 40px
      .wrapper
        width 100%
        // height 60px
        overflow hidden
        position absolute
        .content
          margin 0
          padding 0px
          display flex
          list-style none 
          width 1376px
          font-size 28px
          li
            width 100xp
            height 60px
            line-height 60px
            padding 0 20px
          .hoverLi
            color #DD1A21
            border-bottom 3px solid #DD1A21
      .xia
        display block
        width 100px
        height 50px
        background #fff
        position relative
        right -650px
        top 10px
  .swiper-container 
    // margin-top -100px
    width: 100%;
    height: 370px;
    // margin-top 30px
    .swiper-wrapper
      .swiper-slide
        img 
          width 100%
          height 100%
  .smallBar
    width 100%
    height 72px
    display flex
    justify-content space-around
    line-height 72px
    border-bottom 1px solid #eee
    background-color #fff
    .icoo
      i 
        display inline-block
        width 40px
        height 45px
        background-size 40px 40px
        background-repeat no-repeat
        // line-height 40px
        vertical-align: middle
        span
          padding-left 35px
          background-size 50px 50px
          background-position 0 0
          background-repeat no-repeat
  .spList
    width 100%
    height 372px
    border-bottom 1px solid #eee
    background-color #fff
    padding 20px 0 20px 0
    ul
      list-style none 
      padding 0
      margin 0
      li
        margin 10px 20px
        display inline-block
        height 150px
        position relative
        img 
          width 110px
          height 110px
        span 
          position absolute
          width 120px
          left 0
          bottom -10px
  .haiBao
    width 100%
    height 240px
    .baner
      position relative
      img   
        width 100%
        height 240px
      .xin
        width 168px
        height 168px
        position absolute
        left 80px
        top 30px
  .blue
    width 720px
    height 560px
    background-color #1674e3
    // margin-top -10px
    // padding-top 10px
    padding 10px 10px 0 20px
    .top
      height 160px
      a
        display block
        width 710px
        height 160px
        // margin 0 auto
        border-radius 10px
    .bottom
      ul
        list-style none 
        margin 0
        padding 0
        display inline
        width 90%
        height 500px
        li
          width 351px
          height 186px
          margin-top 5px
          float left
          &:nth-child(2n) 
            margin-left 5px
          img
            display block
            height 186px
            width 351px
  .newPerson
    width 100%
    height 580px
    background-color #fff
    margin-top 20px
    .title  
      font-size 32px
      text-align center
      // margin 0 auto
      display block
      line-height 80px
    .content
      // width 640px
      padding-left 20px
      .con-left
        width 342px
        height 434px
        background-color rgb(249, 233, 207)
        padding-top 30px
        box-sizing border-box
        float left
        span  
          margin-left 50px
          font-size 32px
        img
          display block
          margin 80px auto
          width 258px
          height 258px
      .con-right
        width 342px
        // height 214px
        float right
        border-radius 5px
        margin-right 40px
        .right-top
          width 100%
          height 214px
          border-radius 5px
          background-color rgb(251, 226, 211)
          padding-top 15px
          box-sizing border-box
          span 
            margin-left 50px
            font-size 32px
          img 
            width 200px
            height 200px
            position relative
            left 140px
            top -30px
          div
            width 100px
            height 20px
            color #7f7f7f
            position relative
            top 40px
            left -100px
            display inline-block
        .right-bottom
          margin-top 5px
          width 100%
          height 214px          
          border-radius 5px 
          background-color rgb(255, 236, 194)
          box-sizing border-box
          padding-top 15px
          span 
            margin-left 50px
            font-size 32px
          .xiao
            position: relative;
            display: inline-block;
            padding: 0 .13333rem;
            height: .42667rem;
            background: #CBB693;
            border-radius: .05333rem;
            color: #fff;
            font-size: .29333rem;
            line-height: .42667rem;
            text-align: center;
  .rexiao
    background-color #fff
    padding 0 30px
    width 100%
    height 710px
    margin-top 30px
    margin-bottom 20px
    box-sizing border-box
    span  
      display block
      font-size 32px
      height 100px
      line-height 100px
    .cont
      .cont-top
        width 100%
        height 200px
        margin-bottom 10px
        a
          display inline-block
          width 340px
          height 200px
          background-color #EBEFF6
          border-radius 5px
          text-decoration:none
          &:first-child
            margin 0 5px 5px 0
            background-color rgb(249, 243, 228)
          span 
            // display inline-block
            height 200px
            line-height 200px
            color #000
            margin auto 0
            padding-left 20px
            font-size 28px
            width 100px
            float left
            // text-decoration none
            &:before
              content: ''
              position: absolute
              left: 0
              bottom: 3px
              width: .64rem;
              height: .05333rem;
              background: #333;
          img 
            width 200px
            height 200px
            display inline-block
      .cont-bot
        a
          display block
          float left 
          width 162px
          height 180px
          margin 0 10px 10px 0
          border-radius 5px
          background-color #f5f5f5
          span 
            height 60px
            line-height 60px
            font-size 24px
            text-align center
            margin-top 4px
          img
            display block
            width 120px
            height 120px
            margin -10px auto 0
  .xianshigou
    width 100%
    height 700px
    background-color #fff
    box-sizing border-box
    padding 0 30px
    margin-bottom 30px
    .gou-top
      height 100px
      .daotimg 
        float left
        p
          font-size 34px
      span 
        float right
        font-size 26px
        line-height 100px
    .gou-b
      width 100%
      height 600px
      margin 0 auto
      a
        display block
        width 216px
        height 300px
        // background-color #f5f5f5 
        margin-right 13px
        float left
        div
          width 216px
          height 216px
          background-color #f5f5f5
          img
            margin 0 auto
            display block
            width 200px
            height 200px
        span 
          color red
          font-size 28px
          // text-align center
          margin-left 30px
          s
            color #7f7f7f
            font-size 24px

  
  
  .foot
    width 100% 
    height 300px
    background-color #414141
    a
      display inline-block
      width 130px
      height 50px
      border 1px solid #eee
      color #eee
      border-radius 5px
      text-align center
      line-height 50px
      &:first-child
        margin 30px 30px 0 220px  
    p
      text-align center
      font-size: .32rem;
      line-height: .42667rem;
      color: #999;
</style>
