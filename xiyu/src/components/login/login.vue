<template>
	<div class="main">
		<div class="header"><span class="s1" @click="handleClick()"><i class="iconfont" v-html="icon"></i></span><span class="s2">输入手机直接登录或注</span></div>

		<div class="userform">
			<div class="username"><span>账号</span><input type="text" placeholder="账户名/手机/邮箱" v-model="username"/></div>
			<div class="psw"><span>密码</span><input type="password" placeholder="请输出密码" v-model="password" /></div>
			<button class="login" @click="handleLogin()">登录</button>
			<div @click="handleToClick()">
				<a href="##" class="reg">注册</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	export default {
		data() {
			return {
				icon: "&#xe612;",
				username:"",
				password:""
			}
		},

		methods: {
			handleClick() {
				this.$router.push('/home')
			},
			handleToClick(){
				this.$router.push('/register')
			},
			handleLogin(){
				let userInfo ={
					"userName":this.username,
					"passWord":this.password	
				}
				this.handleLoginSucc(userInfo)
				if(this.userInfo){
					alert('登录成功');
					
					this.$router.push({
						name:"my",
						query:{
							"user":this.user
						}
					})
					
				}else{
					
				}
			},
			...Vuex.mapActions({
					handleLoginSucc:'login/handleLoginSucc'
			})
		},
		
		computed:{
			...Vuex.mapState({
					userInfo: state=>state.login.userInfo,
					user: state=>state.login.username
			})
		}
	}
</script>

<style scoped lang="scss">
	.header {
		height: 1.03rem;
		width: 100%;
		background: #f0f0f0;
	}
	
	.main {
		width: 100%;
		height: 100%;
		background: #fff;
	}
	
	.s1 i {
		font-size: 0.5rem;
		margin-left: 0.4rem;
	}
	
	.s2 {
		font-size: 0.44rem;
		line-height: 1.03rem;
		text-align: center;
		margin-left: 1rem;
	}
	
	.userform {
		margin: 10% auto;
		width: 100%;
		padding: 0 4%;
		height: 4.34rem;
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
	}
	
	.login {
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
	.reg{
			font-size:0.34rem;
		}
</style>