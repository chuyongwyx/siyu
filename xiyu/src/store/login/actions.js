import {login} from "../../apis/login";
export default{
		async handleLoginSucc({commit},param){
			
			 let data = await login(param);
			 console.log(data)
			this.state.login.userInfo = data.successInfo;
			this.state.login.username = data.user;
		}
}