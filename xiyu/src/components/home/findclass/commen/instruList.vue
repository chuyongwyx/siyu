<template>
	<div class="instruList">
		<ul class="instruLi">
			<li v-for="(item,index) in send" :key="item.id">
				<span>{{item.span}}</span>
				<img :src="item.img">
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:["send"]
	}
</script>

<style scoped lang="scss">
.instruList{
	width: 100%;
	.instruLi{
		width: 100%;
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 .14rem;
		li{
			width: 49.5%;
			background: #FFFFFF;
			padding: .24rem;
			background: #FFFFFF;
			margin-bottom: .07rem;
			display: flex;
			span{
				width: 49%;
				height: 1.8rem;
				font-size: .4rem;
				font-weight: 800;
			}
			img{
				width: 50%;
				height: 1.8rem;
			}
		}
	}
}
</style>
