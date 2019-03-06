<template>
	<div>
	<div class="think-wrap">
			<h2 class="think"><span></span><span>西域热推·选你所想</span></h2>
			<ul class="goods">
				<li v-for="(item,index) in data" @click="handleClick(index)">
					<div class="imgs"><img :src="item.pictureUrl" alt="" /></div>
					<div class="goodsInfo">{{item.productName}}</div>
					<div class="price"><span>￥{{item.salePrice}}</span><i class="iconfont" v-html="icon"></i></div>
				</li>
			</ul>
			
			
	</div>
			<div class="mach">
				<div v-for="(item,index) in mach" class="mach_kind">
					<span><i class="iconfont" v-html="item.icons"></i></span>
					<span>{{item.name}}</span>
				</div>
			</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	
	export default{
		data(){
			return{
				icon:"&#xe64c;",
				mach:[{
					icons:"&#xe61c;",
					name:"客户端"
					
				},
				{
					icons:"&#xe60c;",
					name:"触屏版"
				},
				{
					icons:"&#xe608;",
					name:"电脑版"
				}]
			}
		},
		created(){
			this.handleHomeData()			
		},
		methods:{
			...Vuex.mapActions({
				handleHomeData: "home/handleHomeData"
			}),
			
			handleClick(index){
				
				this.$router.push({
					
					name:"details",
        			params:{GoodId:index}
				})
			}
			
		},
		computed:{
			...Vuex.mapState({
				data:state=>state.home.homeGoods
			})
		}
			
	}
</script>

<style scoped lang="scss">
		.think-wrap{
				padding: 0.117rem;
				padding-top: 0;
				width:100%;
				
		}
		.think{
			height: 1.125rem;
			width: 100%;
			background: #fff;
			display: flex;
			align-items: center;
			span:nth-of-type(1){
				width: 0.14rem;
				height: 0.468rem;
				background: #75d392;
				margin-right:0.1rem;
			}	
		}
		.goods{
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			li{
				width: 3.63rem;
				height: 5.24rem;
				background: #fff;
				border: 1px solid #ccc;
				padding: 0 2.5%;
				.imgs{
					width: 3.27rem;
					height: 3.27rem;
					margin:0 auto;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.goodsInfo{
					height: 0.93rem;
					overflow: hidden;
					line-height: 0.45rem;
					font-size: 0.30rem;
					color: #404040;
					margin: 5% 0;
				}
				.price{
					display: flex;
					height: 0.562rem;
					justify-content: space-between;
					align-items: center;
					span{
						font-size: 0.35rem;
						color: red;
						font-weight: 800;
					}
					i{
						font-size: 0.5rem;
						font-weight: 800;
					}
				}
			}
		}
		.mach{
			 width:100%;
			 height: 2.09rem;
			 background: #fff;
			 margin-top: 0.23rem;
			 margin-bottom: 1.1rem;
			 display: flex;
			 align-items: center;
			 justify-content: space-around;
			 .mach_kind{
			 	width:1.649rem ;
			 	height:1.62rem ;
			 	
			 	span{
			 		display: block;
			 		text-align: center;
			 		margin-top: 0.2rem;
			 	}
			 	span:nth-of-type(1) i{
			 		font-size: 0.7rem;
			 		
			 	}
			 }
		}
		.mach div:nth-of-type(2) span:nth-of-type(1){
			border-radius: 50%;
			margin: 0 auto;
			margin-top:0.2rem ;
			width: 0.8rem;
			height:0.8rem;
			border: 1px solid gray;
		}
		.mach div:nth-of-type(3) span:nth-of-type(1){
			border-radius: 50%;
			margin: 0 auto;
			margin-top:0.16rem ;
			width: 0.83rem;
			height:0.83rem;
			border: 1px solid gray;
		}
</style>