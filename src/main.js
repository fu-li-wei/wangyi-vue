import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router/index'
// import router from './router'
import store from './store/index'
import {Button} from 'mint-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(MintUI)

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.component(Button.name, Button)
// Vue.component(Input.name, Input)
new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router,
  store
})
