<template>
	<div class="main">
			<div class="header"><span class="s1" @click="handleClick()"><i class="iconfont" v-html="icon"></i></span><span class="s2">输入手机直接登录或注</span></div>	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				 icon :"&#xe612;"
			}
		},
		
		methods:{
			handleClick(){
				this.$router.push('/home')
			}
		}
	}
</script>

<style scoped lang="scss">
	.header{
		height: 1.03rem;
		width: 100%;
		background: #f0f0f0;
	}
	.main{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.s1 i{
		font-size: 0.5rem;
		margin-left: 0.4rem;
	}
	.s2{
		font-size: 0.44rem;
		line-height: 1.03rem;
		text-align: center;
		margin-left: 1rem;
	}
</style>