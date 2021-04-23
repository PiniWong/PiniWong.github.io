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
const Detail = () => 
   import('../views/detail/detail')


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
    },
    {
        path: "/detail/:iid",
        component: Detail
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router