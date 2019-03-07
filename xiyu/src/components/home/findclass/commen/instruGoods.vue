<template>
	<ul class="instruGoods">
		<router-link v-for="(item,index) in state" :key="item.id" :to="{name:'details',params:{GoodId:index}}">
		<li class="instruGood" >
			
			<div class="goodsLeft">
				<img :src="item.pictureUrl" />
			</div>
			<div class="goodsRight">
				<p class="goodsIntroduce">{{item.productName}}</p>
				<p class="goodsType">品牌型号：<span>{{item.brandName}}</span></p>
				<p class="goodsMark">西域订货号：<span>{{item.skuCode}}</span></p>
				<p class="goodsStock">库存：<span>{{item.stockDeliveryDesc.stockValue}}</span></p>
				<div class="goodsPrice"><span>￥{{item.salePrice}}</span><span class="iconfont" v-html="icon"></span></div>
			</div>
		
		</li>
		</router-link>
		<div class="loadMore" >
			<span @click="loadMore()">加载更多》</span>
		</div>
	</ul>
</template>

<script>
	import Vuex from "vuex"

	export default {
		data() {
			return {
				icon: "&#xe64c;",
				a:this.index
			};
		},
		props: ["send"],
		created() {
			this.handleSecondsData(this.send);
			
		},
		methods: {
			...Vuex.mapActions({
				handleSecondsData: "seconds/handleSecondsData",
			}),
			loadMore(){
				this.send.pn++;
				this.handleSecondsData(this.send);
			}
		},
		computed: {
			...Vuex.mapState({
				state: state => state.seconds.data
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
			margin-bottom: .13rem;

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

				.goodsIntroduce {
					font-size: .3rem;
					font-weight: 700;
					line-height: .35rem;
					padding: .15rem;
				}

				.goodsStock,
				.goodsMark,
				.goodsType {
					font-size: .25rem;
					line-height: .3rem;
					padding: 0 .15rem;

				}

				.goodsPrice {
					padding-left: .13rem;
					display: flex;
					justify-content: space-between;

					span {
						font-size: .35rem;
						font-weight: 900;
						color: red;
						line-height: .6rem;
					}

					span:last-child {
						font-size: .6rem;
						font-weight: 900;
						color: #c5c5c5;
						margin-right: .5rem;
					}
				}
			}
		}
		.loadMore{
			width: 100%;
			padding: 1rem;
			span{
				display: block;
				width: 30%;
				border: .01rem solid red;
				height: .8rem;
				line-height: .8rem;
				text-align: center;
				margin: 0 auto;
			}
		}
	}
</style>
