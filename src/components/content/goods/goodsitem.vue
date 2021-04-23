<template>
  <div class="goodsitem">
      <img :src="goodsItem .show.img" alt="" @load="imageLoad" @click="imgClick">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <div class="goods-price">
               <span>原价{{goodsItem.orgPrice}}</span>
                <img src="~assets/img/common/collect.svg" alt="" >
             <span class="newprice">现价{{goodsItem.price}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return{}
            }
        },
    },
    methods:{
        imageLoad(){
            this.$bus.$emit("imageOnload")
        },
        imgClick(){
            this.$router.push("/detail/" + this.goodsItem.iid)
        }
    }
}
</script>

<style>
.goodsitem{
    width: 46%;
    padding-bottom: 20px;
}
.goodsitem>img{
    width: 100%;
    border-radius: 10px;
    padding-bottom: 5px;
}
.goods-info{
    width: 100%;
    font-size: 15px;
    align-items: center ;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.goods-info p {
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goods-price{
    font-size: 13px;
    display: flex;
    justify-content: center;

}
.goods-price span{
    display: flex;
}
.goods-price img{
    width: 7%;
    height: 100%;
    display: flex;
}
.goods-price .newprice{
    color: var(--color-tint);
}


</style>