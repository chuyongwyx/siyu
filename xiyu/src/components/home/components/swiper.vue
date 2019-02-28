<template>
	<div class="swiper-container  banner-main" >
		<div class="swiper-wrapper banner-conent">
			<div class="swiper-slide" v-for="(item,index) in Banners"><img :src="item" alt="" /></div>

		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination banner-span"></div>

	</div>
</template>

<script>
	import Vuex from "vuex"
	import "swiper/dist/css/swiper.min.css"
	import Swiper from "swiper/dist/js/swiper.js"
	export default {
		data() {
			return {

			}
		},
		computed: {
			...Vuex.mapState({
				Banners: state => state.home.imgArr
			})
		},
		
		mounted(){
				this.swiper = new Swiper('.banner-main', {
					autoplay: {
						disableOnInteraction: false
					},
					pagination: {
						el: '.banner-span',
					}
				})
		}
		
	}
</script>

<style scoped lang="scss">
	.banner-main {
		width: 100%;
		height: 3.75rem;
		.banner-conent img {
			width: 100%;
			height: 100%;
		}
		
		
	}
 .banner-span .swiper-pagination-bullet{
 	width: 0.32rem;
 	height: 0.32rem;
 }
	
</style>