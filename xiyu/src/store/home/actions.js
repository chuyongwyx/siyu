import {HomeData,HomeHotShopData,HomePro} from "../../apis/home";
export default {
   async handleHomeData(){
		let data = await HomeData();
		this.state.home.homeGoods =data;
   },
   async  handleHomeAdsData(){
   		let hotdata= await HomeHotShopData();
// 		console.log(hotdata.data.displaySkus);
   		this.state.home.hotShop.push(hotdata.data.displaySkus)
   },
   
   async handleComProduct(){
   		let proData = await HomePro();
// 		console.log(proData.data);
		this.state.home.comPro.push(proData.data)
   }
   
}