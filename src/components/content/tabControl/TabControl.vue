<template>
  <div>
      <div class="TabControl">
          <div v-for="(item,index) in titles" :key="index" 
          class="TabControl-items"
          :class='{active:index==currentIndex}'
          @click="ActiveControl(index)">
              <span>{{item}}</span >
          </div>

      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        },
        
    },
    methods:{
        ActiveControl(index){
            this.currentIndex=index,
            this.$emit("tabClick",index)
        }
    }
}
</script>

<style>
.TabControl{
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    height: 40px;
    background-color: #fff;
}
.TabControl-items{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.active span{
    transition: 0.3s;
    padding-bottom: 4px;
    border-bottom: 2px solid var(--color-high-text);
}


</style>