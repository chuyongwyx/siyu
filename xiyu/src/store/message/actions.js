import {
	MessageData
} from "../../apis/message";
export default {
	async handleMessageData({
		commit
	}) {
		let data = await MessageData({
			k: "铣削刀具",
			pn: 1,
			sort: 0,
			fu: "",
			cid: 16614,
			pcid: 16926,
			rid: 16926,
			f: "",
		});
		console.log(data);
		commit("handleMessAcc", data)
	}
}
