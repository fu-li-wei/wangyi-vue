<template>
  <div id="GoodsListContents">
    <div class="list-left wrapper" ref="wrapper">
        <ul class="content" >
            <li v-for="(item, index) in cateLists" :key="index" :class="activeClass==index?'actioon':''" class="item" @click="changeList(index)">{{item.name}}</li> 
        </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import cateLists from '../../common/data/cateLists.json'  
import { mapState } from 'vuex'
  export default {
    data(){
        return{
            cateLists,
            activeClass:0,
            // ListId:this.$store.state.listId
        }
    },
    mounted() {
        this.$nextTick(() => { 
            this.scroll = new BScroll(this.$refs.wrapper, {click: true}) 
        })
            
    },
    computed: {
        ...mapState({
            listId: state => state.listId,
        })
    },
    methods: {
        changeList(index){
            console.log(this.cateLists[index].id)
            let listId = this.cateLists[index].id
            this.activeClass = index
            this.$store.commit('changeListId',listId)
        }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#GoodsListContents
    .list-left
        float left        
        width 162px
        height 1150px
        border-right 3px solid #eee
        ul
            width 162px
            padding-top 10px
            li
                height 40px
                text-align center
                line-height 40px
                font-size 28px
                margin-top 30px
                &.actioon
                    color #ab2b2b
                    border-left 6px solid #ab2b2b 
    
</style>
