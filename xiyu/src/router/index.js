import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Classify from '../components/classify/classify'
import Message from '../components/message/message'
import Cart from '../components/cart/cart'
import My from '../components/my/my'
import ErrorCom from '../components/error/error'
import Tools from '../components/home/findclass/tools/tools'
import Ppe from '../components/home/findclass/ppe/ppe'
import Cleaning from '../components/home/findclass/cleaning/cleaning'
import Office from '../components/home/findclass/office/office'
import Lab from '../components/home/findclass/lab/lab'
import Diya from '../components/home/findclass/diya/diya'
import Bearing from '../components/home/findclass/bearing/bearing'
import Pneummatic from '../components/home/findclass/pneummatic/pneummatic'
import Instruments from '../components/home/findclass/instruments/instruments'
import ChannelList from '../components/home/findclass/channel-list/channel-list' 
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
      component: Home,
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
    //这里是二级页面中的路由配置
    {
		 	path:'/tools',
			name:'tools',
    	component:Tools
    },
    {
    	path:'/ppe',
    	name:'ppe',
    	component:Ppe
    },
    {
    	path:'cleaning',
    	name:'cleaning',
    	component:Cleaning
    },
    {
    	path:'/office',
    	name:'office',
    	component:Office
    },
    {
    	path:'/lab',
    	name:'lab',
    	component:Lab
    },
    {
    	path:'/diya',
    	name:'diya',
    	component:Diya
    },
    {
    	path:'/bearing',
    	name:'bearing',
    	component:Bearing
    },
    {
    	path:'/pneummatic',
    	name:'pneummatic',
    	component:Pneummatic
    },
    {
    	path:'/instruments',
    	name:'instruments',
    	component:Instruments
    },
    {
    	path:'/channel-list',
    	name:'channel-list',
    	component:ChannelList
    },
    {
    	path:'**',
    	component:ErrorCom
    }
  ]
})
