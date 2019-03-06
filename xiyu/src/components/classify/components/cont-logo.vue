<template>
	<div class="logo-main">
		<div v-for="(item,index) in imgsrc" class="imgs">
			<img :src="item.brandPic" alt="" />
		</div>
	</div>
</template>

<script>
	import  Vuex from 'vuex'
	export default{
		data(){
			return{
				imgsrc:[]
			}
		},
		created(){
			this.imgsrc =this.data[0][0].boutiqueBrands
			//brandPic
			
		},
		computed:{
				...Vuex.mapState({
						data:state=>state.home.comPro
				})
		}
	}
</script>

<style scoped lang="scss">
	.logo-main{
			width: 100%;
   			height: 2.812rem;
   			display: flex;
   			flex-wrap: wrap;
   			overflow: hidden;
	}
	.imgs{
			width: 1.529rem;
			height: 1.3rem;
			margin: 0 0.05rem;
			img{
				width:1.529rem;
				height: 1.2rem;
				
			}
	}
</style>