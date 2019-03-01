import {ClassifyData} from "../../apis/classify";
export default {
   		async  ClassifyHandleData(){
   			let data = await ClassifyData();
   			this.state.classify.kinds.push(data);
   		}
}