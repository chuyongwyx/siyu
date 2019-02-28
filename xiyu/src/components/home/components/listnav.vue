<template>
	<div class="list-main">
		<div class="listnav" v-for="(item,index) in listnav">
			<router-link :to="{name:item.name}">
				<div class="imgs"><img :src="item.imgsrc" alt="" /></div>
			<span class="s_txt">{{item.txt}}</span>
			</router-link>
			
		</div>
		
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default{
		computed:{
			...Vuex.mapState({
				 listnav:state=>state.home.imgclassify,
				 
			})
		},
		
	}
	
	
</script>

<style scoped lang="scss">
	.list-main{
			width: 100%;
			height: 4.24rem;
			display: flex;
			flex-wrap: wrap;
			padding-top:0.4rem ;
			text-align: center;
			background: #f7f7f7;
			.listnav{
					width: 1.5rem;
					height:1.58rem ;
					.imgs{
						text-align: center;
					}
					img{
						width: 1.01rem;
						height: 1.01rem;
						display: block;
						margin: 0 auto;
					}
					.s_txt{
						margin-top: 0.1rem;
						display: block;
						color: #333;
					}
			}			
			
	}

</style>