<template>
	<div class="choicetwo">
		<ul class="choiceT">
			<li class="choiceL" v-for="(item,index) in choice" :key="item.id">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			choice:Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.choicetwo{
	width: 100%;
	padding: .24rem;
	border: .01rem solid #007857;
	border-top: 0;
	margin-bottom: .24rem;
	.choiceT{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.choiceL{
			padding: 0 .18rem;
			font-size: .26rem;
			line-height: .68rem;
			letter-spacing: .03rem;
		}
	}
}
</style>
