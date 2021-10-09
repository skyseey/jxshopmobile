<template>
  <div class="loginTel">
    <!-- header -->
    <van-nav-bar
      class="navbar"
      title="修改登录密码"
      left-text="返回"
      left-arrow
      border:false
      @click-left="$router.go(-1)"
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

      <!-- form -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入新密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="sms"
          center
          clearable
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">获取重置码</van-button>
          </template>
        </van-field>

        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit"
            >重置密码</van-button
          >
        </div>
      </van-form>
      <!-- form -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      sms: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="scss" scoped>
.loginTel {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .navbar {
    color: #333;
    height: 0.45rem;
    width: 100%;
    text-align: center;
  }
  .main {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 1.5rem;
    .image {
      margin-bottom: 0.5rem;
    }
    .icon-weixin1 {
      margin: 0.2rem 0;
    }
  }
}
</style>
