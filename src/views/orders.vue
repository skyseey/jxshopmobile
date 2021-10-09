<!--
 * @Author: your name
 * @Date: 2021-10-08 19:49:47
 * @LastEditTime: 2021-10-09 16:15:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jxshopmobile\src\views\orders.vue
-->
<template>
  <div class="orders">
    <P>购物车</P>
    <img
      src="https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/noCart.png"
      alt=""
    />
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  method: {
    onSubmit: {},
  },
  checked: {},
}
</script>

<style scoped lang="scss">
@import "@/assets/css/common.scss";
.orders {
  p {
    line-height: px2rem(40);
    text-align: center;
  }
  img {
    width: px2rem(129);
    height: px2rem(129);
    margin: px2rem(129) px2rem(129) px2rem(129) px2rem(129);
  }
  .van-submit-bar {
    bottom: 50px;
  }
}
</style>
