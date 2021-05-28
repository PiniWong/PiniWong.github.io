<template>
  <div class="toast" v-show="isshow">
      <div> {{msg}}</div>
  </div>
</template>

<script>
export default {
    name:'toast',
    props:{
        // msg:{
        //     type:String,
        //     default:''
        // },
        // Toastshow:{
        //     type:Boolean,
        //     default:false
        // }
    },
    data(){
        return{
            msg:'',
            isshow:false,
        }
    },
    methods:{
        show(msg='默认文字',duration=2000){
            this.isshow=true,
            this.msg = msg
                setTimeout(()=>{
                    this.isshow =false
                    this.msg=''
                },duration)
        }
    }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 25%;
    z-index: 999;
    width: 200px;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.555);
    text-align: center;
    color: white;
    line-height: 60px;
}

</style>