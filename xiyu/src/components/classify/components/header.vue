<template>
    <div class="header">
        <div class="inpt">
          {{info}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info:"请输入产品名称 品牌 型号或SKU号"
        }
    },
    methods:{
        
    }
}
</script>

<style scoped lang="scss">
   .header{
       width:100%;
       height:.88rem;
       display:flex;
       align-items: center;
       justify-content: center;
       border-bottom: 1px solid #999;
       position: fixed;
       z-index: 5;
       top: 0;
       left: 0;
       background: #fff;
       .inpt{
           width:95%;
           height:0.65rem;
           background:#e3e3e3;
           color:#999;
           font-size:0.33rem;
           line-height: 0.65rem;
           padding-left:0.2rem;
           border-radius:0.1rem;
       }
       .modal{
           width:100%;
           height:100%;
          background:rgba(255,255,255,.8)

       }
       
       button{
           border:none;
           outline:none;
           width:95%;
           height:0.5rem;
           color:#999;
           border-radius: none;
       }
   } 
</style>
