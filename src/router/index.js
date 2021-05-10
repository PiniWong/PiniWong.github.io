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
    import ('../views/detail/detail')


Vue.use(VueRouter)

const routes = [{
        path: "",
        redirect: "/home",
        meta: {
            title: '首页'
        }
    },
    {
        path: "/home",
        component: Home,
        meta: {
            title: 'MoMO'
        }
    },
    {
        path: "/category",
        component: Category,
        meta: {
            title: '分类'
        }
    },
    {
        path: "/shop",
        component: Shop,
        meta: {
            title: '购物车'
        }
    },
    {
        path: "/user",
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: "/detail/:iid",
        component: Detail,
        meta: {
            title: '商品详情'
        }
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    // console.log(from);
    document.title = to.meta.title
    next()
})

export default router