import { MoreData } from "../../apis/more";
export default {
    async handleMoreData({commit}) {
        let data = await MoreData()
        console.log(data.data.displaySkus)
       commit("handleMoreData",data.data)
    },
  
} 