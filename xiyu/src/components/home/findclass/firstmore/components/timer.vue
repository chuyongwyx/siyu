<template>
  <div class="timer">
    <b>活动时间</b>
    <p>还剩 <span>{{d}}</span> 天 <span>{{h}}</span> :<span>{{m}}</span> :<span>{{s}}</span></p>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
    data(){
        return{
            d:"",
            h:"",
            m:"",
            s:""
        }
    },
     created(){
            setInterval(
              function(){
                    let curr = new Date();
                    let now = curr.getTime();
                    let later = new Date("2019/3/22");
                    let end = later.getTime();
                    let countdown = end - now;
                    this.d = Math.floor(countdown / 1000 / 60 / 60 / 24);
                    this.h = Math.floor(countdown / 1000 / 60 / 60 % 24);
                    this.m = Math.floor(countdown / 1000 / 60 % 60);
                    this.s = Math.floor(countdown / 1000 % 60);
           }.bind(this),1000)
     }
}
</script>
    
<style lang="scss" scoped>
   .timer{
       height:.7rem;
       font-size:.24rem;
       display:flex;
       align-items: center;
       border-top:6px solid #1d967a;
       b{
          flex:1;
          font-weight:200;
          margin-left:.2rem;
       }
       p{
          margin-right:.18rem;
          span{
              display:inline-block;
              border:1px solid gray;
              padding:.16rem .08rem;
              border-radius:10%;
          }
       }
   }
</style>
