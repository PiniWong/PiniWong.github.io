// import { reject, resolve } from "core-js/fn/promise"
import {
    ADD_COUNTER,
    ADD_TO_CART
} from "./mutation-types"


export default {
    addCart(context, payload) {
        return new Promise((resolve,reject)=>{
            const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                // oldProduct.conut += 1
                context.commit(ADD_COUNTER, oldProduct)
                resolve('当前商品+1')
            } else {
                payload.count = 1
                    // context.state.cartList.push(payload)
                context.commit(ADD_TO_CART, payload)
                resolve('当前添加商品')
            }
            reject('132')
            

        })
        
    },
    subCart(context, payload) {
        // console.log(payload);
        context.Proiid=payload
        const subIndex = context.state.cartList.findIndex(item => item.iid === payload)
        // console.log(subIndex);
        context.state.cartList.splice(subIndex, 1)
            //     const subProduct = context.state.cartList.find(item => item.iid == payload.iid)
            // console.log(subProduct);
            // if (subProduct) {
            //     payload.conut--
            // }
    }
}