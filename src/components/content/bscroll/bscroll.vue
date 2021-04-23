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
        //监听滚动位置
        if(this.probeType===2||this.probeType===3){
            this.scroll.on("scroll",(position) => {
                // console.log(position);
                this.$emit("scroll",position)
            })
        }
       
        //监听scroll滚动到底部
        if(this.pullUpload){
            this.scroll.on('pullingUp',() => {
                this.$emit("pullingUp")
            })
        }
        
        
        // this.scroll.scrollTo(0,0)
    },
    methods:{
        scrollTo(x,y,time=600){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            console.log('123');
            this.scroll && this.scroll.finishPullUp()
        },
        refresh(){
            // console.log('-----');
            console.log('-----');
            this.scroll && this.scroll.refresh()
            
        }
        
    }
}
</script>

<style>

</style>