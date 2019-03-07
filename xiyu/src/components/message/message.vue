<template>
  <div class="message">
	  <h4 class="sou">资源社区</h4>
	  <div class="wrapper messageWrapper" ref="messageWrapper">
	    <div class="content">
			<MessageBanner></MessageBanner>
			<MessageInfo :info="info[0]"></MessageInfo>
			<Rules></Rules>
			<MessageInfo :info="info[1]"></MessageInfo>
			<Choice></Choice>
			<Choice></Choice>
			<Choice></Choice>
			<Choice></Choice>
			<Choice></Choice>
			<MessageInfo :info="info[2]"></MessageInfo>
			<Choice></Choice>
			<Choice></Choice>
			<Choice></Choice>
			<MessageInfo :info="info[3]"></MessageInfo>
			<Recommend></Recommend>
			<ChoiceFooter></ChoiceFooter>
		</div>
	</div>
  </div>
</template>

<script>

import MessageBanner from "./components/banner"
import MessageInfo from "./components/messageInfo"
import Rules from "./components/rules"
import Choice from "./components/choice"
import Recommend from "./components/recommend"
import ChoiceFooter from "./components/choiceFooter"
import BScroll from "better-scroll"
export default {
	components:{
		"Rules":Rules,
		"Choice":Choice,
		"Recommend":Recommend,
		"MessageBanner":MessageBanner,
		"MessageInfo":MessageInfo,
		"ChoiceFooter":ChoiceFooter
	},
	mounted(){
		if(!this.scroll){
		  this.scroll = new BScroll(this.$refs.messageWrapper,{
			  scrollY:true,
			  click:true,
			  pull:true
		  });
		 }
	},
  data() {
    return {
		info:[
			{
				h4:"行业资讯",
				span:"更多》"
			},
			{
				h4:"产品知识",
				span:""
			},
			{
				h4:"展会中心",
				span:"更多》"
			},
			{
				h4:"为您推荐",
				span:"更多》"
			},
		]
    };
  },
};
</script>

<style scoped lang="scss">
$color: #ece9e9;
.message {
  width: 100%;
  height: 100%;
  padding-top: .88rem;
	.sou{
			position: fixed;
			top: 0;
			z-index: 5;
	  height: 0.88rem;
	  width: 100%;
	  background: $color;
	  text-align: center;
	  line-height: 0.88rem;
	  border-bottom: 0.01rem solid #c3c3c3;
	}
	.wrapper{
		height:100%;
		.content{
			padding-bottom: .98rem;
		}
		
	}
  
}
</style>
