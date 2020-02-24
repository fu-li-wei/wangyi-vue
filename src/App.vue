
<template>
  <div>
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from './components/footerGuide/footrerGuide'
export default {
  name:'app',
  components:{FooterGuide}
 
}
</script>

<style lang="stylus">

 
</style>
