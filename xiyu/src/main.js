// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/js/flexble'
import './common/css/reset.css'
import store from "./store"
import "./assets/icon/iconfont.css"
import Observer from './common/js/observer'
import "./mock/position";
import cookie from "js-cookie"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.prototype.Observer = Observer;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
