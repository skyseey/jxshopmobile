<template>
  <div class="home">
    <div class="headers">
      <span>JXSHOP</span>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>

    <!-- swiper -->
    <div class="Swipper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- swiper end -->

    <!-- tip -->
    <p
      style="
    width: 100%;
    height: 0.3rem;
    background: #f0f6fd;
    line-height: 0.3rem;
    box-sizing: border-box;
    padding-left: 0.1rem;
    font-size: 0.15rem;
  "
    >
      火线类买中
    </p>
    <!-- tip end -->
    <!-- hot sell -->
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="(item, index) in hotimgs"
        :key="index"
        :icon="item.img"
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
    <div class="group">
      <div class="grouptitle">
        <div class="title">新品首发</div>
        <div class="right">查看更多<span class="icon"></span></div>
      </div>
      <div class="list">
        <ul>
          <li>
            <img
              src="https://ecshop.test2.shopex123.com/images/202109/thumb_img/434_thumb_G_1631676051308.jpg"
              alt=""
            /><span
              >b06b06b06b06b06b06b3b03b03b1111111111111111111111111111111111111111111</span
            >
            <p class="price">￥11<span class="del">16.50</span></p>
            <!----><!---->
          </li>
          <li>
            <img
              src="https://ecshop.test2.shopex123.com/images/d5bfdff58bcbb6ea4a646ff63631ecb6.jpg"
              alt=""
            /><span>b04</span>
            <p class="price">￥0<span class="del">0.00</span></p>
            <!----><!---->
          </li>
          <li>
            <img
              src="https://ecshop.test2.shopex123.com/images/d5bfdff58bcbb6ea4a646ff63631ecb6.jpg"
              alt=""
            /><span
              >b03b03b03b03b03b03b03b03b03b03b03b1111111111111111111111111111111111111111111</span
            >
            <p class="price">￥44<span class="del">66.00</span></p>
            <!----><!---->
          </li>
          <li>
            <img
              src="https://ecshop.test2.shopex123.com/images/202101/thumb_img/225_thumb_G_1609896811129.jpg"
              alt=""
            /><span
              >l新年礼物lAERIN雅芮明星香氛礼盒3支装香水女士持久淡香清新</span
            >
            <p class="price">￥1000<span class="del">1500.00</span></p>
            <!----><!---->
          </li>
          <li>
            <img
              src="https://ecshop.test2.shopex123.com/images/202101/thumb_img/153_thumb_G_1611037082640.jpg"
              alt=""
            /><span>innisfree悦诗风吟果感水唇彩唇釉滋润复古砖红色</span>
            <p class="price">￥10.00<span class="del">136.50</span></p>
            <!----><!---->
          </li>
          <li>
            <img
              src="https://ecshop.test2.shopex123.com/images/202101/thumb_img/237_thumb_G_1611563064499.jpg"
              alt=""
            /><span>资生堂盼丽风姿三件套乳霜和精华液和眼霜</span>
            <p class="price">￥1000<span class="del">1500.00</span></p>
            <!----><!---->
          </li>
        </ul>
      </div>
    </div>
    <!-- 团购 end -->

    <!-- 底部标准-->
    <div class="company">
      <div class="owner">沪ICP备05002918号</div>
      <div class="licence">商派软件有限公司</div>
    </div>
    <!-- 底部标准 end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
      value: "",
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      hotimgs: [
        { id: "1", img: require("@/assets/logo.png") },
        { id: "2", img: "https://img01.yzcdn.cn/vant/cat.jpeg" },
        { id: "3", img: "https://img01.yzcdn.cn/vant/cat.jpeg" },
        { id: "4", img: "https://img01.yzcdn.cn/vant/cat.jpeg" },
        { id: "5", img: "https://img01.yzcdn.cn/vant/cat.jpeg" },
        { id: "6", img: "https://img01.yzcdn.cn/vant/cat.jpeg" },
        { id: "7", img: "https://img01.yzcdn.cn/vant/cat.jpeg" },
        { id: "8", img: "https://img01.yzcdn.cn/vant/cat.jpeg" },
        { id: "9", img: "https://img01.yzcdn.cn/vant/cat.jpeg" },
        { id: "10", img: "https://img01.yzcdn.cn/vant/cat.jpeg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .Swipper {
    width: 100%;
    height: 1.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .van-swipe {
    height: 100%;
  }
  .hot {
    width: 100%;
    height: 0.3rem;
    background: #f0f6fd;
    line-height: 0.3rem;
    box-sizing: border-box;
    padding-left: 0.1rem;
    font-size: 0.15rem;
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

  .group {
    width: 100%;
    .grouptitle {
      width: 100%;
      height: 0.3rem;
      background: #f0f6fd;
      display: flex;
      justify-content: space-between;
      line-height: 0.3rem;
      box-sizing: border-box;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      font-size: 0.15rem;
      .right {
        width: 1rem;
        background: url(https://res.jinjiajin.net/vue-wx/images/right.png)
          no-repeat;
        background-size: 0.2rem 0.2rem;
        background-position-x: 0.7rem;
        background-position-y: 0.03rem;
      }
    }
    .list {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 0 0.1rem;
        overflow: hidden;
        li {
          width: 1.15rem;
          margin-top: 0.1rem;
          .price {
            color: red;
            .del {
              color: slategrey;
              text-decoration: line-through;
            }
          }
          span {
            display: block;
            width: 1.13rem;
            height: 0.32rem;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          img {
            width: 1.15rem;
            height: 1.15rem;
            border-radius: 0.1rem;
          }
        }
      }
    }
  }

  .company {
    display: block;
    margin: 0 auto;
    padding: 15px 0;
    background: #ffff;
    .owner {
      text-align: center;
    }
    .licence {
      text-align: center;
    }
  }
}
</style>
