<template>
	<div class="swiper-container messageSwiper" ref="bannerMessage">
	  <ul class="swiper-wrapper messageWrapper">
	    <li class="swiper-slide messageSlide" v-for="(item,index) in swiper" :key="item.id">
	      <img :src="item">
	    </li>
	  </ul>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	export default {
		data() {
			return {
				swiper: [
				  "http://image-c.ehsy.com/uploadfile/opc/editor/uc/201706/28/1498629918913627.jpg",
				  "http://image-c.ehsy.com/uploadfile/opc/editor/uc/201706/28/1498629885648404.jpg",
				  "http://image-c.ehsy.com/uploadfile/opc/editor/uc/201706/28/1498629902520901.jpg",
				  "http://image-c.ehsy.com/uploadfile/opc/editor/uc/201706/28/1498629918913627.jpg",
				  "http://image-c.ehsy.com/uploadfile/opc/editor/uc/201706/28/1498629885648404.jpg"
				]
			};
		},
		mounted() {
		  new Swiper(this.$refs.bannerMessage, {
		    autoplay: {
						delay:2000
					},
		    loop: true,
					freeMode:true,
		  });
		}
	}
</script>

<style scoped lang="scss">
.messageSwiper {
	width: 100%;
		height:3.4rem;
		background: #ffffff;
		.messageWrapper {
			padding: 0.1rem;
			height:100%;
			.messageSlide {
					flex-shrink: 1;
					height: 100%;
				img {
					width: 4.96rem;
					height: 92%;
					border-radius: 0.2rem;
					margin: 0.07rem ;
				}
			}
		}
	}
</style>
