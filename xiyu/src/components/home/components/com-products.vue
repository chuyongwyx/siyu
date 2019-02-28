<template>
	<div>
		<div class="com-products">
			<h2 class="tit"><span></span><span>精品馆</span></h2>
			<ul class="kinds">
				<li v-for="(item,index) in Data[0]">
					<div class="imglist"><img :src="item.backgroundAppPic" alt="" /></div>
				</li>
			</ul>
		</div>

		<div class="bigCom">
			<h2 class="tit"><span></span><span>西域大牌</span></h2>
			<ul class="bigKind">
				<li>
					<div class="imgKind"><img src="../../../../static/img/test.png" alt="" /></div>
				</li>
				<li>
					<div class="imgKind"><img src="../../../../static/img/test.png" alt="" /></div>
				</li>
				<li>
					<div class="imgKind"><img src="../../../../static/img/test.png" alt="" /></div>
				</li>
				<li>
					<div class="imgKind"><img src="../../../../static/img/test.png" alt="" /></div>
				</li>
				<li>
					<div class="imgKind"><img src="../../../../static/img/test.png" alt="" /></div>
				</li>
				<li>
					<div class="imgKind"><img src="../../../../static/img/test.png" alt="" /></div>
				</li>
				<li>
					<div class="imgKind"><img src="../../../../static/img/test.png" alt="" /></div>
				</li>
				<li>
					<div class="imgKind"><img src="../../../../static/img/test.png" alt="" /></div>
				</li>
				
				
			</ul>
		</div>

	</div>

</template>

<script>
	import Vuex from 'vuex';
	export default {
		computed: {
			...Vuex.mapState({
				Data: state => state.home.comPro
			})
		},
		created() {
//			console.log(this.Data[0])
		}

	}
</script>

<style scoped lang="scss">
	.com-products {
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
	
	.kinds {
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.1rem;
		li {
			width: 2.422rem;
			height: 2.422rem;
			padding: 0.05rem;
			.imglist {
				width: 100%;
				height: 100%;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		li:nth-last-of-type(1),
		li:nth-last-of-type(2) {
			display: none;
		}
	}
	.bigCom{
		padding:0.117rem;
		.bigKind{
			display: flex;
			flex-wrap: wrap;
			margin-top: 0.1rem;
			li{
				width: 1.81rem;
				height: 1.81rem;
				padding: 0.05rem;
				.imgKind{
					width: 100%;
					height: 100%;
					background: #fff;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		
	}
</style>