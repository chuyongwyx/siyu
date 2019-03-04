<template>
	<div>
		<mt-header title="定位地点" class="abs_fix">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			
		</mt-header>
	<div class="wrapper pos" ref="Position">
		<div class="conent pos-con">
		<mt-index-list>
			<mt-index-section :index="key" v-for="(value, key, index) in this.locations">
				<mt-cell :title="item.city" v-for="(item,indexs) in value" :value="key"></mt-cell>

			</mt-index-section>
		</mt-index-list>
		</div>
	</div>
</div>
</template>

<script>
	import Vuex from 'vuex';
	import Bscroll from 'better-scroll'
	export default {
		created() {
			this.handle();
		},
		mounted() {
			console.log(this.locations);
			
			 this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.Position, {
        	scrollY:true
        })
      })
		},
		computed: {
			...Vuex.mapState({
				locations: state => state.Position.locations
			})

		},
		methods: {
			...Vuex.mapActions({
				handle: 'Position/handleToolsData'
			})
		}

	}
</script>

<style>
	.pos{
			width: 100%;
			height: 10rem;
			margin-top:0.918rem;
	}
	.pos-con{
			overflow: hidden;
	}
	.abs_fix{
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 5;
	}
	.mint-header {
		width: 100%;
		height: 0.918rem;
		background: #f7f7f8;
		font-size: 0.4rem;
		color: #000;
	}
	.mint-indexsection-index{
		font-size: 0.4rem;
	}
	.mint-cell-text{
		font-size:0.3rem ;
	}
	.mint-cell-value{
		font-size: 0.3rem;
	}
	.mintui {
		font-size: 0.5rem;
	}
	.mint-cell-wrapper{
		height:0.937rem;
	}
</style>