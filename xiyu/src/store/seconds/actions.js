import {
	SecondsData
} from "../../apis/seconds";
export default {
	async handleSecondsData({
		commit
	}) {
		let data = await SecondsData({
			k: "",
			pn: 1,
			sort: 0,
			fu: "",
			cid: 2005,
			pcid: 2005
		});
		console.log(data);
		commit("handleSecondsAcc", data)
	}
}
