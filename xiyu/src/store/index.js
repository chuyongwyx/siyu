import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import classify from "./classify";
import message from "./message";
Vue.use(Vuex);

let state = {};
let actions = {};
let getters = {};
let mutations = {};


const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules:{
        home,
        classify,
		message
    }
})

export default store;