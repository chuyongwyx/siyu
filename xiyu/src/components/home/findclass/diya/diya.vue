<template>
	<div class="instruments">
		<Header :send = "val"></Header>
		<div class="wrapper messageWrapper" ref="instrumentWrapper">
			<div class="content">
				<bannerInstru :send = "img"></bannerInstru>
				<Info :info="info[0]"></Info>
				<InstruList :send = "arr"></InstruList>
				<Info :info="info[1]"></Info>
				<InstruServer :send = "data"></InstruServer>
				<InstruNav></InstruNav>
				<InstruGoods></InstruGoods>
			</div>

		</div>
	</div>
</template>

<script>
	import BScroll from "better-scroll"
	import Header from "../commen/header"
	import Info from "../commen/bannerInfo"
	import bannerInstru from "../commen/banner"
	import InstruList from "../commen/instruList"
	import InstruServer from "../commen/instruServer"
	import InstruNav from "../commen/instruNav"
	import InstruGoods from "../commen/instruGoods"
	export default {
		data() {
			return {
				val:"低压专场",
				img:"http://image-c.ehsy.com/uploadfile/banner/diyabanner-APP.jpg",
				arr:[
					{
						span:"断路器",
						img:"http://image-c.ehsy.com/uploadfile/EL/Schneider100/MAV127.jpg"
					},
					{
						span:"传感器和编码器",
						img:"http://image-c.ehsy.com/uploadfile/MHS/joanna1/RBV994.jpg"
					},
					{
						span:"接触器",
						img:"http://image-c.ehsy.com/uploadfile/EL3/RQA305.jpg"
					},
					{
						span:"电机保护",
						img:"http://image-c.ehsy.com/uploadfile/EL1/EL2/SDC985.jpg"
					},
					
				],
				data:[
					{
						name:"微型断路器",
						english:"contactor",
						img:"http://image-c.ehsy.com/uploadfile/EL1/EL2/MAU647.jpg"
					},
					[
						{
							name:"交流线圈接触器",
							english:"Micro circuit breaker",
							img:"http://image-c.ehsy.com/uploadfile/EL/Schneider100/MAV212.jpg"
						},
						{
							name:"电机保护断路器",
							english:"Motor starter protector/Circuit breaker",
							img:"http://image-c.ehsy.com/uploadfile/EL1/EL2/SDC985.jpg"
						}
					]
				],
				info: [{
						h4: "西域分类·品质丰富",
						span: ""
					},
					{
						h4: "西域精品·服务至上",
						span: ""
					},

				]
			}
		},
		components: {
			"Header": Header,
			"Info": Info,
			"bannerInstru": bannerInstru,
			"InstruList": InstruList,
			"InstruServer":InstruServer,
			"InstruNav":InstruNav,
			"InstruGoods":InstruGoods
		},
		mounted() {
			if (!this.scroll) {
			this.scroll = new BScroll(this.$refs.instrumentWrapper, {
					scrollY: true,
					click: true,
					pull: true
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.instruments{
		width: 100%;
		height: 100%;
		padding-top: 1rem;
		.messageWrapper{
			width: 100%;
			height: 100px;
			.content {
				width: 100%;
				}
		}		
	}
</style>
