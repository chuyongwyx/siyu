<template>
	<div class = "preson">
		<Header-com/>
		<Top-com/>
		<List-com/>
	</div>
</template>

<script>
	import cookie from 'js-cookie';
	import Vue from 'vue';
	import Header from "./components/header";
	import Top from "./components/top";
	import List from "./components/list"
	export default{
		components : {
			"Header-com" : Header,
			"Top-com" : Top,
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

<style>
</style>