<template>
  <div id="app">
    <router-view></router-view>
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
  }
}
</script>

<style>
@import url("./assets/css/base.css");
</style>
