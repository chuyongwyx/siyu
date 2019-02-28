<template>
	<div class="messageRules">
		<div class="rules" v-for="(item,index) in rule">
			<h3>{{item.title}}</h3>
			<p>{{item.rules}}</p>
			<div class="mainRule">
				<i></i>
				<span>2017-1-11</span>
				<i></i>
				<span>阅读量（）</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				rule:[
					{
						title:"企业采购成本控制的十条“铁律“",
						rules:"很多时候企业或者家庭一直在一个高速蓬勃的发展中，这个时候不管是企业的老板，还是家庭的主人都不会考虑降低你的开支来控制成本。但是小编还是劝各位不要等到经济衰退的时候才开始考虑减少你的支出。即使您的业务蓬....",
						time:" ",
						skim:""
					},
					{
						title:"从MRO视角解码我国民航发展“十三五”规划",
						rules:"2017年02月15日，民航局全文发布了《中国民用航空发展第十三个五年规划》，明确了未来五年全行业发展的主要工作和思路，为我国民航业的持续健康发展指明了方向。",
						time:"",
						skim:""
					},
					{
						title:"西域商城 MRO电商的先行者",
						rules:"MRO是maintenance、repair、operation的缩写，即维护、维修和运营，指非生产原料性质的工业用品。在欧美国家，工业品集成销售的线上线下模式已经非常成熟。近年来，在中国市场，一批M....",
						time:"",
						skim:""
					},
				]
			};
		}
	}
</script>

<style scoped lang="scss">
.messageRules{
	width:100%;
	.rules{
		width: 96%;
		padding: .2rem;
		margin: .1rem .15rem;
		border: .01rem solid #C3C3C3;
		h3{
			height: .48rem;
			line-height: .48rem;
			font-size: .26rem;
			margin-bottom: .1rem;
		}
		p{
			width: 100%;
			height: .8rem;
			overflow: hidden;
			line-height: .4rem;
			color: #666666;
		}
		.mainRule{
			width: 100%;
			margin-top:.1rem ;
			color: #666666;
		}
	}
}
</style>
