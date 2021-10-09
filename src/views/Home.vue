<template>
  <div class="nav">
    <router-view></router-view>
    <!-- tabnav -->
    <van-tabbar v-model="active" active-color="#39a9ed">
      <van-tabbar-item name="home" icon="home-o" @click="indexFn"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="search" icon="search" @click="catesFn"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item name="friends" icon="friends-o" @click="orderFn"
        >订单</van-tabbar-item
      >
      <van-tabbar-item name="setting" icon="setting-o" @click="MyFn"
        >我的</van-tabbar-item
      >
    </van-tabbar>
    <!-- tabnav end -->
  </div>
</template>

<script>
export default {
  // 模型数据
  data() {
    return {
      active: "home",
      value: "",
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  // 方法
  methods: {
    // 首页
    indexFn() {
      console.log(9999);
    },
    // 购物车
    catesFn() {
      console.log(9999);
    },
    // 订单
    orderFn() {
      console.log(9999);
    },
    // 我的
    MyFn() {
      console.log(9999);
    },
  },
};
</script>

<style lang="scss" scoped></style>
