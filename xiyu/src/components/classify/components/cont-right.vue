<template>
	<div class="cont-right">
		<h3 class="tit">推荐品牌</h3>
		<div class="logo">这个是最后操作</div>
		<div class="wrapper scrollimg" ref="scrollImg">
			<div class="content scrollcon">
				<div class="kinds" v-for="(item,index) in this.kinds[0][this.indexId].nodes">
					<div class="kindTit"><span>{{item.catName}}</span><span>全部</span></div>
					<ul class="kindsImg">
						<li v-for="(items,indexs) in item.nodes" class="kindsli">
							<div class="goodsImg"><img :src="items.categoryImgUrl" alt="" /></div>
							<span>{{items.catName}}</span>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex'
	import Bscroll from 'better-scroll'
	export default {
		methods: {

		},
		data() {
			return {
				indexId: "1"

			}
		},
		created() {

			this.Observer.$on('handleIndex', (value) => {
				this.indexId = value;
				console.log(this.kinds)
			})

		},
		computed: {
			...Vuex.mapState({
				kinds: state => state.classify.kinds
			})
		},
		updated() {
			this.$nextTick(() => {
				this.scroll = new Bscroll(this.$refs.scrollImg, {
					scrollY:true,
					click:true,
					scrollbar:true
					
				})
			})
		}
	}
</script>

<style scoped lang="scss">
	.scrollimg {
		width: 100%;
		height: 8rem;
		margin-top:3.6rem ;
		.scrollcon {
			width: 100%;
			overflow: hidden;
		}
	}
	
	.cont-right {
		width: 67%;
		padding-top: 0.88rem;
		position: relative;
		.tit {
			width: 100%;
			height: 0.914rem;
			background: #fff;
			line-height: 0.914rem;
			position: absolute;
			top:0.89rem;
			z-index: 5;
			
		}
		.logo {
			width: 100%;
			height: 2.812rem;
			background: #fff;
			position:absolute;
			top: 1.71rem;
			z-index: 5;
			
		}
	}
	
	.kindTit {
		height: 0.70rem;
		line-height: 0.70rem;
		display: flex;
		font-size: 0.35rem;
		font-weight: 540;
		justify-content: space-between;
		span:nth-of-type(2) {
			margin-right: 0.2rem;
		}
	}
	
	.kindsImg {
		display: flex;
		flex-wrap: wrap;
		background: #fff;
	}
	
	.kindsli {
		width: 1.65rem;
		height: 2.81rem;
		padding: 0.1rem;
		text-align: center;
		font-size: 0.30rem;
	}
	
	.goodsImg {
		width: 100%;
		img {
			width: 100%;
		}
	}
</style>