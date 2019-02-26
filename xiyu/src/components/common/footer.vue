<template>
	<div class="footer">
		<div v-for="(item,index) in tagbar" class="footer-main">
			<router-link :to="{name:item.name}">
				<i class="iconfont" v-html="item.icon"></i>
				<span>{{item.title}}</span>
			</router-link>
			
		</div>
	</div>
</template>

<script>
	export default{
			data(){
				return{
					 tagbar:[{
					 	 name:"home",
					 	 title:"首页",
					 	 icon:"&#xe62a;"
					 },
					 {
					 	name:"classify",
					 	title:"分类",
					 	icon:"&#xe638;"
					 },
					 {
					 	name:"message",
					 	title:"资讯",
					 	icon:"&#xe609;"
					 },
					 {
					 	name:"cart",
					 	title:"购物车",
					 	icon:"&#xe64c;"
					 },
					 {
					 	name:"my",
					 	title:"我的西域",
					 	icon:"&#xe61d;"
					 }
					 ]
				}
			}
	}
</script>

<style scoped lang="scss">
.footer{
			width: 100%;
			height: 1.171rem;
			position: fixed;
			bottom: 0;
			left: 0;
			background: #fff;
			z-index: 6;
			display: flex;
			border-top: 1px solid #c1c1c1;
			justify-content: space-between;
		.footer-main{
			width: 100%;
			height: 100%;
			a{
				display: flex;
				width: 100%;
				height: 100%;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				i{
					font-size: 0.6rem;
				}
			}
		}
		
		.router-link-active{
				color: #00cc56;
		}
}
</style>