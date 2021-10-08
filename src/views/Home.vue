<template>
  <div class="home">
    <!-- header -->
    <headers></headers>
    <!-- header end -->

    <!-- swiper -->
    <div class="lbt">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          ><img src="@/assets/imgs/swiper1.jpg" alt="loading"
        /></swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide
          ><img src="@/assets/imgs/swiper1.jpg" alt="loading"
        /></swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide
          ><img src="@/assets/imgs/swiper1.jpg" alt="loading"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- swiper end -->

    <!-- 九宫格 -->
    <div class="navall">
      <div class="nav">
        <img src="@/assets/imgs/icon-qiandao.png" alt="" />
        <span>签到</span>
      </div>
      <div class="nav">
        <img src="@/assets/imgs/icon-qiandao.png" alt="" />
        <span>签到</span>
      </div>
      <div class="nav">
        <img src="@/assets/imgs/icon-qiandao.png" alt="" />
        <span>签到</span>
      </div>
      <div class="nav">
        <img src="@/assets/imgs/icon-qiandao.png" alt="" />
        <span>签到</span>
      </div>
      <div class="nav">
        <img src="@/assets/imgs/icon-qiandao.png" alt="" />
        <span>签到</span>
      </div>
      <div class="nav">
        <img src="@/assets/imgs/icon-qiandao.png" alt="" />
        <span>签到</span>
      </div>
      <div class="nav">
        <img src="@/assets/imgs/icon-qiandao.png" alt="" />
        <span>签到</span>
      </div>
      <div class="nav">
        <img src="@/assets/imgs/icon-qiandao.png" alt="" />
        <span>签到</span>
      </div>
    </div>
    <!-- 九宫格 end-->

    <!-- hot sell -->
    <div class="hotsell">
      <div class="header">热买商品</div>
      <!-- main list -->
      <div class="wrapper">
        <ul>
          <li class="list">
            <img
              style="width:0.8rem; height:0.8rem"
              src="@/assets/imgs/zhutu.jpg"
              alt=""
            />
            <div>
              <p>
                哈哈哈啊哈哈我想一个想东西哈哈哈啊哈哈哈哈哈哈
              </p>
              <span style="color:red">$192.00</span>
              <img
                style="width:0.22rem; height:0.22rem;position: absolute; right: 0.1rem;bottom: 0.1rem;"
                src="@/assets/imgs/car.png"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- hot sell end-->
  </div>
</template>

<script>
// 导入头部
import headers from "@/components/Header.vue";
// 导入BScroll
// import BScroll from "better-scroll";
export default {
  // lbt
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);

    // 初始化BScroll
    // this.$nextTic(() => {
    //   let wrapper = document.querySelector(".wrapper");
    //   let scroll = new BScroll(wrapper, {
    //     pullUpLoad: {
    //       threshold: 50,
    //     },
    //   });
    //   // 监控
    //   scroll.on("pullingUp", () => {
    //     console.log("触发上拉刷新啦~~");

    //     // 搞loading  （可以是文字可以是图片）
    //     $(".more").html("加载中...");

    //     // 发送异步请求 （注：通过setTimeout模仿）
    //     setTimeout(() => {
    //       // 1页面显示数据
    //       $(".more").before(`
    //         <li>习近平：推进国家治理体系和能力现代化</li>
    //         <li>习近平对这个问题连说“重话”</li>
    //         <li>国家主席习近平任免驻外大使</li>
    //         <li>重启磋商四大看点  确保主题教育取得实效</li>
    //         <li>这些文物背后的故事令人落泪 经历艰辛 走向胜利</li>
    //         <li>张錩：活态传承，表现当代的中国  泥美人活力与魅力</li>
    //         <li>中美贸易谈判下周重启 中方要求美取消全部加征关税</li>
    //         <li>北上广深平均工资大PK：北京领跑，广深首超10万元</li>
    //         <li>农业农村部：国家正积极推进非洲猪瘟疫苗研发</li>
    //         <li>刚刚！福建向全球自我介绍！</li>
    //         <li>7日17时21分小暑:热浪滚滚"三伏"启 防暑降温纳清凉</li>
    //         <li>租房便宜了 房租连续两季度下降！你的租金减少没？</li>
    //     `);
    //       // 2改more状态
    //       $(".more").html("查看更多");

    //       // 3.切记切记切记：操作完成之后，一定要说一下上拉完毕
    //       scroll.finishPullUp();
    //     }, 3000);
    //   });
    // });
  },

  components: {
    // 头部注册
    headers,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.home {
  width: 100%;
  height: 100%;
  background: #ccc;
  .lbt {
    width: 100%;
    height: pxTorem(150);
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
  }

  .navall {
    background: #ffffff;
    width: 100%;
    height: pxTorem(176);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: pxTorem(10);
    .nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 pxTorem(27);
      span {
        margin-top: pxTorem(11);
      }
      img {
        width: pxTorem(40);
        height: pxTorem(40);
      }
    }
  }

  .hotsell {
    width: 100%;
    height: pxTorem(42);
    background: #ffffff;
    color: #000000;
    font: pxTorem(15) / pxTorem(42) "";
    .header {
      padding-left: pxTorem(15);
    }

    .wrapper {
      width: 100%;
      height: pxTorem(300);
      overflow: hidden;
      ul {
        .list {
          background: #ffffff;
          box-sizing: border-box;
          position: relative;
          display: flex;
          overflow: hidden;
          width: 100%;
          height: pxTorem(100);
          margin: pxTorem(2) 0;
          padding: pxTorem(10);

          div {
            flex: 1;
            box-sizing: border-box;
            padding-left: 0.1rem;
            p {
              width: 2.76rem;
              word-wrap: break-word;
              font: 0.14rem/0.17rem "";
            }
          }
        }
      }
    }
  }
}
</style>
