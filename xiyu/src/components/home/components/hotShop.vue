<template>
	<div class="wrapper scroll" ref="Scroll">
		<ul class="content scroll-conent">
			<li v-for="(item,index) in data[0]">
				<div class="imgs"><img :src="item.skuPic" alt="" /></div>
				<div class="Ptxt"><span>{{item.skuName}}</span></div>
				<div class="price">
					<span>￥{{item.salesPrice}}</span>
					<span>￥{{item.marketPrice}}</span>
				</div>
				<div class="colorBox">
					<div>{{item.salesOff}}%</div>
					<div>OFF</div>
				</div>
			</li>
			
		</ul>
		<!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
	</div>
</template>

<script>
	import BetterScroll from 'better-scroll';
	import Vuex from 'vuex'
	export default {
		methods: {
			
		},
		created() {
			
		},
		computed:{
			...Vuex.mapState({
				data:state=>state.home.hotShop
			})
		},
		mounted(){
			this.scroll= new BetterScroll(this.$refs.Scroll,{
				scrollX:true,
				click:true,
				
			})
		}
		
	}
</script>

<style scoped lang="scss">
	.scroll{
			 width: 100%;
			 height:4.219rem;
			 background: #fff;
			.scroll-conent{
				width:max-content;
				height: 100%;
				display: flex;
				flex-wrap: nowrap;
				li{
					width:3.28rem;
					height: 100%;
					border: 1px solid #ccc;
					position: relative;
					.imgs{
						width:2.343rem ;
						height:2.343rem ;
						margin:0 auto;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.colorBox{
						width:0.77rem;
						height: 0.843rem;
						background: #ff7200;
						position: absolute;
						top: 0.2rem;
						right: 0;
						padding: 0 0.1rem;
						color: #fff;
						font-weight: 600;
						font-size: 0.28rem;
						div{
							text-align: center;
						}
					}
					.Ptxt{
						padding: 0 0.2rem;
						line-height: 0.45rem;
						font-size: 0.30rem;
						height: 0.86rem;
						overflow: hidden;
					}
				}
			}
	}
	.price{
			margin-top: 0.3rem;
			text-align: center;
	}
	.price span:nth-of-type(1){
			color: #ff0000;
			font-size: 0.35rem;
			margin-right: 0.1rem;
	}
	.price span:nth-of-type(2){
			text-decoration: line-through;
	}
</style>