<template>
  <tab-bar>
     <tab-bar-items path="/home" ActiveColor="red">
       <img slot="items-icon" src="~assets/img/tabbar/home.png" alt="">
       <img slot="items-icon-active" src="~assets/img/tabbar/home(1).png" alt="">
       <div slot="items-text">首页</div>
     </tab-bar-items>
     <tab-bar-items path="/category">
       <img slot="items-icon" src="~assets/img/tabbar/category.png" alt="">
       <img slot="items-icon-active" src="~assets/img/tabbar/category(1).png" alt="">
       <div slot="items-text">分类</div>
     </tab-bar-items >
     <tab-bar-items path="/shop">
       <img slot="items-icon" src="~assets/img/tabbar/shop.png" alt="">
       <img slot="items-icon-active" src="~assets/img/tabbar/shop(1).png" alt="">
       <div slot="items-text">购物车</div>
     </tab-bar-items >
     <tab-bar-items path="/user">
       <img slot="items-icon" src="~assets/img/tabbar/user.png" alt="">
       <img slot="items-icon-active" src="~assets/img/tabbar/user(1).png" alt="">
       <div slot="items-text">我的</div>
     </tab-bar-items>


   
    </tab-bar>
</template>

<script>
import TabBar  from 'components/common/tabbar/TabBar'
import TabBarItems from "components/common/tabbar/TabBarItem"

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItems
  }
}
</script>

<style>

</style>