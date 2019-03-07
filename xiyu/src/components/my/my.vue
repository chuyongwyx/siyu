<template>
	<div class = "preson">
		<Header-com/>
		<!-- <Top-com/> -->
		<List-com/>
	</div>
</template>

<script>

	import Vuex from "vuex";
	import Header from "./components/header";
	// import Top from "./components/top";
	import List from "./components/list";
	import cookie from 'js-cookie';
	import Vue from 'vue';
	export default{

		components : {
			"Header-com" : Header,
			// "Top-com" : Top,
			"List-com" : List

		},

		
		created(){
				console.log(cookie.get('token'))
			},
		  methods:{
		
		 },
		   	
		beforeRouteEnter(to,from,next){
     				if(cookie.get('token')){
     					next();
     				}else{
						
						next('\login')
     				}
     		
     	}

	}
</script>

<style lang="scss" scoped>
	.preson{
		width:100%;
		height:100%;
		padding-top:1rem;
		background:#f2f2f2;
	}
</style>
