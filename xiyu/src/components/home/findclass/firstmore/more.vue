<template>
	<div>
		<Header-com></Header-com>
		<Banner-com></Banner-com>
	</div>
</template>

<script>
import Vuex from "vuex";
import Header from "./components/header"
import Banner from "./components/banner"
import Timer from "./components/timer"
	export default{
		components:{
			"Header-com":Header,
			"Banner-com":Banner,
		},
		ed(){

		}
	}
</script>

<style>
</style>