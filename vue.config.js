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
  chainWebpack: (config) => {
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");

    // 通过 externals 加载外部CDN资源
    config.set("externals", {
      vue: "Vue",
      echarts: "echarts",
      axios: "axios",
    });
  },
};
