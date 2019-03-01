<template>
	<div class="wrapper scrollw" ref="Scrollw">
		<ul class="content scrollc">
				<a href="##" :kindId="item.catId" v-for="(item,index) in dataKind[0]">
					{{item.catName}}
				</a>
		</ul>
		<!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
	</div>
</template>

<script>
	import Vuex from "vuex";
	import Bescroll from "better-scroll"
	export default {
		computed: {
			...Vuex.mapState({
				dataKind: state => state.classify.kinds
			})
		},
		created() {
			console.log(this.dataKind);
		},
		mounted(){
				 this.$nextTick(() => {
        		this.scroll = new Bescroll(this.$refs.Scrollw, {
        				scrollY:true,
        				click:true
        				
        		})
     	 })
		}
	}
</script>

<style lang="scss" scoped>
		.scrollw{
							width: 2.25rem;
							height: 26.62rem;
							margin-top: 1rem;
							overflow: hidden;	
							margin-bottom: 2rem;				
		}
		.scrollc{
							width: 2.25rem;
							
							
							a{
									display: block;
									width:2.25rem;
									height:1.31rem;
									background: #fff;
									margin-bottom: 1px;
									line-height:1.31rem;
									text-align: center;
							}
		}
</style>