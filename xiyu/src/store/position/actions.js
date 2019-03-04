import {ToolsData} from "../../apis/position";
export default {
   async handleToolsData(){
		let data = await ToolsData();
//		console.log(data)
		this.state.Position.locations=data
   },
  }
