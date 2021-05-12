<template>
  <div id="shopBox">
      <nav-bar class="Nav_Bar">
        <div slot="left"  class="backimg" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div  slot="center">购物车({{length}})</div>
      </nav-bar>
      <b-scroll ref="Bscroll" class="content" :probe-type="3">
        <cart-list></cart-list>
        <!-- <div>{{lg}}</div> -->  

      </b-scroll>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import BScroll from "components/content/bscroll/bscroll"
import CartList from "./chilsComps/cartList"
import {mapGetters} from "vuex"

export default {
  data(){
    return{
      backshow:true
    }
  },
  components:{
    NavBar,
    CartList,
    BScroll
  },
  computed:{
   ...mapGetters({
     length:'cartlength',
     lg:'ItemIid'
   })
  },
  updated(){
    if(this.$route.query.iid!=undefined){
      console.log(111);
      // this.backshow=false
    }else if(this.$route.query.iid==undefined){
      console.log(222);

    }
    console.log(this.$route.query.iid);
    
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