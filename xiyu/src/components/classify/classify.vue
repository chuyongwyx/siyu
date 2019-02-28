<template>
		<div class="classify">
			<Header-com/>
			<Content-com/>
		</div>
</template>

<script>
	import Header from "./components/header"
	import Content from "./components/content"
	import Vuex from "vuex"
	export default{
           components:{
			   "Header-com":Header,
			   "Content-com":Content,
		   },
		   computed:{
               ...Vuex.mapState({
				   state:state=>state.classify,
				   list:state=>state.classify.list
			   })
		   },
		   created(){
			   this.handleClassifyData();
			//    this.handleRecommendImg();
		   },
		   methods:{
			   ...Vuex.mapActions({
				   handleClassifyData:"classify/handleClassifyData"
			   }),
			   ...Vuex.mapActions({
                    handleRecommendImg: "classify/handleRecommendImg"
                 })
		   }
	}
</script>

<style scoped lang="scss">
$color :red;
div{
	color: $color;
}
</style>