<template>
	<div class="pneummatic">
		<Header :send = "val"></Header>
		<div class="wrapper pneuWrapper" ref="pneuWrapper">
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
				val:"气动专场",
				img:"http://image-c.ehsy.com/uploadfile/banner/qidongbanner-APP.jpg",
				arr:[
					{
						span:"空压机/后处理",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MAC927.jpg"
					},
					{
						span:"气动辅助件",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MAL519.jpg"
					},
					{
						span:"气阀类",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MAQ441.jpg"
					},
					{
						span:"空气处理件",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MAQ622.jpg"
					},
					{
						span:"气缸类",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MUY683.jpg"
					},
					{
						span:"真空元件",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MXK580.jpg"
					},
				],
				data:[
					{
						name:"5通电磁阀",
						english:"Filter, Regulator, Lubricators (FRL)",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MUY902.jpg"
					},
					[
						{
							name:"气动接头",
							english:"5-Way Control Valves",
							img:"http://image-c.ehsy.com/uploadfile/PTF/MAQ434.jpg"
						},
						{
							name:"气源处理组合",
							english:"Pneumatic Tube Fittings",
							img:"http://image-c.ehsy.com/uploadfile/PTF/MAL519.jpg"
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
			this.scroll = new BScroll(this.$refs.pneuWrapper, {
					scrollY: true,
					click: true,
					pull: true
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.pneummatic{
		width: 100%;
		height: 100%;
		padding-top: 1rem;
		.pneuWrapper{
			width: 100%;
			height: 100px;
			.content {
				width: 100%;
				}
		}		
	}
</style>
