<template>
		<div class="classify">
			<Header-com/>
			<ContentLeft/>
		</div>
</template>

<script>
	import Header from "./components/header"
	import ContentLeft from "./components/cont-left"
	import Vuex from "vuex"
	export default{
           components:{
			   "Header-com":Header,
			   "ContentLeft":ContentLeft,
		   },
		  
		   created(){
			   this.handleClassifyData();
				
		   },
		   methods:{
			   ...Vuex.mapActions({
				   handleClassifyData:"classify/ClassifyHandleData"
			   }),
			  
		   }
	}
</script>

<style scoped lang="scss">

</style>