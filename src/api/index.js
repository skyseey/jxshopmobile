import request from "./request";

/**
 * 登录
 * @param {Object} params { username: '', password: ''}
 */
export function login(params) {
  return request({
    url: "/users/login",
    method: "post",
    data: params,
  });
}

/**
 * 获取当前用户的信息
 * @param {Object} params { userid, token }
 */
export function getuserinfo(params) {
  return request({
    url: "/users/getuserinfo",
    method: "get",
    params,
  });
}
