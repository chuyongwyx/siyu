<template>
	<div class="messageInfo">
		<div class="messageNav">
			<div></div>
			<h4>{{info.h4}}</h4>
		</div>
		<span>{{info.span}}</span>
	</div>
</template>

<script>
	export default {
		props: {
			info: Object
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	$color: #ece9e9;

	.messageInfo {
		width: 100%;
		height: 1.5rem;
		line-height: .8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: .13rem solid $color;
		border-bottom:.03rem solid $color;
		background: #FFFFFF;
		.messageNav {
			display: flex;

			div {
				background: #007857;
				width: .2rem;
				height: .38rem;
				margin: .55rem 0rem .4rem;
			}

			h4 {
				padding: 0;
				margin-left: .2rem;
				font-size: .4rem;
				background: transparent;
				border: 0;
				height: 1.5rem;
				line-height: 1.5rem;
			}
		}

		span {
			font-size: .3rem;
			color: #007857;
			padding: 0 .1rem;
		}
	}
</style>
