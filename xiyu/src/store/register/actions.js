import {register} from "../../apis/register";
export default{
		async handleRegSuccData({commit},param){
			 let data = await register(param);
				this.state.register.registerInfo= data.successInfo
				console.log(this.state.register.registerInfo)
		}
}
