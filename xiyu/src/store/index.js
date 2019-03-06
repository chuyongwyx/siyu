import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import classify from "./classify";
import more from "./more"
import message from "./message";
import Position from "./position";
import seconds from "./seconds";

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
        more,
		message,
		Position,
		seconds
		
    }
})

export default store;