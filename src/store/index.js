import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutation"
import actions from "./action"
import getters from "./getters"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: [],
        pl: ''
    },
    mutations,
    actions,
    getters,
})

export default store