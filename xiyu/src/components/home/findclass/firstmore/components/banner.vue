<template>
  <div class="banner">
    <div class="bannerImg">
      <img :src="imgSrc" alt>
    </div>
    <div class="btn">
      <div @click="Toggle(index)" v-for="(item,index) in tabBar">{{item.txt}}</div>
    </div>
     <Timer-com/>
      <keep-alive>
        <component :is="currView"></component>
      </keep-alive>
  </div>
</template>

<script>
import Vuex from "vuex";
import ListImg from "./listImg";
import ArrImg from "./arrImg";
import Timer from "./timer"
export default {
  components: {
    "ListImg-com": ListImg,
    "ArrImg-com": ArrImg,
    "Timer-com":Timer
  },
  data() {
    return {
      tabBar: [
        {
          txt: "限时特惠",
          path: "/listImg"
        },
        {
          txt: "下期特惠",
          path: "/arrImg"
        }
      ],
      currView: "ListImg-com",
      flag:true
    }
  },
  computed: {
    ...Vuex.mapState({
      imgSrc: state => state.more.imgSrc
    })
  },
  methods: {
    Toggle(params) {
      
      // switch (params) {
      //   case 0:
      //     this.currView = "ListImg-com";
      //   case 1:
      //     this.currView = "ArrImg-com";
      //     break;
      // }
      if(params == "1"){
          this.currView = "ArrImg-com";
          
      }else{
          this.currView = "ListImg-com";
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  margin-top: 0.88rem;
  .bannerImg {
    border-bottom: 10px solid #1d967a;
  }
  .btn {
    width: 100%;
    display: flex;
    height:.72rem;
   .btnToggle {
        width:45%;
        text-align: center;
        line-height:.72rem;
        font-size: 0.28rem;
        color:#1d967a;
    }
  }
}
</style>
