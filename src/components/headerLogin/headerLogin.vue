<template>
    <div id="headerGuideLogin">
        <div class="wrap">
            <div class="left">
                <i class="icon iconfont icon-earth" @click="goToIndex"></i>
            </div>
            <span class="center"></span>
            <div class="right">
                <i class="icon iconfont icon-fangdajing" @click="goToSearch"></i>
                <i class="icon iconfont icon-cart-Empty" @click="goToCar"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            goToSearch(){
                // console.log(this);
                this.$router.push('/search')
            },
            goToIndex(){
                // console.log(this);
                this.$router.push('/home')
            },
            goToCar(){
                // console.log(this);
                this.$router.push('/car')
            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#headerGuideLogin
    width 100%
    height 100px
    position relative
    position fixed
    left 0
    top 0
    z-index 10
    box-sizing border-box
    .wrap
        width 100%
        height 100px
        box-sizing border-box
        padding 0px 26px 0 24px
        background-color #fff
        display flex
        .left
            width 46px
            height 100px
            line-height 100px
            i 
                font-size 60px
        .center
            width 172px
            height 54px
            transform translateX(-50%)
            display block
            font-size 36px
            text-align center
            line-height 100px
            position absolute
            top 23px
            left 50%
            background-image url("../../common/images/wangyiyanxauan.png")
            background-size 172px 54px
        .right
            width 141px
            height 100px
            line-height 100px
            display flex
            position absolute
            right 0
            i 
                font-size 40px
            .icon-cart-Empty
                margin-left 14px
                
            

</style>