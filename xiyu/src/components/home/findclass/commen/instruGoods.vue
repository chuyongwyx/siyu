<template>
	<ul class="instruGoods">
		<li class="instruGood" v-for="(item,index) in state" :key="item.id">
			<div class="goodsLeft">
				<img :src = "item.pictureUrl" />
			</div>
			<div class="goodsRight">
				<p class="goodsIntroduce">{{item.productName}}</p>
				<p class="goodsType">品牌型号：<span>{{item.brandName}}</span></p>
				<p class="goodsMark">西域订货号：<span>{{item.skuCode}}</span></p>
				<p class="goodsStock">库存：<span>{{item.stockDeliveryDesc.stockValue}}</span></p>
				<div class="goodsPrice"><span>￥{{item.salePrice}}</span><span></span></div>
			</div>
		</li>
	</ul>
</template>

<script>
	import Vuex from "vuex"

	export default {
		data() {
			return {
				
			};
		},
		props:["send"],
		created() {
			this.handleSecondsData(this.send);
		},
		methods: {
			...Vuex.mapActions({
				handleSecondsData: "seconds/handleSecondsData"
			})
		},
		computed: {
		  ...Vuex.mapState({
		    state:state=>state.seconds.data
		  })
		},
	}
</script>

<style scoped lang="scss">
	.instruGoods {
		width: 96.5%;
		margin: .13rem;
		.instruGood {
			background: #ffffff;
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: .13rem ;
			.goodsLeft {
				width: 27%;
				padding-top: .3rem;
				img {
					width: 1.6rem;
					height: 1.6rem;
					margin: 0 auto;
				}
			}

			.goodsRight {
				width: 73%;
				.goodsIntroduce{
					font-size: .35rem;
					line-height: .4rem;
					padding: .15rem;
				}
				.goodsStock,.goodsMark,.goodsType{
					font-size: .3rem;
					line-height: .4rem;
					padding:0 .15rem;

				}
				.goodsPrice{
					padding-left:.13rem ;
					span{
						font-size: .4rem;
						font-weight: 900;
						color: red;
					}
				}
			}
		}

	}
</style>
