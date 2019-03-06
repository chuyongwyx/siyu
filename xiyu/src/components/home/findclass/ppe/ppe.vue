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
				val:"劳保专场",
				img:"http://image-c.ehsy.com/uploadfile/banner/laobaobanner-APP.jpg",
				arr:[
					{
						span:"眼面部防护",
						img:"http://image-c.ehsy.com/uploadfile/PS/MAD149.jpg"
					},
					{
						span:"呼吸防护",
						img:"http://image-c.ehsy.com/uploadfile/PS1/MAD457.jpg"
					},
					{
						span:"听力防护",
						img:"http://image-c.ehsy.com/uploadfile/PS/MAD505.jpg"
					},
					{
						span:"身体防护",
						img:"http://image-c.ehsy.com/uploadfile/PS/MAD872.jpg"
					},
					{
						span:"坠落防护",
						img:"http://image-c.ehsy.com/uploadfile/PS/300/MBR656.jpg"
					},
					{
						span:"手部防护",
						img:"http://image-c.ehsy.com/uploadfile/T/T01/RQU522.jpg"
					},
				],
				data:[
					{
						name:"防护口罩",
						english:"Disposable Respirators",
						img:"http://image-c.ehsy.com/uploadfile/PS/300/MBE243.jpg"
					},
					[
						{
							name:"安全鞋",
							english:"Protective Gloves",
							img:"http://image-c.ehsy.com/uploadfile/PS1/MVR498.jpg"
						},
						{
							name:"劳保手套",
							english:"Safety Shoes",
							img:"http://image-c.ehsy.com/uploadfile/PS/MCW590_2.jpg"
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
					cid: 8,
					pcid: 8
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
