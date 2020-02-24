import Home from '../pages/Home/Home.vue'
import Buy from '../pages/Buy/Buy.vue'
import Car from '../pages/Car/Car.vue'
import Classify from '../pages/Classify/Classify.vue'
import My from '../pages/My/My.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/EmailLogin/EmailLogin.vue'

export default [
    {
        path: '/home',
        component:Home
    },
    {
        path: '/buy',
        component:Buy
    },
    {
        path: '/car',
        component:Car
    },
    {
        path: '/classify',
        component:Classify
    },
    {
        path: '/my',
        component:My
    },
    {
        path: '/login',
        component:Login
    },
    {
        path:'/search',
        component:Search,
        meta:{
            showFooter:false
        }
    },
    {
        path: '/',
        redirect:'/home'
    }

]