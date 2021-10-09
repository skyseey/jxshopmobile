import axios from "axios";

// 判断当前的运行环境
// isDev 为真 开发环境 --- npm run serve
// isDev 为假 非开发环境（测试环境，生产环境）- npm run build
// const isDev = process.env.NODE_ENV === "development";

const request = axios.create({
  // 根据环境 设置不同的baseURL
  // baseURL: 'http://localhost:3000/api'
  // baseURL: "http://kg.zhaodashen.cn/v1/",
  baseURL: "/api",
});

// 请求拦截器 - 所有的请求开始之前先到此处
request.interceptors.request.use(
  (config) => {
    // 动画、请求token等
    console.log("正在加载....");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器 --- 所有请求的相应先到此处
request.interceptors.response.use(
  (response) => {
    // 动画隐藏、错误统一处理等
    console.log("加载完毕");
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
