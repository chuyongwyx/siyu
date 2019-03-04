<template>
		<div class="topBar" ref="header">
				<div class="posi" @click="handleChoice()">
						<i class="iconfont" v-html="icon"></i>
						<span>北京</span>
				</div>
				<div class="search">
					{{desc}}	
				</div>
				<div class="new">
						<i class="iconfont" v-html="icon1"></i>
						<span>{{news}}</span>
				</div>
		</div>
</template>

<script>
	export default{
			data(){
				return{
						local:"北京",
						icon:"&#xe61b;",
						news:"消息",
						icon1:"&#xe626;",
						desc:"产品名称 品牌 型号或者SKU号"
				}
			},
			methods:{
				handleChoice(){
					
					this.$router.push('/position')
				}
			}
			

			
			
			
	}
</script>

<style scoped  lang="scss">
	.topBar{
		width: 100%;
		height: 1.03rem;
		display: flex;
		align-items: center;	
		background: rgba(0,0,0,0);
		padding: 0 0.2rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
		color: #fff;
		.posi , .new{
			width:0.796rem ;
			height:1.03rem ;
			text-align: center;
			margin: 0 0.1rem;
			
			i{
				font-size: 0.5rem;
			}
			span{
				display: block;
			}
		}
		
	}
	.search{
				width:5.297rem ;
				height: 0.75rem;
				background: rgba(255,255,255,0.7);
				padding:0 0.2rem;
				line-height:0.75rem ;
				color: #999;
				border-radius: 0.06rem;
	}
</style>