<template>
<div  class="tabbar-items" @click="itemClick">
    <div v-if="!isActive"><slot  name="items-icon"></slot> </div>
    <div v-else><slot  name="items-icon-active"></slot></div>
    <div :style="ActiveStyle"><slot name="items-text"></slot></div>

</div>
    
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        ActiveColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:true,
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        ActiveStyle(){
            return this.isActive ? {color:this.ActiveColor}:{}
        }
    },
    methods:{
        itemClick(){
            if(this.$route.path!=this.path){
            this.$router.replace(this.path)

            }
        }
    }
}
</script>

<style>
.tabbar-items{
    flex: 1;
    text-align: center;
    height:49px;
    font-size: 13px;
}
.tabbar-items img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
}
</style>