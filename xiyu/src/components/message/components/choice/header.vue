<template>
	<div class="header">
		<div class="headers " :class="ind==index?'spe':''" v-for="(item,index) in header" @click="handleClick(index)">{{item}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ind:0,
				header:["工具及五金","刀具及量具","车间化学品"]
			};
		},
		methods:{
			handleClick(index){
				this.ind = index;
				this.$emit("handleReturn",index)
			}
		}
	}
</script>

<style scoped lang="scss">
	$color:#007857;
.header{
	width: 100%;
	height: .68rem;
	display: flex;
	justify-content: space-around;
	.headers{
		height: 100%;
		width: 34%;
		line-height: .68rem;
		padding: .02rem 0;
		text-align: center;
		font-size: .3rem;
		border: .01rem solid #ECE9E9;
		border-bottom: .01rem solid $color;

	}
	.spe{
		color: $color;
		border-top: .01rem solid $color;
		border-left: .01rem solid $color;
		border-right: .01rem solid $color;
		border-bottom: .01rem solid transparent;


	}
}
</style>
