import {
	SecondsData
} from "../../apis/seconds";
export default {
	async handleSecondsData({
		commit
	},parm) {
		let data = await SecondsData(
		parm
		);
		console.log(data);
		commit("handleSecondsAcc", data)
	}
}
