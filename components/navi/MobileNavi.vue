<template>
  <div class="mobile_navi">
    <div class="top_bar">
      <nuxt-link to="/">
        <img class="logo_img" src="~/assets/mainlogo2.png" alt />
      </nuxt-link>

      <div class="login_area" v-if="!login.token">
        <nuxt-link to="/login">
          <div class="login">ログイン</div>
        </nuxt-link>
        <nuxt-link to="/regist">
          <div class="regist">新規登録</div>
        </nuxt-link>
      </div>
    </div>
    <div class="bottom_bar">
      <div class="navi_area">
        <nuxt-link class="navi_link" to="/">
          <img src="~/assets/mobileNaviIcon/home.png" alt />
          <div class="navi_single">HOME</div>
        </nuxt-link>

        <nuxt-link class="navi_link" to="/products">
          <img src="~/assets/mobileNaviIcon/gift.png" alt />
          <div class="navi_single">GIFT</div>
        </nuxt-link>

        <nuxt-link class="navi_link" to="/farmers">
          <img src="~/assets/mobileNaviIcon/farmer.png" alt />
          <div class="navi_single">FARMER</div>
        </nuxt-link>
        <nuxt-link class="navi_link" to="/farmers">
          <img src="~/assets/mobileNaviIcon/Q&A.png" alt />
          <div class="navi_single">Q&A</div>
        </nuxt-link>
        <div class="mypage_link">
          <img src="~/assets/mobileNaviIcon/mypage.png" alt />
          <div class="navi_single mypage" @click="mypage">MYPAGE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";

export default {
  components: {
    linkButton,
    userIcon
  },
  data() {
    return {
      isSubMenu: false
    };
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
    login: state => state.login
  })
};
</script>

<style scoped>
.top_bar {
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 0px 0px 3px #797979;
}
.logo_img {
  height: 40px;
  margin-left: 20px;
}
.login_area {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
}
.login {
  color: white;
  background-color: green;
  padding: 5px 20px;
  border-radius: 5px;
}

.bottom_bar {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  background-color: green;
}
.navi_area {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 0px 3px #797979;
}
.navi_link {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
}
.navi_link > img {
  height: 24px;
  margin-bottom: 5px;
}
.navi_single {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  color: white;
}
.navi_single:hover {
  background-color: green;
  color: white;
}
.mypage_link {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
}
.mypage_link > img {
  height: 24px;
  margin-bottom: 5px;
}
</style>