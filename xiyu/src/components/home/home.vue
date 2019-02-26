<template>
	<div>
		首页
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		created() {
			this.handleHomeData();
		},
		methods: {
			...Vuex.mapActions({
				handleHomeData: "home/handleHomeData"
			})
		}
	}
</script>

<style scoped lang="scss">
	$color :red;
	div {
		color: $color;
	}
</style>