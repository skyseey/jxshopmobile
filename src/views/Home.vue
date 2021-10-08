<template>
  <div class="home">
    <div class="headers">
      <span>JXSHOP</span>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>

    <!-- swiper -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- swiper end -->

    <!-- tip -->
    <p>火线类买中</p>
    <!-- tip end -->
    <!-- hot sell -->
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="value in 10"
        :key="value"
        icon="photo-o"
        text="文字"
        :border="true"
      />
    </van-grid>
    <!-- hot sell end -->

    <!-- 类买品牌 -->
    <div class="hot">类买品牌</div>
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
    </van-grid>
    <!-- 类买品牌 end -->

    <!-- 团购 -->

    <!-- 团购 end -->

    <!-- tabnav -->
    <van-tabbar v-model="active" active-color="#39a9ed">
      <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
    <!-- tabnav end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  .hot {
    width: 100%;
    height: 0.3rem;
    background: #f0f6fd;
  }
  .headers {
    width: 100%;
    height: 0.54rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.1rem;
    span {
      margin-left: 0.5rem;
      font-weight: bold;
      border: 0.05rem double black;
    }
  }

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
