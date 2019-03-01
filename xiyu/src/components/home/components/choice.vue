<template>
	<div class="main_choice">
		<h2 class="tit"><span></span><span>西域精选</span></h2>
		<div class="shopKind" v-for="(item,index) in shopInfo[0]">
			<div class="kind">
				<div class="kind_img"><img :src="item.backgroundAppPic" alt="" /></div>
				<ul class="kind_shop">
					<li v-for="(items,indexs) in item.categorys">
						{{items.categoryName}}
					</li>
				</ul>
			</div>
			<h3 class="tui">-推荐品牌-</h3>
			<div class="wrapper logos" ref="item">
				<ul class="content logo-con">
					<li v-for="(itemss,indexss) in item.boutiqueBrands"><div><img :src="itemss.brandPic" alt="" /></div></li>
				</ul>
				<!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import Bscroll from 'better-scroll';
	export default {
		computed: {
			...Vuex.mapState({
				shopInfo: state => state.home.comPro
			})
		},
		updated(){
//			console.log(this.$refs.item[1])
			for(let i=0;i<this.$refs.item.length;i++){
			
			this.$nextTick(() => {
        			this.scroll = new Bscroll(this.$refs.item[i], {
        			scrollX:true,
        			scrollbar:true,	
        			})
        		
      		})
			}
		
	}
		
	}
</script>

<style scoped lang="scss">
	.main_choice {
		padding: 0.117rem;
		width: 100%;
	}
	
	.tit {
		widows: 100%;
		height: 1.125rem;
		background: #fff;
		display: flex;
		line-height: 1.125rem;
		font-size: 0.5rem;
		font-weight: 900;
		span:nth-of-type(1) {
			width: 0.14rem;
			height: 0.46rem;
			display: block;
			background: forestgreen;
			margin-right: 0.4rem;
			margin-top: 0.3rem;
		}
	}
	
	.shopKind {
		width: 100%;
		height: 5.446rem;
		background: #fff;
		margin-bottom: 0.234rem;
		padding-top: 0.243rem;
		.kind {
			display: flex;
			.kind_img {
				width: 2.328rem;
				height: 2.328rem;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.kind_shop {
				width: 4.94rem;
				display: flex;
				flex-wrap: wrap;
				li {
					width: 2.32rem;
					height: 0.581rem;
					margin-left: 3%;
					margin-bottom: 5.88%;
					text-align: center;
					line-height: 0.581rem;
					background: #f3f3f3;
					color: #666;
				}
				li:nth-of-type(7),
				li:nth-of-type(8) {
					display: none;
				}
			}
		}
	}
	/*设置每个ul上的第一个li颜色*/
	/*background:#3abd59;*/
	/*#0dadc7 #26c0a6 #6c96c6 #b49e80 #3a87aa #d49d7b*/
	
	.main_choice div:nth-of-type(1) .kind ul li:nth-of-type(1) {
		background: #3abd59;
		color: #fff;
	}
	
	.main_choice div:nth-of-type(2) .kind ul li:nth-of-type(1) {
		background: #5da2ec;
		color: #fff;
	}
	
	.main_choice div:nth-of-type(3) .kind ul li:nth-of-type(1) {
		background: #0dadc7;
		color: #fff;
	}
	
	.main_choice div:nth-of-type(4) .kind ul li:nth-of-type(1) {
		background: #26c0a6;
		color: #fff;
	}
	
	.main_choice div:nth-of-type(5) .kind ul li:nth-of-type(1) {
		background: #6c96c6;
		color: #fff;
	}
	
	.main_choice div:nth-of-type(6) .kind ul li:nth-of-type(1) {
		background: #b49e80;
		color: #fff;
	}
	
	.main_choice div:nth-of-type(7) .kind ul li:nth-of-type(1) {
		background: #3a87aa;
		color: #fff;
	}
	
	.main_choice div:nth-of-type(8) .kind ul li:nth-of-type(1) {
		background: #d49d7b;
		color: #fff;
	}
	
	.tui {
		margin: 0.468rem 0;
		text-align: center;
		font-size: 0.35rem;
	}
	.logos{
		 width: 100%;
		 height: 1.226rem;
		 overflow: hidden;
	}
	.logo-con{
		width:max-content;
		height: 1.226rem;
		display: flex;
		flex-wrap: nowrap;
		li{
			width: 1.94rem;
			height:1.266rem;
			margin-bottom: 10%;
			margin: 0 0.05rem;
			div{
				width: 100%;
				height: 100%;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>