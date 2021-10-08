import Vue from "vue";

// 使用
// {{变量}}
// {{变量 | 过滤器名称}}
// 管道前面的数据 默认是第一个形参

Vue.filter("filterFn", (data) => {
  //  <!-- 商品状态 0: 未通过 1: 审核中 2: 已审核 -->
  if (data == 0 || data == null) {
    return "未通过";
  } else if (data == 1) {
    return "审核中";
  } else {
    return "已审核";
  }
});

Vue.filter("formatDateFn", (param) => {
  console.log(param);
});
