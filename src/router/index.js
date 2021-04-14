import Vue from "vue"
import VueRouter from "vue-router"
const Home = () =>
    import ('../views/home/home')
const Category = () =>
    import ('../views/category/category')
const Shop = () =>
    import ('../views/shop/shop')
const User = () =>
    import ('../views/user/user')


Vue.use(VueRouter)

const routes = [{
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: Category
    },
    {
        path: "/shop",
        component: Shop
    },
    {
        path: "/user",
        component: User
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router