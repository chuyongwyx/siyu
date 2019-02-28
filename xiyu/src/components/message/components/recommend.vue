<template>
	<ul class="recommend">
		<li class="recLi" v-for ="(item,index) in state">
			<div class="recImg">
				<img :src="item.pictureUrl" >

			</div>
			<span>{{item.productName}}</span>
			<div class="recInfo">
				<span>西域价:</span>
				<span>￥:{{item.salePrice}}</span>
			</div>
		</li>
	</ul>
</template>

<script>
	import Vuex from "vuex"
	export default {
		data() {
			return {
					
			};
		},
		created() {
			this.handleMessData();
		},
		methods: {
			...Vuex.mapActions({
				handleMessData: "message/handleMessageData"
			})
		},
		computed: {
		  ...Vuex.mapState({
		    state:state=>state.message.data
		  })
		},
	}
</script>

<style scoped lang="scss">
	.recommend {
		width: 100%;
		padding: 0 0.13rem 0.13rem 0.13rem;
		background: #ece9e9;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 2rem;

		.recLi {
			width: 49%;
			padding: .25rem;
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			align-item: center;
			margin-bottom:.15rem;
			.recImg {
				width: 3.1rem;
				height: 3.1rem;
				border: .01rem solid #999999;
				img {
					width: 100%;
					height: 100%;
					display: block;
					margin:0 auto;
				}
			}

			span {
				width: 100%;
				height: .8rem;
				line-height: .4rem;
				letter-spacing: .01rem;
				display: block;
				overflow: hidden;	
			}
			.recInfo{
				width: 100%;
				height:.32rem;
				span{
					display: inline-block;
					font-size: .28rem;
					width: 1.4rem;
					height: .32rem;
					line-height: .32rem;
				}
				span:last-child{
					color: red;
					font-weight: 900;
				}
			}
		}
	}
</style>
