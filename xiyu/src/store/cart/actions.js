
export default {
   async handlecart({commit},Goods){
   		if(Goods !=''){
   			this.state.Cart.frag=false
   		}
		this.state.Cart.goodInfo.push(Goods);
		console.log(this.state.Cart.goodInfo)
		
   },
  }
