<template>
  <div class="listImg">
    <div v-for="(item,index) in displaySkus" class="singleInfo">
      <img :src="item.skuPic" alt>
      <div class="salesCount">
        {{item.salesOff}}%
        <p>OFF</p>
      </div>
      <p>{{item.skuName}}</p>

      <div class="salesInfo">
        <div class="salesPrice">
          <span>￥{{item.salesPrice}}</span>
          <s>￥{{item.marketPrice}}</s>
        </div>
        <div class="crazyBuy">去抢购</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  created() {
    this.handleMoreData();
  },
  computed: {
    ...Vuex.mapState({
      displaySkus: state => state.more.displaySkus
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleMoreData: "more/handleMoreData"
    })
  }
};
</script>

<style lang="scss" scoped>
.listImg {
  display: flex;
  flex-wrap: wrap;
  .singleInfo {
    width: 50%;
    height: 5.4rem;
    border: 12px solid #1d967a;
    position: relative;
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    img {
      width: 3.3rem;
      height: 3.3rem;
      margin-bottom: 0.16rem;
    }
    .salesCount {
      width: 0.64rem;
      height: 0.72rem;
      background: #ff7200;
      color: #fff;
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      text-align: center;
      p {
        margin-top: 0.15rem;
      }
    }
    .salesInfo {
        display:flex;
      .salesPrice {
          flex:1;
        span {
          color: red;
          margin: 0.15rem 0;
          display:block;
        }
      }
      .crazyBuy{
             width:1.67rem;
             height:.64rem;
             background:#1d967a;
             color:#fff;
             font-size:30px;
             text-align: center;
             line-height:.64rem;
             border-radius:5%;
             margin-top:.2rem;
             margin-right:.1rem;
      }
    }
  }
}
</style>
