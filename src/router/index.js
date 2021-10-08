import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 这里添加各自的路由
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  // 分类列表
  {
    path: "/cates",
    name: "Cates",
    component: () => import("../views/Cates.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
