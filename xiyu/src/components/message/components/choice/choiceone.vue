<template>
	<div class="choiceone">
		<div class="choiceTop">
			<div class="topLeft">
				<h3>{{choice.h3}}</h3>
				<p>{{choice.p}}</p>
			</div>
			<img :src="choice.img" >
		</div>
		<ul class="choiceCenter">
			<li class="abstractOne" v-for="(item,index) in choice.ul" :key="item.id"> <span>{{index+1}}</span> {{item}}</li>
		</ul>
		<div class="choiceBottom">进入工具及五金频道 <span> > </span></div>
	</div>
</template>

<script>
	export default {
		props:{
			choice:Object
		},
		data() {
			return {
				
			};
		},
	
	}
</script>

<style scoped lang="scss">
.choiceone{
	width: 100%;
	padding: .24rem;
	border: .01rem solid #007857;
	border-top: 0;
	margin-bottom: .24rem;
	.choiceTop{
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 0.12rem 0;
		
		.topLeft{
			width: 60%;
			h3{
				font-size:0.3rem;
				color: #333333;
				line-height: .5rem;
				text-align: left;
			}
			p{
				    margin-top: 0.12rem;
					font-size: .28rem;
					height: 1.04rem;
					line-height: .36rem;
					text-align: left;
			}
		}
		img{
			width: 2.4rem;
			height: 1.8rem;
		}
	}
	.choiceCenter{
		li{
			letter-spacing: .03rem;
			width: 97%;
			padding: .12rem 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			span{
				display: inline-block;
				text-align: center;
				background: #007857;
				color: #FFFFFF;
				width: .4rem;
			}
		}
	}	
	.choiceBottom{
		width: 100%;
		margin-top: .24rem;
		border-top: .01rem solid #999999;
		text-align: center;
		font-size: .31rem;
		line-height: .96rem;
		color: #666666;
		span{
			display: inline-block;
			vertical-align: middle;
			text-align: center;
			width: .3rem;
			height: .3rem;
			line-height: .3rem;
			font-size: .2rem;
			background: black;
			color:#FFFFFF;
			margin-left: .48rem;
		}
	}	
	}

</style>
