<template>
  <div class="goods">
      <goods-item v-for="(items,index) in goodsList" :key="index" :goodsItem="items">
          
      </goods-item>
  </div>
</template>

<script>
import GoodsItem from "./goodsitem"
export default {
    components:{
        GoodsItem
    },
    props:{
        goodsList:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
    
</style>