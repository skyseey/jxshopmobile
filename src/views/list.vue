<!--
 * @Author: your name
 * @Date: 2021-10-08 19:49:47
 * @LastEditTime: 2021-10-09 14:55:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jxshopmobile\src\views\list.vue
-->
<template>
  <div class="list">
    <p>文章列表</p>
    <div>
      <img
        src="https://ecshop.test2.shopex123.com/data/article/1611883432219493951.jpg"
        alt=""
      />
      <p>升级版花瓣沐浴露，屈臣氏首发上市啦！</p>
    </div>
    <div>
      <img
        src="https://ecshop.test2.shopex123.com/data/article/1596681084055066633.jpg"
        alt=""
      />
      <p>重磅新品 限时劲省48</p>
    </div>
    <div>
      <img
        src="https://ecshop.test2.shopex123.com/data/article/1614752665247732388.jpg"
        alt=""
      />
      <p>联系我们</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import "@/assets/css/common.scss";
.list {
  p {
    height: px2rem(40);
    line-height: px2rem(40);
    text-align: center;
  }
  img {
    width: 100%;
    height: px2rem(260);
  }
}
</style>
