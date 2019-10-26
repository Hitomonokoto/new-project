<template>
  <div class="mobile_navi">
    <div class="top_bar">
      <nuxt-link to="/">
        <img class="logo_img" src="~/assets/mainlogo2.png" alt />
      </nuxt-link>

      <div class="login_area" v-if="!login.token">
        <nuxt-link to="/login">
          <iconAndTextButton cls="login" text="ログイン" icon="login_w" />
        </nuxt-link>
        <nuxt-link to="/regist">
          <iconAndTextButton cls="regist" text="新規登録" icon="beginner_p" />
        </nuxt-link>
      </div>
    </div>
    <div class="bottom_bar">
      <div class="navi_area">
        <nuxt-link class="navi_link" to="/">
          <naviSingle icon_b="home_b" icon_w="home_w" text="HOME" />
        </nuxt-link>

        <nuxt-link class="navi_link" to="/products">
          <naviSingle icon_b="gift_b" icon_w="gift_w" text="GIFT" />
        </nuxt-link>

        <nuxt-link class="navi_link" to="/farmers">
          <naviSingle icon_b="farmer_b" icon_w="farmer_w" text="FARMER" />
        </nuxt-link>
        <nuxt-link class="navi_link" to="/Q&A">
          <naviSingle icon_b="question_b" icon_w="question_w" text="Q&A" />
        </nuxt-link>
        <div class="navi_link">
          <naviSingle icon_b="mypage_b" icon_w="mypage_w" text="MYPAGE" />
        </div>
        <!-- <div class="mypage_link">
          <img src="~/assets/naviIcon/mypage_b.svg" alt />
          <div class="navi_single mypage" @click="mypage">MYPAGE</div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
// コンポーネント
import iconAndTextButton from "~/components/IconAndTextButton";
import naviSingle from "~/components/naviSingle";
import linkButton from "~/components/LinkButton";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";

export default {
  components: {
    iconAndTextButton,
    naviSingle,
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
  margin-left: 5px;
}
.login_area {
  display: flex;
  align-items: center;
  margin-right: 5px;
}
.bottom_bar {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  background-color: white;
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
}
</style>