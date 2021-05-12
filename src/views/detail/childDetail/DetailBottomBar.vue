<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div @click="clickDetailShop">
        <i class="icon shop">
          <i class="shop_length">{{shopLength}}</i>
        </i>
        <span class="text">购物车</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
    <sport-ball ref="ball" class="sport-ball"></sport-ball>
  </div>
</template>

<script>
	import SportBall from 'components/content/sportBall/SportBall'
  import {mapGetters } from "vuex"
	export default {
		name: "DetailBottomBar",
    components: {
			SportBall
    },
    data(){
      return{
        // shop_length:''
      }
    },

    computed:{
      ...mapGetters({
        shopLength:'cartlength'
      }),
      iid(){
        return this.$parent.iid
      }
    },
    mounted(){
      console.log(this.iid);
    },
    methods: {
      addToCart() {
      // this.$refs.ball.run(event.target)
        this.$emit('addToCart')
      },
      clickDetailShop(){
        // console.log(123);
        this.$router.push({path:'/shop/',query:{iid:this.iid}})
      }
    }
	}
</script>

<style scoped>
  .bottom-bar {
    height: 58px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    /* background-position:0 -98px; */
    background-image: url(~assets/img/tabbar/shop.png);
  }
  .shop_length{
    position: relative;
    left: 20px;
    top: -15px;
    display: block;
    width: 20px;
    height: 20px;
    font-size: 13px;
    border-radius: 10px;
    line-height: 20px;
    color: white;
    background-color: var(--color-high-text);
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: #f69;
  }

  .sport-ball {
    position: absolute;
    left: 225px;
    bottom: 20px;
  }
</style>
