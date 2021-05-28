import Vue from "vue"
import Toast from "./toast"
const obj={}
obj.install = function(){
    
    // Vue.prototype.$toast
    //1.创建组件构造器
    const toastContrustor = Vue.extend(Toast)
    //2.new的方法，根据组件构造器，可以创建出来应该组件对象
    const toast = new toastContrustor
    //3.将组件对象，手动的挂载到某一个元素上面
    toast.$mount(document.createElement('div'))
    //4.totast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast=toast
}
export default obj