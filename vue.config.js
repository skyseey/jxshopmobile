const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~": path.resolve(__dirname, "src"),
        style: path.resolve(__dirname, "src/style"),
      },
    },
  },
  devServer: {
    proxy: {
      任意名称: {
        target: "http://kg.zhaodashen.cn/v1/",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        pathRewrite: {
          // 重写路径请求
          "^/任意名称": "", //路径重写
        },
      },
      // ....
    },
  },
};
