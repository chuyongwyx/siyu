import {ClassifyData,RecommendImg} from "../../apis/classify";
export default {
   async handleClassifyData({commit}){
//      let data = await HomeData({os:3});
//      console.log(data);
      let data = await ClassifyData();
      // console.log(data);
      // commit("handleClassifyData",data)
      data.slice(0,37).forEach((item) => {
         this.state.classify.list.push(item.catName)
      })
   },
   // async handleRecommendImg({ commit }) {
   //    let data = await RecommendImg();
      // data.slice(0,6).forEach((item) => {
      //    this.state.classify.imgs.push(item.brandUrl)
      //    console.log(this.state.classify.imgs);
      // })
   //    console.log(data)
   // }
}