// 导入request.js qs
import request from "./request";
import qs from "qs";
// 导出方法 推荐方法名 http请求动词+模块名+api
// ##分类列表
export const getCatesApi = (params) => {
  return request({
    url: "/category/index.jsp",
    method: "get",
    params,
  });
};
// ##分类创建
export const postCatesApi = (postData) => {
  return request({
    url: "/cate/create.jsp",
    method: "post",
    data: qs.stringify(postData),
  });
};
// ##分类删除
export const deleteCatesApi = (params) => {
  return request({
    url: "/cate/delete.jsp",
    method: "delete",
    params,
  });
};
// ##分类编辑
export const putCatesEditApi = (putData) => {
  return request({
    url: "/cate/update.jsp",
    method: "put",
    data: qs.stringify(putData),
  });
};
