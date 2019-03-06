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
				val:"清洁专场",
				img:"http://image-c.ehsy.com/uploadfile/banner/qingjiebanner-APP.jpg",
				arr:[
					{
						span:"工业擦拭",
						img:"http://image-c.ehsy.com/uploadfile/PS/MAD994.jpg"
					},
					{
						span:"个人卫生",
						img:"http://image-c.ehsy.com/uploadfile/C/MAK437.jpg"
					},
					{
						span:"清洁工具",
						img:"http://image-c.ehsy.com/uploadfile/C/web/300x300/MBB367.JPG"
					},
					{
						span:"垃圾处理",
						img:"http://image-c.ehsy.com/uploadfile/C/web/300x300/MBC643.JPG"
					},
					{
						span:"地垫",
						img:"http://image-c.ehsy.com/uploadfile/C/web/300/MGQ402.jpg"
					},
					{
						span:"清洁设备",
						img:"http://image-c.ehsy.com/uploadfile/C/web/C300/MXC795.jpg"
					},
				],
				data:[
					{
						name:"擦拭布",
						english:"",
						img:"http://image-c.ehsy.com/uploadfile/C/web/C300/MXC354.jpg"
					},
					[
						{
							name:"洗地机",
							english:"",
							img:"http://image-c.ehsy.com/uploadfile/PS/MAE003.jpg"
						},
						{
							name:"垃圾桶",
							english:"",
							img:"http://image-c.ehsy.com/uploadfile/C/web/300x300/MBC624.JPG"
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
					cid: 16918,
					pcid: 16918
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
