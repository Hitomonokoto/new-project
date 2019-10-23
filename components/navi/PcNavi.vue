<template>
  <div class="pc_navi">
    <div class="logo_area">
      <nuxt-link to="/">
        <img class="logo_img" src="~/assets/mainlogo2.png" alt />
      </nuxt-link>
    </div>

    <div class="navi_area">
      <nuxt-link class="navi_link" to="/">
        <div class="navi_single">
          <img class="navi_icon" src="~/assets/naviIcon/home.png" alt />HOME
        </div>
      </nuxt-link>
      <nuxt-link class="navi_link" to="/products">
        <div class="navi_single">
          <img class="navi_icon" src="~/assets/naviIcon/gift.png" alt />GIFT
        </div>
      </nuxt-link>
      <nuxt-link class="navi_link" to="/farmers">
        <div class="navi_single">
          <img class="navi_icon" src="~/assets/naviIcon/farmer.png" alt />FARMER
        </div>
      </nuxt-link>
      <nuxt-link class="navi_link" to="/farmers">
        <div class="navi_single">
          <img class="navi_icon" src="~/assets/naviIcon/Q&A.png" alt />Q&A
        </div>
      </nuxt-link>
      <div class="navi_single" @click="mypage">
        <img class="navi_icon" src="~/assets/naviIcon/mypage.png" alt />MYPAGE
      </div>
    </div>

    <div class="login_area" v-if="!login.token">
      <nuxt-link to="/login">
        <div class="login">ログイン</div>
      </nuxt-link>
      <nuxt-link to="/regist">
        <div class="regist">新規登録</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// その他
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    mypage() {
      if (this.login.token) {
        this.$router.push("/user");
      } else {
        this.$router.push("/login");
      }
    }
  },
  computed: mapState({
    products: state => state.products,
    login: state => state.login,
    timeline: state => state.timeline
  })
};
</script>

<style scoped>
.pc_navi {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100vh;
  box-shadow: 0px 0px 3px #797979;
}
.logo_img {
  height: 80px;
  display: block;
  margin: 30px 0 60px 0;
}
.navi_area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
}
.navi_link {
  width: 100%;
}
.navi_single {
  cursor: pointer;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.navi_single:hover {
  background-color: green;
  color: white;
}
.login_area {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login {
  color: white;
  background-color: green;
  padding: 5px 20px;
  border-radius: 5px;
}
.navi_icon {
  width: 24px;
  margin-left: 50px;
  margin-right: 10px;
}
</style>