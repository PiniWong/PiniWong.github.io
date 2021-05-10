<template>
  <nav-bar>
          <div slot="left" class="backimg" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="NavFlex">
              <div v-for="(items,index) in NaVitems" :key="index" @click="Nav_click(index)" :class="{Nav_active: index == currenindex}">
                  {{items}}
              </div>
          </div>
      </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"

export default {
    props:{
        NaVitems:{
            type:Array,
            default(){
                return[]
            }
        },
        NavindexClick:{
            type:Number
        }
    },
    data(){
        return{
          currenindex:0,
          SwiperImg:""
        }
    },
    updated(){
        if(this.NavindexClick){
                this.currenindex=this.NavindexClick
        }
    },
    components:{
        NavBar
    },
    methods:{
        backClick(){
            this.$router.back()
        },
        Nav_click(index){
            this.currenindex = index
            this.$emit("navClick",index)
        },
    }
    
}
</script>

<style scoped>
.backimg{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}
.NavFlex{
    display: flex;
    justify-content: space-around;
    border-bottom: rgba(0, 0, 0, 0.726);
}
.Nav_active{
    color: var(--color-high-text);
}
</style>