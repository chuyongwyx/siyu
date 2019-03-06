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
				val:"工具专场",
				img:"http://image-c.ehsy.com/uploadfile/banner/gongjubanner-APP.jpg",
				arr:[
					{
						span:"工具套装",
						img:"http://image-c.ehsy.com/uploadfile/T/MAH343.jpg"
					},
					{
						span:"钳工工具",
						img:"http://image-c.ehsy.com/uploadfile/HT/MCH678.JPG"
					},
					{
						span:"扳手/手动套筒",
						img:"http://image-c.ehsy.com/uploadfile/HT/MCH825.JPG"
					},
					{
						span:"钳/夹",
						img:"http://image-c.ehsy.com/uploadfile/T/MFB095.jpg"
					},
					{
						span:"电工工具",
						img:"http://image-c.ehsy.com/uploadfile/T/RFL077.jpg"
					},
					{
						span:"充电式工具",
						img:"http://image-c.ehsy.com/uploadfile/T/T01/RQU522.jpg"
					},
				],
				data:[
					{
						name:"扳手套装",
						english:"wrench kits",
						img:"http://image-c.ehsy.com/uploadfile/T1/MAY470.JPG"
					},
					[
						{
							name:"角磨机/抛光机",
							english:"pliers",
							img:"http://image-c.ehsy.com/uploadfile/T/T01/MAA420_1.JPG"
						},
						{
							name:"钳子",
							english:"grinding/polishing tool",
							img:"http://image-c.ehsy.com/uploadfile/HT/MCN218.JPG"
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
					cid: 5,
					pcid: 5
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
