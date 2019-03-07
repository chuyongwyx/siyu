<template>
	<div class="homeAll">
		<div class="headAll">
			<span @click="turn()"> < </span>
			<span>全部分类</span>
			<span></span>
		</div>
		<div class="wrapper channelWrapper" ref="channelWrapper">
			<div class="content">
				<p>全部分类</p>
				<ul class="allForEach">
					<li>

					</li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li><li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import qs from "querystring"
	import BScroll from "better-scroll"
	export default {
		data() {
			return {

			}
		},
		created() {
			console.log(qs.stringify("ehsy://product/channel?cid=16926&name=%E5%88%80%E5%85%B7"))
		},
		mounted() {
			if (!this.scroll) {
				this.scroll = new BScroll(this.$refs.channelWrapper, {
					scrollY: true,
					click: true,
					pull: true
				});
			}
		},
		methods:{
			turn(){
				this.$router.push('/home')
			}
		}


	}
</script>

<style scoped lang="scss">
	.homeAll {
		width: 100%;
		height: 100%;
		padding-top:.98rem;
		background: #ffffff;
		.headAll {
			width: 100%;
			height: .98rem;
			background: #c4c4c4;
			line-height: .98rem;
			padding: 0 .4rem;
			display: flex;
			justify-content: space-between;
			font-size: .4rem;
			font-weight: 1000;
			position: fixed;
			top: 0;
			z-index:5;
		
		}
		.wrapper {
			height: 100%;
			.content {
				padding-bottom: .98rem;
				p {
					width: 100%;
					height: .98rem;
					line-height: .98rem;
					padding: 0 .2rem;
				}
				.allForEach {
					width: 100%;
					padding: .1rem;
					line-height: .7rem;
					font-size: .3rem;
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
					flex-shrink:1;
					li {
						width: 18%;
						height: 2rem;
						border: .01rem solid #ECE9E9;
						padding: 0 .03rem;
					}
				}
			}
		}
	}
</style>
