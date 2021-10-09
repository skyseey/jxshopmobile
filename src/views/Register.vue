<template>
  <div class="loginTel">
    <!-- header -->
    <van-nav-bar
      class="navbar"
      title="注册"
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
          name="用户名"
          placeholder="手机号"
          :rules="[{ required: true, message: '手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
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
        <!-- 邀请码 -->
        <van-field
          v-model="value1"
          name="pattern"
          placeholder="邀请码(非必填)"
        />
        <!-- 验证码 -->
        <div class="validator">
          <van-field
            v-model="value2"
            name="validator"
            placeholder="验证码"
            style="width:50%"
          />
          <img
            src="http://kg.zhaodashen.cn/mt/web/captcha.jsp"
            alt="captcha"
            class="captchaimg"
            ref="captcha"
            @click="changeimgFn"
          />
        </div>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit"
            >注册</van-button
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
      password: "",
      sms: "",
      value1: "",
      value2: "",
    };
  },
  methods: {
    onSubmit() {},
    changeimgFn() {
      this.$refs.captcha.src =
        "http://kg.zhaodashen.cn/mt/web/captcha.jsp?t=" + new Date().getTime();
    },
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
      // width: 0.32rem;
      // height: 0.35rem;
    }
    .validator {
      display: flex;
      justify-content: space-between;
      .captchaimg {
        width: 40%;
        height: 0.45rem;
      }
    }
  }
}
</style>
