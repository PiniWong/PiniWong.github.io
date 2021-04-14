<template>
  <div class="recommends">
      <div class="recomendsView" v-for="(items,index) in recommends" :key="index">
          <a :href="items.link">
              <img :src="items.image" alt="">
              <div>{{items.title}}</div>
          </a>
      </div>
  </div>

</template>

<script>
export default {
    data(){
        return{}
    },
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        },
    },
    components:{

    }
}
</script>

<style>
.recommends{
    display: flex;
    text-align: center;
    margin-top: 5px;
    font-size: 10px ;
    padding:5px 0  15px 0;
    border-bottom: 8px solid #eee;
}
.recomendsView{
    flex: 1;
}
.recomendsView img{
    width: 65px;
    margin-bottom: 3px;
    height: 65px;
}
</style>