<template>
	<div class="det_wrap">
		<div class="header">
			<div class="icon1" @click="handleTo()"><i class="iconfont" v-html="icon1"></i></div>
			<div class="goods">商品</div>
			<div class="details">详情</div>
			<div class="icon2"><i class="iconfont" v-html="icon2"></i></div>
		</div>
		<div class="wrapper s-main" ref="sMain">
			<div class="content s-cont">
				<div class="banner">
					<img :src="this.imgsrc" />
				</div>
				<div class="shopInfo">
					<div class="txt"><span>{{goodsInfo}}</span></div>
					<div class="activePric">
						<span class="act">促销价</span>
						<span class="s_pr">￥{{price}}</span>
						<span class="s_txt1">/{{saleUom}}</span>
						<p class="p_txt1"><span>{{marketPrice}}</span><span>/{{saleUom}}</span></p>
						<p class="p_txt2"><span>{{salesOff}}</span><span>%OFF</span></p>
					</div>

					<div class="activeInfo">
						<p><span>品牌型号:</span><span>{{brandEName}}</span><span>{{mfgSku}}</span></p>
						<p><span>订货号:</span><span>{{skuCode}}</span></p>
						<p><span>最小起订量:</span><span>{{unit}}</span></p>
						<p><span>{{stockName}}</span><span>{{stockValue}}</span><span class="today">当日出货</span></p>
						<p><span>{{deliveryName}}:</span><span>{{deliveryValue}}</span></p>
					</div>
				</div>

				<div class="server">
					<span>服务</span>
					<span>由西域仓和西域优质供货商发货,全场满300包邮</span>
				</div>
				<div class="rules">
					<span>!</span>
					<span>不支持7天无理由退货</span>
				</div>

			</div>
		</div>
		
		<div class="footer">
				<div class="f1"><span><i class="iconfont" v-html="icon3"></i></span><span>客服</span></div>
				<div class="f2"><span><i class="iconfont" v-html="icon4"></i></span><span @click="handleToCart()">购物车</span></div>
				<div class="f3"><span @click="handleClickMinus()">-</span><span>{{count}}</span><span @click="handleClickAdd()">+</span></div>
				<div class="f4" ref="Cart" @click="handleAddCart()">加入购物车</div>
		</div>

	</div>
</template>

<script>
	import Vuex from "vuex"
	import Bescroll from 'better-scroll'
	export default {
		data() {
			return {
				icon1: "&#xe642;",
				icon2: "&#xe646;",
				icon3:"&#xe60b;",
				icon4:"&#xe64c;",
				count:"0",
				imgsrc: "",
				goodsInfo: "",
				price: "",
				saleUom: "",
				marketPrice: "",
				salesOff: "",
				brandEName: "",
				mfgSku: "",
				skuCode: "",
				unit: "",
				stockName: "",
				stockValue: "",
				deliveryName: "",
				deliveryValue: ""
			}
		},

		created() {
			this.imgsrc = this.data[this.GoodId].pictureUrl
			this.goodsInfo = this.data[this.GoodId].productName;
			this.price = this.data[this.GoodId].salePrice;
			this.saleUom = this.data[this.GoodId].saleUom;
			this.marketPrice = this.data[this.GoodId].marketPrice;
			this.salesOff = this.data[this.GoodId].salesOff;
			this.brandEName = this.data[this.GoodId].brandEName;
			this.mfgSku = this.data[this.GoodId].mfgSku;
			this.skuCode = this.data[this.GoodId].skuCode;
			this.unit = this.data[this.GoodId].unit;
			this.stockName = this.data[this.GoodId].stockDeliveryDesc.stockName;
			this.stockValue = this.data[this.GoodId].stockDeliveryDesc.stockValue;
			this.deliveryName = this.data[this.GoodId].stockDeliveryDesc.deliveryName;
			this.deliveryValue = this.data[this.GoodId].stockDeliveryDesc.deliveryValue;

		},
		props: ["GoodId"],
		computed: {
			...Vuex.mapState({
				data: state => state.home.homeGoods
			})
		},

		updated() {
				if(this.count > 0){
					this.$refs.Cart.style.background="#00ce6f";
					this.$refs.Cart.style.color="#fff";
				}else{
					this.$refs.Cart.style.background='';
					this.$refs.Cart.style.color='';
				}
		},
		methods: {
				
			handleTo() {
				this.$router.push('/home');
			},
			handleToCart(){
				this.$router.push('/cart')
			},
			handleClickMinus(){
				if(this.count == '0'){
					this.count='0'
				}else{
					this.count--
				}
			},
			handleClickAdd(){
				let num = parseInt(this.count)+1;
				this.count=num;
			},
			handleAddCart(){
				if(this.count==0){
					return
				}else{
					this.$router.push({
						name:'cart',
						query:{
							GoodId:this.GoodId,
							count:this.count,
							
						}
					})
				}
				let Goods ={
					 "imgsrc":this.imgsrc,
					 "goodsInfo":this.goodsInfo,
					 "skuCode":this.skuCode,
					 "unit":this.unit,
					 "deliveryName":this.deliveryName,
					 "deliveryValue":this.deliveryValue,
					 "stockName":this.stockName,
					 "stockValue":this.stockValue,
					 "salePrice":this.price,
					 "count":this.count,
					 
				}
				
				this.handleAdd(Goods);
				
			},
				...Vuex.mapActions({
				handleAdd:"Cart/handlecart"
			})
			
			
		},
		
		mounted(){
			this.$nextTick(()=>{
				this.scroll = new Bescroll(this.$refs.sMain,{
					scrollY:true,
					click:true
				})
			})
			
			
		},
		

	}
</script>

<style scoped lang="scss">
	.det_wrap{
			width: 100%;
			height: 100%;
	}
	.s-main{
			 width: 100%;
			 height: 10rem;
			margin-top: 1.3rem;
			 
	}
	.scont{
				width: 100%;
				
	}
	.header {
		width: 100%;
		height: 1.031rem;
		background: #fff;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
		.icon1 {
			width: 0.75rem;
			height: 100%;
			line-height: 1.031rem;
			i {
				font-size: 0.45rem;
			}
		}
	}
	
	.goods {
		margin-left: 1.7rem;
		width: 1.125rem;
		height: 100%;
		font-size: 0.45rem;
		line-height: 1.031rem;
		font-weight: bolder;
		border-bottom: 0.1rem solid #1D967A;
		text-align: center;
		margin-right: 0.2rem;
	}
	
	.details {
		width: 1.125rem;
		height: 100%;
		font-size: 0.45rem;
		line-height: 1.031rem;
		font-weight: bolder;
		text-align: center;
	}
	
	.icon2 {
		margin-left: 2rem;
		i {
			font-size: 0.5rem;
		}
	}
	
	.banner {
		width: 100%;
		height: 6.09rem;
		margin: 0.117rem 0;
		background: #fff;
		img {
			display: block;
			width: 6.09rem;
			height: 6.09rem;
			margin: 0 auto;
		}
	}
	
	.shopInfo {
		width: 100%;
		height: 4.384rem;
		background: #fff;
		padding: 0.1rem 0.2rem 0.3rem 0.2rem;
		.txt {
			width: 100%;
			font-size: 0.35rem;
			font-weight: 900;
			height: 0.98rem;
			padding-top: 0.3rem;
			span {
				display: block;
				width: 100%;
				height: 0.4rem;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
	
	.activePric {
		width: 100%;
		height: 0.82rem;
		border-bottom: 1px solid #999;
		display: flex;
		.act {
			display: block;
			height: 0.515rem;
			width: 0.984rem;
			border: 1px solid #fb0100;
			border-radius: 0.05rem;
			line-height: 0.515rem;
			text-align: center;
			color: #fb0100;
		}
		.s_pr {
			height: 0.515rem;
			line-height: 0.515rem;
			margin-left: 0.1rem;
			font-size: 0.35rem;
			color: #fb0100;
			font-weight: 600;
			margin-right: .1rem;
		}
		.s_txt1 {
			height: 0.515rem;
			font-size: 0.34rem;
			line-height: 0.515rem;
			letter-spacing: 0.05rem;
			font-weight: 600;
		}
		.p_txt1 {
			height: 0.515rem;
			line-height: 0.515rem;
			text-decoration: line-through;
			margin-left: 0.05rem;
		}
		.p_txt2 {
			height: 0.4rem;
			background: #ee9400;
			color: #fff;
			font-size: 0.30rem;
			padding: 0 0.1rem;
			line-height: 0.4rem;
			margin-left: 0.1rem;
		}
	}
	
	.activeInfo {
		overflow: hidden;
		padding-top: 0.2rem;
		line-height: 0.375rem;
		p span {
			margin: 0 0.1rem;
			color: gray;
		}
	}
	
	.activeInfo .today {
		background: #ee9400;
		padding: 0.03rem;
		color: #fff;
	}
	.server{
			height: 1.43rem;
			width: 100%;
			background: #fff;
			margin-top: 0.1rem ;
			margin-bottom: 0.2rem;
			padding: 0.2rem;
			line-height: 1rem;
			span:nth-of-type(2){
				color: gray;
			}
	}
	.rules{
			width: 100%;
			height: 1.125rem;
			margin-top: 0.2rem;
			background: #fff;
			line-height: 1.125rem;
			text-align: left;
			padding-left: 0.1rem;
			span{
				margin:0 0.1rem;
			}
	}
	.footer{
			width: 100%;
			height:1.171rem;
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 5;
			background: #fff;	
			border-top: 1px solid gray;
			display: flex;
			.f1,.f2{
					width: 1.216rem;
					height: 1.171rem;
					text-align:center;
					span:nth-of-type(1) i{
						font-size: 0.6rem;
					}
					span:nth-of-type(2){
						display: block;
					}
			}
			.f3{
					border-left: 1px solid gray;
					display: flex;
					justify-content: space-around;
					span{
						
						display: block;
						height: 0.843rem;
						margin-top: 0.1rem;
						line-height: 0.843rem;
						text-align: center;
						font-size: 0.3rem;
					}
					span:nth-of-type(1){
						width: 0.636rem;
						height: 0.843rem;
						border: 1px solid gray;
						
						
						
						margin-left:0.3rem ;
						
					}
					span:nth-of-type(2){
						width: 0.919rem;
						border-top:1px solid gray ;
						border-bottom: 1px solid gray;
					}
					span:nth-of-type(3){
						width: 0.636rem;
						border: 1px solid gray;
					}
			}
			.f4{
					line-height: 1.171rem;
					width: 2.25rem;
					text-align: center;
					margin-left: 0.3rem;
					background: #ccc;
					font-size: 0.45rem;
					color: gray;
			}
			
			
	}
</style>