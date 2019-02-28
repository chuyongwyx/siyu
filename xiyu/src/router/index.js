import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Classify from '../components/classify/classify'
import Message from '../components/message/message'
import Cart from '../components/cart/cart'
import My from '../components/my/my'
import ErrorCom from '../components/error/error'
Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/home'
  	},
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
    	path:'/classify',
    	name:'classify',
      component: Classify,
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
    	path:"/cart",
    	name:"cart",
    	component:Cart
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
    	path:'**',
    	component:ErrorCom
    }
  ]
})
