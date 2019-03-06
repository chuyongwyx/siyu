<template>
	<div>
		我的
	</div>
</template>

<script>
	import cookie from 'js-cookie';
	import Vue from 'vue';
	
	export default{
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