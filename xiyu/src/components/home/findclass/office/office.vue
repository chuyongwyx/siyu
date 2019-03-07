<template>
	<div class="instruments">
		<Header :send = "state.val"></Header>
		<div class="wrapper messageWrapper" ref="instrumentWrapper">
			<div class="content">
				<bannerInstru :send = "state.img"></bannerInstru>
				<Info :info="state.info[0]"></Info>
				<InstruList :send = "state.arr"></InstruList>
				<Info :info="state.info[1]"></Info>
				<InstruServer :send = "state.data"></InstruServer>
				<InstruNav></InstruNav>
				<InstruGoods :send = "state.obj"></InstruGoods>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
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
				
			}
		},
		computed: {
			...Vuex.mapState({
				state: state => state.seconds.office
			})
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
		.wrapper {
			height: 100%;
			.content {
			padding-top: 1rem;

				}
		}		
	}
</style>
