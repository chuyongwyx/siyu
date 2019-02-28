<template>
	<div class="wrap" ref="wrap">
		<Header/>
		<div class="wrapper main" ref="main">
			<div class="content main-content">

				<Swiper/>
				<Listnav/>
				<Ads/>
				<HotShop/>
				<ComProducts/>
				<Choice/>
				<Goods/>
			</div>
			<!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
		</div>
	</div>
</template>

<script>
	import Header from "./components/header";
	import Banner from "./components/swiper";
	import Listnav from "./components/listnav";
	import Ads from "./components/ads";
	import HotShop from './components/hotShop';
	import ComProducts from './components/com-products';
	import Choice from './components/choice';
	import Goods from './components/goods'
	import Vuex from "vuex";
	import Bscroll from 'better-scroll';
	export default {
		created() {
			this.handleHomeData();
			this.handleHomeAdsData();
			this.handleComProduct();
			
		},
		methods: {
			...Vuex.mapActions({
				handleHomeData: "home/handleHomeData",
				handleHomeAdsData: "home/handleHomeAdsData",
				handleComProduct :"home/handleComProduct",
			})

		},
		data() {
			return {

			}
		},
		components: {
			"Header": Header,
			"Swiper": Banner,
			"Listnav": Listnav,
			"Ads": Ads,
			"HotShop": HotShop,
			"ComProducts":ComProducts,
			"Choice":Choice,
			"Goods":Goods
		},
		mounted() {
			this.$nextTick(() => {
				this.scroll = new Bscroll(this.$refs.main, {
					click: true,
					scrollY:true,
					scrollbar:true,
					mouseWheel:true
				})
				
			});
				
		  
		}

	}
</script>

<style scoped lang="scss">
	.wrap{
			width: 100%;
			height: 100%;
	}
	.main {
		width: 100%;
		height: 100%;
	}
	
	.main-content {
		width: 100%;
		overflow: hidden;
		
		
	}
</style>