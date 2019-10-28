<template>
  <div class="pc_navi">
    <div class="logo_area">
      <nuxt-link to="/">
        <img class="logo_img" src="~/assets/mainlogo2.png" alt />
      </nuxt-link>
    </div>

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
      <div class="navi_link" @click="mypage">
        <naviSingle icon_b="mypage_b" icon_w="mypage_w" text="MYPAGE" />
      </div>
    </div>

    <div class="login_area" v-if="!login.token">
      <nuxt-link to="/login">
        <iconAndTextButton cls="login" text="ログイン" icon="login_w" />
      </nuxt-link>
      <nuxt-link to="/regist">
        <iconAndTextButton cls="regist" text="新規登録" icon="beginner_p" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// コンポーネント
import naviSingle from "~/components/naviSingle";

// その他
import { mapState } from "vuex";

export default {
  components: { naviSingle },
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
  background-color: rgb(255, 255, 250);
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
.login_area {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>