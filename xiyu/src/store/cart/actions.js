
export default {
   async handlecart({commit},Goods){
		this.state.Cart.goodInfo.push(Goods);
		console.log(this.state.Cart.goodInfo)
		
   },
  }
