import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Classify from '../components/classify/classify'
import Message from '../components/message/message'
import Cart from '../components/cart/cart'
import My from '../components/my/my'
import ErrorCom from '../components/error/error'

/*首页下面的二级路由*/
import Tools from '../components/home/findclass/tools/tools';
import Ppe from '../components/home/findclass/ppe/ppe';
import Cleaning from '../components/home/findclass/cleaning/cleaning';
import Office from '../components/home/findclass/office/office';
import Lab from '../components/home/findclass/lab/lab';
import Diya from '../components/home/findclass/diya/diya';
import Bearing from '../components/home/findclass/bearing/bearing';
import Pneummatic from '../components/home/findclass/pneummatic/pneummatic';
import Instruments from '../components/home/findclass/instruments/instruments';
import ChannelList from '../components/home/findclass/channel-list/channel-list' ;

import Ads from '../components/home/findclass/firstmore/more';

import Position from '../components/home/findclass/position/position';

//登录路由
import Login from "../components/login/login";
Vue.use(Router)



const router= new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/home'
  	},
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
      	frag:true
      }
    },
    {
    	path:'/classify',
    	name:'classify',
      component: Classify,
      meta:{
      	frag:true
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta:{
      	frag:true
      }
    },
    {
    	path:"/cart",
    	name:"cart",
    	component:Cart,
    	meta:{
      	frag:true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta:{
      	frag:true
      }
    },
    {
    	path:'/login',
    	name:'login',
    	component:Login,
    	meta:{
    		frag:false
    	}
    },
    //这里是二级页面中的路由配置
    {
    	path:'/position',
    	name:'position',
    	component:Position,
    	 meta:{
      	 frag:false
      }
    },
    {
		 	path:'/tools',
			name:'tools',
    	component:Tools,
    	 meta:{
      	frag:false
      }
    },
    {
    	path:'/ppe',
    	name:'ppe',
    	component:Ppe,
    	meta:{
      	frag:false
      }
    },
    {
    	path:'cleaning',
    	name:'cleaning',
    	component:Cleaning,
    	meta:{
      	frag:false
      }
    },
    {
    	path:'/office',
    	name:'office',
    	component:Office,
    	meta:{
      	frag:false
      }
    },
    {
    	path:'/lab',
    	name:'lab',
    	component:Lab,
    	meta:{
      frag:false
      }
    },
    {
    	path:'/diya',
    	name:'diya',
    	component:Diya,
    	meta:{
      	frag:false
      }
    },
    {
    	path:'/bearing',
    	name:'bearing',
    	component:Bearing,
    	meta:{
      	frag:false
      }
    },
    {
    	path:'/pneummatic',
    	name:'pneummatic',
    	component:Pneummatic,
    	 meta:{
      		frag:false
      }
    },
    {
    	path:'/instruments',
    	name:'instruments',
    	component:Instruments,
    	meta:{
      		frag:false
      }
    },
    {
    	path:'/channel-list',
    	name:'channel-list',
    	component:ChannelList,
    	meta:{
      		frag:false
      }
    },
    {
    	path:'/more',
    	name:'more',
    	component:Ads,
    	meta:{
      	frag:false
      }
    },
    {
    	path:'**',
    	component:ErrorCom
    }
  ]
})

   router.beforeEach((to,from,next)=>{

     var routers = ["my"];
//"position","tools","ppe","cleaning","office","lab","diya","bearing","pneummatic","instruments","channel-list","more"
     if(routers.indexOf(to.name)!=-1){
           let flag = to.meta.frag;

           if(flag){
             next('/login');
           }
  		 }else{
       		next();
     }
   })
   
export default router