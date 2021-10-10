import request from "./request";

// /**
//  *首页
//  * @param {Object} params { username: '', password: ''}
//  */
// export function getIndexApi(params) {
//   return request({
//     url: "/users/login",
//     method: "get",
//     params,
//   });
// }

// /**
//  * 热买
//  * @param {Object} params { userid, token }
//  */
// export function gethotsellApi(params) {
//   return request({
//     url: "/users/getuserinfo",
//     method: "get",
//     params,
//   });
// } //kg.zhaodashen.cn/v1/goods/like.jsp

export const gethotsellApi = (params) => {
  return request({
    url: "/goods/like.jsp",
    method: "get",
    params,
  });
};
// 分类
export const getCatesApi = (params) => {
  return request({
    url: "/category/index.jsp",
    method: "get",
    params,
  });
};
