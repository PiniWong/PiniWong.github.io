<template>
  <div id="homeBox">
    <div class="home_NavBar"><nav-bar></nav-bar></div>
    <!-- <div>{{banner.image}}</div> -->
    <b-scroll ref="Bscroll" class="Bscroll" 
    :probe-type="3" 
    @scroll="scroll"
    :pull-upload="true"
    @pullingUp="pullingUp"
    >
      <home-swiper class="home_swiper" :banners='banners'/>
      <home-recommend :recommends='recommends'/>
      <tab-control class="tab_control" :titles="['流行','新款','精选']" @tabClick="tabClick"  />
      <home-list :goodsList="goods[currentType].list"/>
    </b-scroll>
    <back-top @click.native="BacktopClick" v-show="backisShow" />
    
  </div>
</template>

<script>  
import NavBar from "components/common/navbar/NavBar"
import {getHomeMultidata,getHomeGoods} from "network/home"
import HomeRecommend from './childComps/HomerecomendView'
import HomeSwiper from "./childComps/HomeSwiper"
import TabControl from "components/content/tabControl/TabControl"
import HomeList from "components/content/goods/goodslist"
import BScroll from "components/content/bscroll/bscroll"
import BackTop from "components/content/backtop/backtop"

export default {
  data(){
    return{
      banners:null,
      recommends:null,
      goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]},
        },
      currentType:"pop",
      backisShow:false
    }
  },
  components:{
    NavBar,
    HomeSwiper, 
    HomeRecommend,
    TabControl,
    HomeList,
    BScroll,
    BackTop
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
    
   
  },
  methods:{
    //网络请求相关
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
     console.log(res);
     this.banners = res.data.banner.list
     this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type){
      const page =  this.goods[type].page+1
       getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1
      this.$refs.Bscroll.finishPullUp()

    })
    },
    //事件监听
    tabClick(index){
      console.log(index);
      switch(index){
        case 0:
          this.currentType='pop'
           break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
    },
    BacktopClick(){
      this.$refs.Bscroll.scrollTo(0,0)
    },
    scroll(position){
      // console.log(position.y);
      this.backisShow= (-position.y) > 1500
    },
    pullingUp(){
      console.log(123);
      this.getHomeGoods(this.currentType)
      this.$refs.Bscroll.scroll.refresh()
    }
  }
}
</script>

<style>
.home_NavBar{
  background-color: var(--color-tint);
  color: aliceblue;
  position: fixed;
  width: 100%;
  z-index: +9;
}
.home_swiper{
  padding-top: 44px;
}
.tab_control{
  position: sticky;
  top: 44px;
}
.Bscroll{
  height: calc(100vh - 44px);
  overflow: hidden;

}
</style>