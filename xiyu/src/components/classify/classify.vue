<template>
		<div class="classify">
			<Header-com/>
			<ContentLeft/>
			<ConentRight/>
		</div>
</template>

<script>

	import Header from "./components/header"
	import ContentLeft from "./components/cont-left"
	import ContentRight from "./components/cont-right"
	import Vuex from "vuex"
	export default{
           components:{
			   "Header-com":Header,
			   "ContentLeft":ContentLeft,
			   "ConentRight":ContentRight
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
	.classify{
		width: 100%;
		height: 100%;
		display: flex;
	}
</style>