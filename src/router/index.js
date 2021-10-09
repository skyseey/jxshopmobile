/*
 * @Author: your name
 * @Date: 2021-10-08 19:49:47
 * @LastEditTime: 2021-10-09 09:50:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jxshopmobile\src\router\index.js
 */
import Vue from "vue"
import VueRouter from "vue-router"
import list from "../views/list.vue"
import orders from "../views/orders.vue"

Vue.use(VueRouter)

const routes = [
  // 这里添加各自的路由
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/list.vue"),
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("../views/orders.vue"),
  },
  // {
  //   path: "/Home1",
  //   name: "Home1",
  //   component: () => import("../views/Home1.vue"),
  // },
]

const router = new VueRouter({
  routes,
  list,
  orders,
})

export default router
