import Vue from "vue"
import VueRouter from "vue-router"

import Show from "@/views/Show.vue"
import List from "@/views/List.vue"
import Cates from "@/views/Cates.vue"
import Orders from "@/views/Orders.vue"
import Users from "@/views/Users.vue"
import Login from "@/views/login/Index.vue"
import LoginTel from "@/views/login/LoginTel.vue"
import LoginMb from "@/views/login/LoginMb.vue"
import Register from "@/views/Register.vue"
import Changepwd from "@/views/Changepwd.vue"

Vue.use(VueRouter)

const routes = [
  //这里添加各自的路由
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      { path: "/show", alias: "/", component: Show }, //首页
      { path: "/list", component: List }, //列表页
      { path: "/cates", component: Cates }, //购物车
      { path: "/login", component: Login }, //登录页
      { path: "/orders", component: Orders }, //订单
      { path: "/users", component: Users }, //用户
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/login/mb",
    component: LoginMb,
  },
  {
    path: "/login/tel",
    component: LoginTel,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/changepwd",
    component: Changepwd,
  },
]

const router = new VueRouter({
  routes,
})

export default router
