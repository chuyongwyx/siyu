<template>
	<div class="reg">
		<div class="header">
			<span class="s1" @click="handleClick()"><i class="iconfont" v-html="icon"></i></span>
			<h2 class="stit">西域注册</h2>
		</div>
		<div class="userform">
			<div class="username"><span>账号</span><input type="text" placeholder="账户名/手机/邮箱"  v-model="username"/></div>
			<div class="psw"><span>密码</span><input type="password" placeholder="请输入密码" v-model="password" /></div>
			<!--<div class="confirm"><span>确认密码</span><input type="password" placeholder="请确认密码"/></div>-->
			<button class="register" @click="handleRegister">注册</button>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default {
		data() {
			return {
				icon: "&#xe642;",
				username:"",
				password:"",
				
			}
		},
		created(){
			

		},
		methods: {
			handleClick() {
				this.$router.push('/login')
			},
		 	handleRegister(){
				
				let user ={
					"userName":this.username,
					"passWord":this.password
				}
				this.handleRegSucc(user);
				if(this.registerInfo){
						alert('注册成功');
						this.$router.push('/login')
					}else{
						alert('用户已注册');
					}
					
			},
			
			...Vuex.mapActions({
					handleRegSucc:'register/handleRegSuccData'
			}),	
		},
		computed:{
			...Vuex.mapState({
					registerInfo : state=>state.register.registerInfo
			})
		}
		
		
	}
</script>

<style scoped lang="scss">
	.reg {
		width: 100%;
		height: 100%;
		background: #fff;
	}
	
	.header {
		width: 100%;
		height: 1.031rem;
		border-bottom: 1px solid #ccc;
		line-height: 1.031rem;
		.s1 {
			float: left;
		}
		i {
			font-size: 0.60rem;
		}
		h2 {
			text-align: center;
			font-weight: bolder;
		}
	}
		
		.userform{
			margin: 10% auto;
			width: 100%;
			padding: 0 4%;
			height: 4.34rem;
		}
	
		.username,
		.psw {
			font-size: 0.35rem;
			margin-bottom: 6.67%;
			line-height: 0.726rem;
			padding-bottom: 10px;
			border-bottom: 1px solid #cccccc;
			input {
				height: 0.468rem;
				width: 5.625rem;
				border: 0;
				font-size: 0.33rem;
				outline: none;
				margin-left: 0.4rem;
			}
		}
		.confirm{
				font-size: 0.35rem;
			margin-bottom: 6.67%;
			line-height: 0.726rem;
			padding-bottom: 10px;
			border-bottom: 1px solid #cccccc;	
			
			input{
				width: 4.687rem;
				height:0.467rem ;
				border: 0;
				outline: none;
				font-size: 0.33rem;
				margin-left: 0.4rem;
			}
		}
		.register{
			width: 6.9rem;
			outline: 0;
			height: 1.248rem;
			width: 100%;
			margin: 8% auto 4%;
			display: block;
			background-color: #ebebeb;
			color: #808080;
			font-size: 0.4rem;
			border: 0;
			
		}
</style>