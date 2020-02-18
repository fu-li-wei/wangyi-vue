import Home from '../pages/Home/Home.vue'
import Buy from '../pages/Buy/Buy.vue'
import Car from '../pages/Car/Car.vue'
import Classify from '../pages/Classify/Classify.vue'
import My from '../pages/My/My.vue'

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
        path: '/',
        redirect:'/home'
    }

]