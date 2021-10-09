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
      <template #content class="content">
        <!-- ##显示图片 -->
        <img
          class="img"
          v-if="active === 0"
          src="@/assets/imgs/Cates1.png"
          alt=""
          style="width:253px;height:111px"
        />
        <img
          class="img"
          v-if="active"
          :src="imgs[active]"
          alt=""
          style="width:253px;height:111px"
        />

        <!-- 分类标题 -->
        <p class="title">
          —<span>{{ items[active].text }}分类</span>—
        </p>

        <!-- ##宫格图片文字 -->
        <van-grid :column-num="3" icon-size="48px">
          <van-grid-item
            v-for="(item, index) in cates[active]"
            :key="index"
            :icon="item.img"
            :text="item.title"
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
      cates: [
        [
          { title: "面部", img: require("@/assets/imgs/Cates1-face.png") },
          { title: "眼部", img: require("@/assets/imgs/Cates1-eye.png") },
          { title: "唇部", img: require("@/assets/imgs/Cates1-chun.png") },
          { title: "彩妆工具", img: require("@/assets/imgs/Cates1-tools.png") },
        ],
        [
          { title: "面部", img: require("@/assets/imgs/Cates1-face.png") },
          { title: "眼部", img: require("@/assets/imgs/Cates1-eye.png") },
          { title: "唇部", img: require("@/assets/imgs/Cates1-chun.png") },
          { title: "彩妆工具", img: require("@/assets/imgs/Cates1-tools.png") },
        ],
        [
          { title: "面部", img: require("@/assets/imgs/Cates1-face.png") },
          { title: "眼部", img: require("@/assets/imgs/Cates1-eye.png") },
          { title: "唇部", img: require("@/assets/imgs/Cates1-chun.png") },
          { title: "彩妆工具", img: require("@/assets/imgs/Cates1-tools.png") },
        ],
        [
          { title: "面部", img: require("@/assets/imgs/Cates1-face.png") },
          { title: "眼部", img: require("@/assets/imgs/Cates1-eye.png") },
          { title: "唇部", img: require("@/assets/imgs/Cates1-chun.png") },
          { title: "彩妆工具", img: require("@/assets/imgs/Cates1-tools.png") },
        ],
        [
          { title: "面部", img: require("@/assets/imgs/Cates1-face.png") },
          { title: "眼部", img: require("@/assets/imgs/Cates1-eye.png") },
          { title: "唇部", img: require("@/assets/imgs/Cates1-chun.png") },
          { title: "彩妆工具", img: require("@/assets/imgs/Cates1-tools.png") },
        ],
        [
          { title: "面部", img: require("@/assets/imgs/Cates1-face.png") },
          { title: "眼部", img: require("@/assets/imgs/Cates1-eye.png") },
          { title: "唇部", img: require("@/assets/imgs/Cates1-chun.png") },
          { title: "彩妆工具", img: require("@/assets/imgs/Cates1-tools.png") },
        ],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.cates {
  .van-tree-select__nav {
    background-color: #fff;
  }
  .img {
    width: pxTorem(253);
    height: pxTorem(111);
  }
  .title {
    width: 100%;
    text-align: center;
    padding: pxTorem(25) 0;

    span {
      font-size: pxTorem(12);
      color: #333;
      padding: 0 pxTorem(5);
    }
  }
}
</style>
