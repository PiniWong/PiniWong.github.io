<template>
  <div id="app" >
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
    <main-tar-bar v-show="showTar"></main-tar-bar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainTarBar from 'components/content/mainTabbar/mainTabbar'

export default {
  name: 'App',
  data(){
    return{
      showTar:true,
    }
  },
  components: {
    MainTarBar
  },
  updated(){
    const path = this.$route.path.substr(0,7)
    // console.log(path);
    if(path == "/detail"){
      console.log("获取detail");
      this.showTar=false
    }else{
      this.showTar=true
    }
    // console.log(this.$route.path);
  }
  
}
</script>

<style>
@import url("./assets/css/base.css");
</style>
