import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 配置全局文件&样式
import "@/utils/rem.js";
import "@/utils/filters.js";
import "@/assets/css/reset.scss";

import VueAwesomeSwiper from "vue-awesome-swiper";

// import style
import "swiper/swiper.scss";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

// 全局配置vantUI
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

import { Lazyload } from "vant";

Vue.use(Lazyload);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
