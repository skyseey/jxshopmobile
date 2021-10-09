import Vue from "vue";
import VueRouter from "vue-router";

import Show from "@/views/Show.vue";
import List from "@/views/List.vue";
import Cates from "@/views/Cates.vue";
import Login from "@/views/Login.vue";
import Orders from "@/views/Orders.vue";
import Users from "@/views/Users.vue";

Vue.use(VueRouter);

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
      { path: "/login", component: Login }, //登录页
      { path: "/orders", component: Orders }, //订单
      { path: "/users", component: Users }, //用户
    ],
  },
  // {
  //   path: "/Home1",
  //   name: "Home1",
  //   component: () => import("../views/Home1.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
