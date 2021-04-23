<template>
  <div>
      <detail-nav :NaVitems="NaVitems"></detail-nav>
      <detail-swiper :SwiperImg='SwiperImg'></detail-swiper>
  </div>
</template>

<script>
import { getDetail } from "network/detail"
import DetailNav from "./childDetail/DetailNav"
import DetailSwiper from "./childDetail/detailswiper"
export default {
    name:'detail',
    components:{
        DetailNav,
        DetailSwiper
    },
    data(){
        return{
          iid:null,
          NaVitems:['参数','详情','评论','推荐'] ,
          SwiperImg:[]
        }
    },
    created(){
        console.log(this.$route.params.iid);
        this.iid = this.$route.params.iid
        getDetail(this.iid).then(res=>{
            console.log(res);
            this.SwiperImg=res.result.itemInfo.topImages
            console.log(this.SwiperImg);

        })
    },
    mounted(){
        
    },
    methods:{
        //网络请求
        
    }
}
</script>

<style scoped>


</style>