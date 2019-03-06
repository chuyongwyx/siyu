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
				val:"实验室产品专场",
				img:"http://image-c.ehsy.com/uploadfile/banner/shiyanshichanpinbanner-APP.jpg",
				arr:[
					{
						span:"实验室通用耗材",
						img:"http://image-c.ehsy.com/uploadfile/LRC/LAB912.jpg"
					},
					{
						span:"光学检测仪器",
						img:"http://image-c.ehsy.com/uploadfile/LABM/LAE073.jpg"
					},
					{
						span:"试剂",
						img:"http://image-c.ehsy.com/uploadfile/MA/RDR892.jpg"
					},
					{
						span:"生命科学仪器设备",
						img:"http://image-c.ehsy.com/uploadfile/HC/RMT602.jpg"
					},
					{
						span:"色谱耗材",
						img:"http://image-c.ehsy.com/uploadfile/consumable/RMY589.jpg"
					},
					{
						span:"水质及电化学分析仪器",
						img:"http://image-c.ehsy.com/uploadfile/HC/RNE947.jpg"
					},
					
				],
				data:[
					{
						name:"CO2培养箱",
						english:"",
						img:"http://image-c.ehsy.com/uploadfile/LE/LNN152_2.jpg"
					},
					[
						{
							name:"COD消解仪",
							english:"",
							img:"http://image-c.ehsy.com/uploadfile/LI/LAA011.jpg"
						},
						{
							name:"泵头",
							english:"",
							img:"http://image-c.ehsy.com/uploadfile/LE/LFK384.JPG"
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
