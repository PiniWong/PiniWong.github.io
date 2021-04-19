<template>
  <div ref="wrapper">
      <div class="connent">
        <slot></slot>
      </div>
  </div>
</template>

<script>
    import BScroll from "better-scroll"
    import Pullup from "@better-scroll/pull-up"
    BScroll.use(Pullup)

export default {
    data(){
        return{
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpload:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            observeDOM:true,
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpload
        })
        this.scroll.on("scroll",(position) => {
            // console.log(position);
            this.$emit("scroll",position)
        })
        this.scroll.on('pullingUp',() => {
            this.$emit("pullingUp")
        })
        
        // this.scroll.scrollTo(0,0)
    },
    methods:{
        scrollTo(x,y,time=600){
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        }
        
    }
}
</script>

<style>

</style>