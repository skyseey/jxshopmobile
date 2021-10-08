<template>
  <div class="Home1">
    <!-- 标题 -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 标题 end -->
    <!-- lbt -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- lbt end -->
    <!-- grid -->
    <van-grid square>
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <!-- grid end-->

    <!-- list -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-card
          v-for="item in list"
          :key="item"
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
      </van-list>
    </van-pull-refresh>
    <!-- list end -->

    <!-- tabbar -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
    <!-- tabbar end -->
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    showloading() {
      // 每次刷新都调用一下提示
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 0, //持续时间
      });
    },

    onLoad() {
      this.showloading();
      setTimeout(() => {
        Toast.clear();
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      this.showloading();
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style lang="scss" scoped>
.Home1 {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
