<template>
<div>
  <div id="shop-item" v-if="showitem">
    <!-- <div class="item-selector">
      <CheckButton @checkBtnClick="checkedChange" v-model="itemInfo.checked"></CheckButton>
    </div> -->
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price}}</div>
        <div class="item-count right">
          <button class="conutBut" @click="conutClick(1)" >-</button>
          {{itemInfo.conut}}
          <button class="conutBut" @click="conutClick(2)" >+</button>
          </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
  // import CheckButton from './CheckButton'
// import {mapGetters} from "vuex"
  export default {
    name: "ShopCartItem",
    data(){
      return{
        showitem:true
      }
    },
    props: {
      itemInfo: Object
    },
    components: {
      // CheckButton 
    },
    created(){
      console.log(this.itemInfo);
    },
    
    mounted(){
      console.log(this.$store.state.cartList);
    },
    computed:{
    
    },
    methods: {
      
      checkedChange: function () {
        this.itemInfo.checked = !this.itemInfo.checked;
      },
      conutClick(value){
        if(value==1){
          // if(this.itemInfo.conut){
          //   this.itemInfo.conut--
          //   if(this.itemInfo.conut==0 ){
          //     this.itemInfo.conut--
          //     this.showitem=false
          //   }
          //   // console.log(123);
          // }
          if(this.itemInfo.conut){
            this.$store.dispatch('subCart',this.showitem)
          }
        }else{
          this.itemInfo.conut++
        }
      }
    },
    
  }
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }

  .conutBut{
    width: 3vh;
    height: 3vh;
    background-color: #fff;
    border: rgb(207, 207, 207) 1px dashed;
    margin:0 5px 0 5px;
  }
  .conutBut:hover{
    background-color: orangered;
  }
</style>
