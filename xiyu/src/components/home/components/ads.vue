<template>
	<div class="ads">
		<div class="ads-conent">
			<div class="imgs"><img :src="imgAd" alt="" /></div>
			<div class="txt">
				<a href="">元旦特辑-新年伊始</a>
			</div>
			<div class="txt">更多 ></div>
		</div>
		<div class="settime">
			<div class="s_time"><span>限时特惠</span></div>
			<div class="timesOut">
				<span>还剩</span>
				<span class="day">{{d}}</span>
				<span>天</span>
				<span class="hour">{{h}}</span>
				<span>:</span>
				<span class="minutes">{{m}}</span>
				<span>:</span>
				<span class="seconds">{{s}}</span>
			</div>
			<div class="more">
				<span>更多></span>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex'
	export default {
		data(){
			return{
					d:"",
					h:"",
					m:"",
					s:""
			}
		},
		computed: {
			...Vuex.mapState({
				imgAd: state => state.home.ad
			})
		},
	
		mounted() {
		 let times = setInterval(function() {
				let startDate = new Date();
				let start = startDate.getTime();
				let endDate = new Date("2019/3/22");
				let end = endDate.getTime();
				let countdown = end - start;
				
				if(countdown >= 0) {
					this.d = Math.floor(countdown / 1000 / 60 / 60 / 24);
					this.h = Math.floor(countdown / 1000 / 60 / 60 % 24);
					this.m = Math.floor(countdown / 1000 / 60 % 60);
					this.s = Math.floor(countdown / 1000 % 60);
					
				}else{
					clearInterval(times);	
				}

			}.bind(this), 1000)

		}

	}
</script>

<style scoped lang="scss">
	.ads-conent {
		width: 100%;
		height: 0.937rem;
		padding: 0.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: gray;
		.imgs {
			width: 2.46rem;
			height: 0.375rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	
	.settime {
		width: 100%;
		height: 0.914rem;
		background: #fff;
		display: flex;
		align-items: center;
		padding: 0 0.2rem;
		justify-content: space-between;
	}
	
	.timesOut {
		display: flex;
		line-height: 0.7rem;
		span {
			margin: 0 0.05rem;
			color: #333;
		}
		.day,
		.hour,
		.minutes,
		.seconds {
			display: block;
			padding:0 0.1rem;
			height: 0.7rem;
			border: 1px solid #ccc;
			line-height: 0.7rem;
			border-radius: 0.05rem;
		}
	}
	
	.s_time {
		color: seagreen;
	}
	.more{
		color: gray;
	}
</style>