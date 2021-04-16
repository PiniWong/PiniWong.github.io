<template>
  <div ref="wrapper">
      <div class="connent">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            observeDOM:true,
            click:true
        })
        this.scroll.scrollTo(0,0)
    },
    methods:{
        scrollTo(x,y,time=600){
            this.scroll.scrollTo(x,y,time)
        }
    }
}
</script>

<style>

</style>