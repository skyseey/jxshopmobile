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
  {
    path: "/login",
    component: () => import("../views/login/Index.vue"),
  },
  {
    path: "/login/mb",
    component: () => import("../views/login/LoginMb.vue"),
  },
  {
    path: "/login/tel",
    component: () => import("../views/login/LoginTel.vue"),
  },
  {
    path: "/register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/changepwd",
    component: () => import("../views/Changepwd.vue"),
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
