<template>
	<div class="choiceSum">
		<Header @handleReturn="returnValue"></Header>
		<ChoiceOne :choice="choice[value]"></ChoiceOne>

	</div>
</template>

<script>
	import Header from "./choice/header"
	import ChoiceOne from "./choice/choiceone"
	export default {
		components:{
			"Header":Header,
			"ChoiceOne":ChoiceOne
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
					{
						h3:"热风拆焊台使用说明及使用注意事项",
						p:"热风拆焊台是随着电子技术的发展且根据从事电子产品研究、生产和维...",
						img:"http://opc-img.ehsy.com/uploadfile/opc/editor/uc/201706/28/1498630227830846.jpg",
						ul:[
							"敲击扳手图片及敲击扳手和电动扳手的区别","敲击扳手规格型号、用途及其特点","卧式离子风机的原理及卧式离子风机的特点","液压拉马什么牌子好？液压拉马五个品牌介绍","液压扳手由什么组成？液压扳手的主要组成部分介绍"
						]
					},
					{
						h3:"什么是侧铣刀盘？它的主要功能和用处是什么？",
						p:"要想了解侧铣刀盘，就要先了解侧铣刀，侧铣刀是机加工过程中铣工件...",
						img:"http://opc-img.ehsy.com/uploadfile/opc/editor/uc/201706/28/1498630196447101.jpg",
						ul:[
							"手持式折光仪的原理、使用方法及使用注意事项","放大镜哪个品牌好？放大镜几大品牌介绍","阿贝折光仪的使用方法及应用领域","放大镜图片、放大镜的原理及分类","弹簧夹头生产制造规范"
						]
					},
					{
						h3:"热风拆焊台使用说明及使用注意事项",
						p:"热风拆焊台是随着电子技术的发展且根据从事电子产品研究、生产和维...",
						img:"http://opc-img.ehsy.com/uploadfile/opc/editor/uc/201706/28/1498630227830846.jpg",
						ul:[
							"敲击扳手图片及敲击扳手和电动扳手的区别","敲击扳手规格型号、用途及其特点","卧式离子风机的原理及卧式离子风机的特点","液压拉马什么牌子好？液压拉马五个品牌介绍","液压扳手由什么组成？液压扳手的主要组成部分介绍"
						]
					},
				]
			};
		}
	}
</script>

<style scoped lang="scss">
.choiceSum{
	width: 100%;
	padding: .1rem;
	border-top:.05rem solid #ece9e9;
	border-bottom:.05rem solid #ece9e9;
	background: #ffffff;
}
</style>
