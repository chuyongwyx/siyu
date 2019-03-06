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
				<InstruGoods :send = "obj"></InstruGoods>
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
				val:"工业检测专场",
				img:"http://image-c.ehsy.com/uploadfile/banner/gongyejiancebanner-APP.jpg",
				arr:[
					{
						span:"气体检测仪",
						img:"http://image-c.ehsy.com/uploadfile/IT/Web/100x100/MAR690.jpg"
					},
					{
						span:"电气测量仪表",
						img:"http://image-c.ehsy.com/uploadfile/IT/Web/300x300/MAR752_1.jpg"
					},
					{
						span:"电子测量仪器",
						img:"http://image-c.ehsy.com/uploadfile/IT/Web/300x300/MBC410.JPG"
					},
					{
						span:"环境检测仪",
						img:"http://image-c.ehsy.com/uploadfile/IT/Web4/300x300/MVM070.jpg"
					},
					{
						span:"工业温度检测仪",
						img:"http://image-c.ehsy.com/uploadfile/IT/Web3/100x100/SCS430.jpg"
					},
					{
						span:"测量测绘仪器",
						img:"http://image-c.ehsy.com/uploadfile/IT/Web4/300x300/SCX370.JPG"
					},
				],
				data:[
					{
						name:"万用表",
						english:"Infrared Thermometers",
						img:"http://image-c.ehsy.com/uploadfile/IT/Web/300x300/MEZ659.JPG"
					},
					[
						{
							name:"单一气体检测仪",
							english:"Multimeters",
							img:"http://image-c.ehsy.com/uploadfile/IT/Web4/300x300/MVC512.jpg"
						},
						{
							name:"红外测温仪",
							english:"Single Gas Detectors",
							img:"http://image-c.ehsy.com/uploadfile/IT/Web/100x100/MAR688_1.jpg"
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

				],
				obj:{
					k: "",
					pn: 1,
					sort: 0,
					fu: "",
					cid: 2005,
					pcid: 2005					
				}
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
