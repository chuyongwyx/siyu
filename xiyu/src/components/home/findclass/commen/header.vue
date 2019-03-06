<template>
	<div class="headerInstru">
		<span @click="turn()"> < </span>
		<span>{{send}}</span>
		<span></span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:["send"],
		methods:{
			turn(){
				this.$router.push('/home')
			}
		}
	}
</script>

<style>
.headerInstru{
	width: 100%;
	height: 1rem;
	padding: 0 .4rem;
	font-size: .4rem;
	line-height: 1rem;
	font-weight: 900;
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	z-index: 8;
	left:0;
	background: #ECECEC;
}
</style>
