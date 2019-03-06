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
				val:"轴承专场",
				img:"http://image-c.ehsy.com/uploadfile/banner/zhouchengbanner-APP.jpg",
				arr:[
					{
						span:"球轴承",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MAB739.jpg"
					},
					{
						span:"轴承工具/附件",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MAC202.jpg"
					},
					{
						span:"滚子轴承",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MAX753.jpg"
					},
					{
						span:"带座轴承",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MVE450.jpg"
					},
					
				],
				data:[
					{
						name:"深沟球轴承",
						english:"Bearing units",
						img:"http://image-c.ehsy.com/uploadfile/PTF/MVE443.jpg"
					},
					[
						{
							name:"圆柱滚子轴承",
							english:"Deep groove ball bearings",
							img:"http://image-c.ehsy.com/uploadfile/PTF/MAB832.jpg"
						},
						{
							name:"带座轴承",
							english:"Cylindrical roller bearings",
							img:"http://image-c.ehsy.com/uploadfile/PTF/MAX753.jpg"
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
