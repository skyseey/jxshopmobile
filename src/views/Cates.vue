<template>
  <div class="cates">
    <!-- #商品搜索 -->
    <van-search v-model="value" placeholder="商品搜索" input-align="center" />

    <!-- #商品分类 -->
    <van-tree-select
      height="pxTorem(288)"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <img v-if="active === 0" src="@/assets/imgs/Cates1.png" alt="" />
        <img v-if="active" :src="imgs[active]" alt="" />
        <van-grid :column-num="3">
          <van-grid-item
            v-for="value in 6"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 搜索
      value: "",
      // 分类列表
      active: 0,
      imgss: "@/assets/imgs/Cates2.png",
      items: [
        { text: "彩妆精选" },
        { text: "美肤方案" },
        { text: "动人香氛" },
        { text: "明星家族" },
        { text: "畅销榜单" },
        { text: "感恩献礼" },
      ],
      imgs: [
        require("@/assets/imgs/Cates1.png"),
        require("@/assets/imgs/Cates2.png"),
        require("@/assets/imgs/Cates3.png"),
        require("@/assets/imgs/Cates4.png"),
        require("@/assets/imgs/Cates5.png"),
        require("@/assets/imgs/Cates6.png"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.cates {
  img {
    width: pxTorem(263);
    height: pxTorem(111);
  }
}
</style>
