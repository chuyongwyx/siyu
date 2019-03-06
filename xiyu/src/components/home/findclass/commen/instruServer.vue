<template>
	<div class="instruServer">
		<div class="instruLeft">
			<div class="instruName">{{send[0].name}}</div>
			<div class="instruName">{{send[0].english}}</div>
			<div><img :src="send[0].img"></div>
		</div>
		<div class="instruRight">
			<div class="instruRightTop" v-for="(item,index) in send[1]">
				<div>
					<div class="instruName">{{item.name}}</div>
					<div class="instruName">{{item.english}}</div>
				</div>
				<div><img :src="item.img"></div>
			</div>
		</div>
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
.instruServer{
	width: 96.5%;
	margin: 0 .13rem;
	display: flex;
	justify-content: space-between;
	.instruLeft{
		width: 49.5%;
		display: flex;
		flex-direction: column;
		padding: .24rem;
		background: #ffffff;
		margin-bottom: .1rem;
		.instruName{
			width: 50%;
			font-size: .3rem;
			line-height: .5rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		div{
			img{
				width: 2.62rem;
				height: 2.62rem;
			}
		}
	}
	.instruRight{
		width: 49.5%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.instruRightBottom,.instruRightTop{
			width: 100%;
			height: 50%;
			padding: .24rem;
			display: flex;
			background: #ffffff;
			margin-bottom:.1rem ;
			
			div{
				width: 50%;
				.instruName{
					width: 100%;
					font-size: .3rem;
					line-height: .5rem;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					
				}
				img{
					width: 1.32rem;
					height: 1.32rem;
				}
			}
		}
		
	}
}
</style>
