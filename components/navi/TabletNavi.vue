<template>
  <div class="tablet_navi">
    <div class="logo_area">
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
  </div>
</template>

<script>
// コンポーネント
import naviSingle from "~/components/naviSingle";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";
export default {
  components: {
    naviSingle,
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
p {
  color: black;
}
.tablet_navi {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}
.logo_area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
}
.logo_img {
  height: 60px;
  margin-left: 20px;
}
.login_area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
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