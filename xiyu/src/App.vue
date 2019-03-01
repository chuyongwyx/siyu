<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
	import Footer from './components/common/footer'
export default {
		components:{
				"Footer":Footer
		}
}
</script>

<style>
	#app{
					width: 100%;
					height: 100%;
					background:#f0f0f0 ;
					
	}
	*{
		margin:0;
		padding:0
	}
	img{
		display:block;
	}

</style>
