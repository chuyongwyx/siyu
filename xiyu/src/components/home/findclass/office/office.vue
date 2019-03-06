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
				val:"办公专场",
				img:"http://image-c.ehsy.com/uploadfile/banner/bangongbanner-APP.jpg",
				arr:[
					{
						span:"通讯设备",
						img:"http://image-c.ehsy.com/uploadfile/C/web/300x300/MGD925.jpg"
					},
					{
						span:"办公用品",
						img:"http://image-c.ehsy.com/uploadfile/C/web/300/MGH029.JPG"
					},
					{
						span:"办公家具",
						img:"http://image-c.ehsy.com/uploadfile/C/web/300/MNV689.JPG"
					},
					{
						span:"办公设备",
						img:"http://image-c.ehsy.com/uploadfile/C/web/300/SCN439.JPG"
					},
					
				],
				data:[
					{
						name:"对讲机",
						english:"",
						img:"http://image-c.ehsy.com/uploadfile/PS/300/MBN517.jpg"
					},
					[
						{
							name:"标签打印机",
							english:"",
							img:"http://image-c.ehsy.com/uploadfile/C/web/B300/MAR635.jpg"
						},
						{
							name:"笔类",
							english:"",
							img:"http://image-c.ehsy.com/uploadfile/C/web/300x300/MCT998.JPG"
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
					cid: 2,
					pcid: 2
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
