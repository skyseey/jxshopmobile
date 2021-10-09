// 导入模块
import axios from "axios";
// 实例化
const request = axios.create({
  baseURL: "api",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
});
// 拦截器
request.interceptors.request.use((config) => {
  let token =
    localStorage.getItem("token") || "9201591ba0eb36c8abaea2854274f5082";
  config.headers.token = token;
  return config;
}),
  (error) => {
    return Promise.reject(error);
  };
request.interceptors.response.use((response) => {
  return response.data;
}),
  (error) => {
    return Promise.reject(error);
  };
// 导出request
export default request;
