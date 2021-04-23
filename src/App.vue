<template>
  <div id="app" >
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainTarBar from 'components/content/mainTabbar/mainTabbar'

export default {
  name: 'App',
  components: {
    MainTarBar
  },
  
}
</script>

<style>
@import url("./assets/css/base.css");
</style>
