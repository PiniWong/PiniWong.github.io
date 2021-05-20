<template>
  <div class="detail">
      <detail-nav ref="detailNav" @navClick='navClick' class="Detail_NavBar" :NaVitems="NaVitems"/>
      
      <b-scroll ref="Bscroll" :probeType="3" @scroll="scroll"  class="content"  >
        <!-- <div>
          <li v-for="(item,index) in $store.state.cartList" :key="index">
              {{item}}
          </li>
      </div> -->
            <detail-swiper class="Detail_swiper"  :SwiperImg='SwiperImg'></detail-swiper>
            <detail-base-info ref="detailInfo" :goods="goods" />
            <detail-shop-info :shop="shop" />
            <detail-info  :detailInfo="detailInfo"/>
            <detail-param-info  ref="detailParam" :paramInfo="paramInfo"/>
            <detail-comment-info ref="detailComment" :commentInfo="commentInfo"></detail-comment-info>
            <detail-recommend-list ref="detailRecommend" :goodsList="goodsList"></detail-recommend-list>
      </b-scroll>
      <back-top @click.native="BacktopClick" v-show="backisShow" />
      <detail-bottom-bar  @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import { getDetail,Goods,Shop,GoodsParam,getRecommend } from "network/detail"
import BScroll from  "components/content/bscroll/bscroll"
import DetailNav from "./childDetail/DetailNav"
import DetailSwiper from "./childDetail/detailswiper"
import DetailBaseInfo from "./childDetail/DetailBaseInfo"
import DetailShopInfo from "./childDetail/DetailShopInfo"
import DetailInfo from "./childDetail/DetailGoodsInfo"
import DetailParamInfo from "./childDetail/DetailParamInfo"
import DetailCommentInfo from "./childDetail/DetailCommentInfo"
import DetailRecommendList from "components/content/goods/goodslist"
import { debounce } from "common/utils"
import DetailBottomBar from "./childDetail/DetailBottomBar"
import BackTop from "components/content/backtop/backtop"



export default {
    name:'detail',
    components:{
        DetailNav,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailInfo,
        DetailParamInfo,
        DetailCommentInfo,
        DetailRecommendList,
        DetailBottomBar,
        BScroll,
        BackTop
    },
    data(){
        return{
          iid:null,
          NaVitems:['商品','参数','评论','推荐'] ,
          SwiperImg:[],
          goods:{},
          shop:{},
          detailInfo:{},
          paramInfo:{},
          commentInfo:{},
          goodsList:[],
          NavScrollTop:[],
          currentIndex:"",
          backisShow:false,

        }
    },
    created(){
        // console.log(this.$route.params.iid);
            
        //tar消失
        this.$store.showTarbar=!this.$store.showTarbar
        this.iid = this.$route.params.iid
        console.log(this.iid);
        getDetail(this.iid).then(res=>{
            // console.log(res);
            const data = res.result
            this.SwiperImg=data.itemInfo.topImages
            // console.log(this.SwiperImg);

            //获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            //店铺信息
        this.shop = new Shop(data.shopInfo)
            //详情图片
        this.detailInfo = data.detailInfo
            //尺寸
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
            //评论
        if(data.rate.cRate != 0){
            this.commentInfo = data.rate.list[0]
        }
            //获取各组件长度
        this.$nextTick(()=>{
            this.NavScrollTop=[]
            this.NavScrollTop.push(0)
            this.NavScrollTop.push((this.$refs.detailParam.$el.offsetTop)-44)
            this.NavScrollTop.push((this.$refs.detailComment.$el.offsetTop)-44)
            this.NavScrollTop.push((this.$refs.detailRecommend.$el.offsetTop)-44)
            // console.log(this.NavScrollTop);
        })
        

        
        
        }),
        //推荐
        getRecommend().then(res=>{
            // console.log(res);
            this.goodsList=res.data.list
        })
    },
    mounted(){
        const refresh = debounce(this.$refs.Bscroll.refresh)
        this.$bus.$on("DetialimgUpload",()=>{
            refresh()
        })
        
        //获取各组件的位置44
        
        
    },
    updated(){
        
    }, 
    methods:{
        //滑动
        scroll(position){
            const positionY = -(position.y)
            // console.log(positionY);
            const length = this.NavScrollTop.length
            for(let i = 0;i<length;i++){
                // if((positionY >= NavScrollTop[i] && positionY <= NavScrollTop[i+1])
                // || positionY >= NavScrollTop[i+2]
                // ){
                //     console.log(i);
                // }
                if(
                    this.currentIndex !== i
                    && ((i < length - 1 && positionY >= this.NavScrollTop[i] && positionY <= this. NavScrollTop[i+1])
                    || (i === length-1 && positionY > this.NavScrollTop[i]))
                ){
                    // console.log(i);
                    this.currentIndex=i
                    console.log(this.currentIndex);
                    // console.log(this.$refs.detailNav);
                    this.$refs.detailNav.currenindex = this.currentIndex
                }
            }
            this.backisShow= (-position.y) > 1500
        },
        //点击头部导航滑动
        navClick(index){
        // this.$refs.BScroll.scrollTo(0,0)
        switch(index){
            case 0:
                this.$refs.Bscroll.scrollTo(0,0)
                break
            case 1:
                this.$refs.Bscroll.scrollTo(0,-this.NavScrollTop[1])
                break
            case 2:
                this.$refs.Bscroll.scrollTo(0,-this.NavScrollTop[2])
                break
            case 3:
                this.$refs.Bscroll.scrollTo(0,-this.NavScrollTop[3])
                break

        }

        },
        addToCart(){
            console.log('---');
            // 获取购物车需要的展示信息
            const product = {}
            product.image = this.SwiperImg[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.price
            product.iid = this.iid
            // console.log(product);
            // this.$store.commit('addCart',product)
            // console.log(this.$store.state.cartList.length);
            this.$store.dispatch("addCart" , product)
        },
        BacktopClick(){
            this.$refs.Bscroll.scrollTo(0,0)
        },
        
        
    }
}
</script>

<style scoped>
.detail{
    height: 100vh;
    /* position: relative; */
    z-index: +9;
    background-color: #fff;
}
.Detail_NavBar{
  position: relative;
  background-color: #fff;
  z-index: 999;
}
.content{
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
}
.Detail_Bottom{
    z-index: 999;
    position: fixed;
    bottom: 0;
}


</style>