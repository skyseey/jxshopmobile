<template>
  <div class="loginTel">
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

      <!-- form -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="sms"
          center
          clearable
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" type="primary">发送验证码</van-button>
          </template>
        </van-field>

        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
      <!-- form -->
      <div @click="jump('/login/mb')">验证码快捷登录</div>
      <div class="iconfont icon-weixin1"></div>
      <div>
        <span @click="jump('/changepwd')">找回密码</span>&nbsp;|&nbsp;<span
          @click="jump('/register')"
          >注册账号</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      sms: "",
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
