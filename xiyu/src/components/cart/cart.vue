<template>
	<div class="cart-wrap">
		
		<div class="header">购物车</div>
		<div class="wrapper cart-main" ref="cartMain">
			<div class="content cart-con">
				
				<div class="info" v-if="frag">
					<span class="s1">购物车是空的,你可以</span>
					<span class="s2">立即逛逛</span>
				</div>	
				
				<div v-if="frag">
					<ShopList ></ShopList>
				</div>
				
				<div v-for="(item,index) in data" class="goodslist">
					<span class="font-ico"><i class="iconfont" v-html="icon"></i></span>
					<div class="imgs"><img :src="item.imgsrc" alt="" /></div>
					<div class="infoGoods">
							<p class="p_tit">{{item.goodsInfo}}</p>
							<p class="p1"><span>订货号:</span><span>{{item.skuCode}}</span></p>
							<p class="p1"><span>最小订货量:</span><span>{{item.unit}}</span></p>
							<p class="p1"><span>{{item.deliveryName}}</span><span>{{item.deliveryValue}}</span><span>{{item.stockName}}</span><span>{{item.stockValue}}</span></p>
							<div class="p2"><span class="salePrice">￥{{item.salePrice}}</span> <p class="compu"><span @click="handleRed(index,item.salePrice)">-</span><span>{{count[index]}}</span><span @click="handleAdd(index,item.salePrice)">+</span></p></div>
					</div>
				</div>
				
			</div>
		</div>
		
		<div class="count">
		<div class="all">
			<span class="icon"><i class="iconfont" v-html="icon"></i></span>
			<span>全选</span>
		</div>
			<div class="allsend">
				<p class="p-all"><span>合计:</span><span>￥{{addcount}}</span></p>
				<p><span>满300包邮,还差</span><span>￥{{allsend}}元</span></p>
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
	import Vuex from "vuex"
	export default{
		
		data(){
			return{
				icon:"&#xe659;",
				GoodsInfo:{},
				Goods:[],
				frag:"true",
				addcount:"0",
				allsend:"300.00",
				count:[],
			}
		},
		components:{
			"ShopList":ShopList,
		},
		
		created(){
			this.frag=this.data[0].frag;
			let allPrice =0
			for(let i=0,len=this.data.length;i<len;i++){
				this.count.push(this.data[i].count);
				allPrice += parseInt(this.data[i].salePrice) *this.data[i].count;
				
				
			}
			this.addcount=allPrice;
			if(this.addcount>300){
				this.allsend='0'
			}else{
				this.allsend = this.allsend - this.addcount;
			}
		},
		
		mounted(){
			this.$nextTick(()=>{
				this.scroll = new Bscroll(this.$refs.cartMain,{
					scrollY:true,
					click:true
				})
			})
		},
	
	
		updated(){
			
		},
		computed:{
			...Vuex.mapState({
				data:state=>state.Cart.goodInfo
			})
		},
		methods:{
			handleRed(index,price){
				if(this.count[index]=='1'){
					return
				}else{
					var sum = this.count[index]-1
					this.count.splice(index,1,sum)
					this.addcount = sum*price
					let allPrice = 0;
			for(let i=0,len=this.data.length;i<len;i++){
				allPrice += parseInt(this.data[i].salePrice)*this.count[i];
					
			}
				this.addcount = allPrice;	
				if(this.addcount>300){
				this.allsend='0'
				}else{
				this.allsend = Math.abs(this.allsend - this.addcount);
				}	
					
					
				}
				
			},
			handleAdd(index,price){
				var sum = parseInt(this.count[index])+1;
				this.count.splice(index,1,sum);
				let allPrice =0 ;
				for(let i=0,len=this.data.length;i<len;i++){
				allPrice += parseInt(this.data[i].salePrice)*this.count[i];			
			}
				this.addcount = allPrice;
				if(this.addcount>300){
				this.allsend='0'
			}else{
				this.allsend = Math.abs(this.allsend - this.addcount);
			}
				
			}
				
			
		}
		
	}
</script>

<style scoped lang="scss">
	.cart-wrap{
			
	}
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
	.goodslist{
		width:95%;
		margin: 0.2rem auto;
		
		height: 2.84rem;
		background: #fff;
		display: flex;
		align-items: center;
	}
	.imgs{
			width: 2.3rem;
			height:2.18rem;
			border: 1px solid #ccc;
			margin: 0 0.1rem;
			img{
				width: 100%;
				height: 100%;
			}
	}
	.font-ico i{
		font-size: 0.6rem;
		margin-left: 0.2rem;
		color: green;
		
	}
	.infoGoods{
			width: 3.867rem;
			line-height: 0.4rem;
	}
	.p_tit{
			height: 0.80rem;
			overflow: hidden;
	}
	.p1{
			font-size: 0.24rem;
	}
	.p2{
		
		font-weight: bold;
		display:flex;
		justify-content: space-between;
	}
	.countPrice{
		color: red;
	}
	.p2 p span:nth-of-type(1){
			padding: 0.1rem;
			border: 1px solid gray;
			
	}
	.p2 p span:nth-of-type(2){
			padding: 0.1rem 0.3rem;
			border-top: 1px solid gray;
			border-bottom: 1px solid gray;
	}
	.p2 p span:nth-of-type(3){
			padding: 0.1rem;
			border: 1px solid gray;
	}
</style>