<template>
  <div class="login">
    <!-- header -->
    <van-nav-bar
      class="navbar"
      title="登录"
      left-text="返回"
      left-arrow
      border:false
    />
    <!-- header -->
    <div class="main">
      <!-- logo -->
      <div class="image">
        <img
          src="https://ecshop.test2.shopex123.com/images/3f120225c9af541d6ac02589e4c31d89.jpg"
        />
      </div>
      <!-- logo -->

      <!-- login-button -->
      <van-button
        class="loginBtn"
        plain
        hairline
        type="primary"
        size="large"
        color="#9f8286"
        >账号登录</van-button
      >
      <!-- login-button -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .navbar {
    color: #333;
    height: 0.45rem;
    width: 100%;
    text-align: center;
    border: false;
  }
  .main {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .image {
      width: 1.35rem;
      height: 0.4rem;
      margin-bottom: 0.4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .loginBtn {
      height: 0.4rem;
      width: 90%;
    }
  }
}
</style>
