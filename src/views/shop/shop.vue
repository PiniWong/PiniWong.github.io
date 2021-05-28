<template>
  <div id="shopBox">
      <nav-bar class="Nav_Bar">
        <div slot="left" v-show="backshow"  class="backimg" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div  slot="center">购物车({{length}})</div>
      </nav-bar>
      <b-scroll ref="Bscroll" class="content" :probe-type="3">
        <cart-list></cart-list>
        <!-- <div>{{lg}}</div> -->  
        <cart-bottom-bar></cart-bottom-bar>
      </b-scroll>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import BScroll from "components/content/bscroll/bscroll"
import CartList from "./chilsComps/cartList"
import {mapGetters} from "vuex"
import CartBottomBar from "./chilsComps/CartBottomBar"

export default {
  name:'shop',
  data(){
    return{
      backshow:false
    }
  },
  components:{
    NavBar,
    CartList,
    BScroll,
    CartBottomBar
  },
  computed:{
   ...mapGetters({
     length:'cartlength',
    //  lg:'ItemIid'
   })
  },
  created(){
    // if(this.$route.query.iid!=undefined){
    //   console.log(111);
    //   this.backshow=true
    // }else if(this.$route.query.iid){
    //   console.log(222);

    // }
    // console.log(this.$route.query.iid);
    if(this.$route.query.iid!=undefined){
      // console.log(1);
      this.backshow=true
      this.$store.showTarbar=false
      // console.log(this.$store.showTarbar);
    }else{
      this.backshow=false
      this.$store.showTarbar=true

      // console.log(2);

    }
    
  },
  activated(){
    this.$refs.Bscroll.refresh()
    // console.log(this.$route.query.iid);
  },
  methods:{
    backClick(){
            this.$router.back()
    },
  }
}
</script>

<style>
.shopBox{
  height: 100vh;
  position: relative;
}
.Nav_Bar{
  background-color: var(--color-tint);
  color: white;
}
.content{
    /* position: absolute; */
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
}
.backimg{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    
}
</style> 