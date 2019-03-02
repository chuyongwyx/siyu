<template>
	<div>
		张三
	</div>
</template>

<script>
	import Vuex from 'vuex'
	export default{
			created(){
				this.handle();
			},
			computed:{
				
					
			},
			methods:{
				...Vuex.mapActions({
					handle:'Position/handleToolsData'
				})
			}
			
		
	}
</script>

<style>
</style>