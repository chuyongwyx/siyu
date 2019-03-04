<template>

	<div class="wrapper scrollw" ref="Scrollw">
		<ul class="content scrollc">
			<li :logoId="item.catId" v-for="(item,index) in dataKind[0]" @click="handleClick($event)" ref="item" class="lis" :kindid="index" >
				{{item.catName}}
			</li>
		</ul>
		<!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
	</div>
	
</template>

<script>
	import Vuex from "vuex";
	import Bescroll from "better-scroll"
	export default {
		data(){
			return{
				   kindid:''
			}
		},
		computed: {
			...Vuex.mapState({
				dataKind: state => state.classify.kinds
			})
		},
		created() {
//			console.log(this.dataKind);
			//操作对应的右边数据
			
			
		},
		mounted() {
			this.$nextTick(() => {
				this.scroll = new Bescroll(this.$refs.Scrollw, {
					scrollY: true,
					click: true

				})
			})
		
			
		},
		updated(){
				this.$refs.item[1].style.background="#f5f5f5";
		},
		methods:{
			handleClick(event){
				let lis= document.getElementsByClassName('lis');
				for(var i=0,len=lis.length;i<len;i++){
					lis[i].style.background='';
				}
				event.target.style.background="#f5f5f5";	
				this.kindid=event.target.getAttribute("kindid");
				//向右侧的商品列表发送传递的参数
				this.Observer.$emit("handleIndex",this.kindid)
				
				//向左侧的商家的logo这边发送数据
				let logoId = event.target.getAttribute('logoId');
				//console.log(logoId)
				this.Observer.$emit("handleLogoId",logoId)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.scrollw {
		width: 30%;
		margin-top: -0.4rem;
		height: 11rem;
		margin-bottom: 2rem;
		margin-right:3%;
	}
	
	.scrollc {
		width: 100%;
		overflow: hidden;
		li {
			display: block;
			width: 2.25rem;
			height: 1.31rem;
			background: #fff;
			margin-bottom: 1px;
			line-height: 1.31rem;
			text-align: center;
		}
	
	}
</style>