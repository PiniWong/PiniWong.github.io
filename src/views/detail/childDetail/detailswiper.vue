<template>
  <swiper>
      <swiper-item  v-for="(item,index) in SwiperImg " :key="index">
          <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"

export default {
    data(){
      return {}
    },
    props:{
        SwiperImg:{
          type:Array,
          default(){
            return {}
            }
        },
        
    },
    mounted(){
        console.log(this.SwiperImg);
    },
components:{
    Swiper,
    SwiperItem
  },
}
</script>

<style>

</style>