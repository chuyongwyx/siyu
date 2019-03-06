<template>
	<div class="bannerInstru">
		<img :src="send" >
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
.bannerInstru{
	width: 100%;
	img{
		width: 100%;
		height: 2.7rem;
	}
}
</style>
