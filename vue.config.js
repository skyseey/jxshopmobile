const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~mock": path.resolve(__dirname, "mock"),
        style: path.resolve(__dirname, "src/style"),
      },
    },
  },
  devServer: {
    proxy: {
      api: {
        target: "http://kg.zhaodashen.cn/mt/admin/",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        pathRewrite: {
          // 重写路径请求
          "^/api": "", //路径重写
        },
      },
      // ....
    },
  },
};
