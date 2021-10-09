/*
 * @Author: your name
 * @Date: 2021-10-08 19:49:47
 * @LastEditTime: 2021-10-09 16:08:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jxshopmobile\src\router\index.js
 */
import Vue from "vue"
import VueRouter from "vue-router"
import Show from "@/views/Show.vue"
import List from "@/views/List.vue"
import Cates from "@/views/Cates.vue"
import Logins from "@/views/Logins.vue"
import Users from "@/views/Users.vue"

Vue.use(VueRouter)

const routes = [
  // 这里添加各自的路由
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      { path: "/show", alias: "/", component: Show }, //首页
      { path: "/list", component: List }, //列表页
      { path: "/cats", component: Cates }, //购物车
      { path: "/logins", component: Logins }, //登录页
      { path: "/orders", component: () => import("@/views/Orders.vue") }, //订单
      { path: "/users", component: Users }, //用户
    ],
  },

  // {
  //   path: "/Home1",
  //   name: "Home1",
  //   component: () => import("../views/Home1.vue"),
  // },
]

const router = new VueRouter({
  routes,
})

export default router
