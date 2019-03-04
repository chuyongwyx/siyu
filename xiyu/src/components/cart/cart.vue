<template>
	<div>
		<div class="header">购物车</div>
		<div class="wrapper cart-main" ref="cartMain">
			<div class="content cart-con">
				
				<div class="info" v-if="true">
					<span class="s1">购物车是空的,你可以</span>
					<span class="s2">立即逛逛</span>
				</div>	
				
				<div>
					<ShopList v-if="true"></ShopList>
				</div>
			</div>
		</div>
		
		<div class="count">
		<div class="all">
			<span class="icon"><i class="iconfont" v-html="icon"></i></span>
			<span>全选</span>
		</div>
			<div class="allsend">
				<p class="p-all"><span>合计:</span><span>￥0</span></p>
				<p><span>满300包邮,还差</span><span>￥300.00</span></p>
			</div>
			<div class="price">
				去结算
			</div>
			
		</div>
	</div>
</template>

<script>
	import  ShopList  from '../home/components/goods';
	import  Bscroll from 'better-scroll';
	export default{
		data(){
			return{
				icon:"&#xe659;"
			}
		},
		components:{
			"ShopList":ShopList,
		},
		
		mounted(){
			this.$nextTick(()=>{
				this.scroll = new Bscroll(this.$refs.cartMain,{
					scrollY:true
				})
			})
		}	
	}
</script>

<style scoped lang="scss">
	.cart-main{
			width: 100%;
			height: 8rem;
			margin-top: 1rem;
		.cart-con{
				width: 100%;
				overflow: hidden;
			}
	}
	
	.header{
		height:1rem;
		width:100%;
		background: #fff;
		font-size: 0.5rem;
		font-weight:900;
		text-align: center;
		line-height:1rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
	}
	.info{
		height: 1.40rem;
		width:100%;
		margin: 2% 0;
		background: #fff;
		text-align: center;
		.s1{
			font-size: 0.4rem;
			font-weight: bold;
			color: #5D5D5D;
			line-height:1.40rem;
		}
		.s2{
			display:block;
			width: 2.25rem;
			height:0.98rem;
			border: 1px solid #5D5D5D;
			border-radius:5px ;
			float: right;
			margin-top: 0.175rem;
			line-height: .98rem;
			margin-right:0.5rem ;
			font-size: 0.4rem;
			font-weight: bold;
		}
	}
	.count{
			height:1.148rem;
			width: 100%;
			position: fixed;
			left: 0;
			bottom: 1.1rem;
			background: #fff;
			z-index: 5;
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.icon i{
				font-size: 0.5rem;
				color: green;
			}
	}
	.all{
		 line-height: 1.148rem;	
		 margin-left: 0.2rem;
		 .icon{
		 	float: left;
		 }
	}
	.allsend{
		width: 3.75rem;
		height: 100%;
		padding-left: 0.1rem;
		.p-all{
			height:  0.585rem;
			width: 100%;
			font-size: 0.4rem;
			line-height: 0.585rem;
			color: #5d5d5d;
			font-weight: 600;
		}
	}
	.price{
			width: 2.25rem;
			height: 1.148rem;
			background: #01C65D;
			line-height: 1.148rem;
			text-align: center;
			font-size: 0.4rem;
			color: #fff;
			font-weight: 600;
			margin-left:0.2rem; 
			
	}
</style>