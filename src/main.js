import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router/index'
import {Button} from 'mint-ui'

// Vue.use(MintUI)

Vue.config.productionTip = false

Vue.component(Button.name, Button)
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router
 
})
