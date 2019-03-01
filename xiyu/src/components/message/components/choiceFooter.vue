<template>
	<div class="choiceFooter">
		<Header @handleReturn="returnValue"></Header>
		<ChoiceTwo :choice="choice[value]"></ChoiceTwo>
	
	</div>
</template>

<script>
	import Header from "./choice/header"
	import ChoiceTwo from "./choice/ChoiceTwo"
	export default {
		components:{
			"Header":Header,
			"ChoiceTwo":ChoiceTwo
		},
		methods:{
			returnValue(index){
				this.value = index;
			}
		},
		data() {
			return {
				value:0,
				turn:"",
				choice:[
					["汽修汽保...","同步带","快速粘结","气体及安...","微型机床","球轴承","防爆空调...","综合布线...","齿轮刀具","蝶阀","涂料.标示","办公设备","砂轮","螺母","磨片及切...","开孔器","静电无尘","垃圾处理","角尺.角...","园林.家...","卫浴",""],
					["涂料.标示","办公设备","砂轮","螺母","磨片及切...","开孔器","静电无尘","垃圾处理","角尺.角...","园林.家...","卫浴",""],
					["汽修汽保...","同步带","快速粘结","气体及安...","微型机床","球轴承","防爆空调...","综合布线...","齿轮刀具","蝶阀","涂料.标示","办公设备","砂轮","螺母","磨片及切...","开孔器","静电无尘","垃圾处理","角尺.角...","园林.家...","卫浴",""]
					]
			};
		}
	}
</script>

<style scoped lang="scss">
.choiceFooter{
	width: 100%;
	padding: .1rem;
	border-top:.05rem solid #ece9e9;
	border-bottom:.05rem solid #ece9e9;
	margin-bottom: 2rem;
}
</style>
