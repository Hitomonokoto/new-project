<template>
  <div class="tablet_navi">
    <div class="logo_area">
      <nuxt-link to="/">
        <img class="logo_img" src="~/assets/mainlogo2.png" alt />
      </nuxt-link>

      <div class="login_area" v-if="!login.token">
        <nuxt-link to="/login">
          <div class="login">ログイン</div>
        </nuxt-link>
        <nuxt-link to="/regist">
          <div class="regist">
            <img class="regist_icon" src="~/assets/naviIcon/beginner.png" alt />
            <p>新規登録</p>
          </div>
        </nuxt-link>
      </div>
    </div>

    <div class="navi_area">
      <nuxt-link class="navi_link" to="/">
        <div class="navi_single">
          <p class="navi_name">HOME</p>
        </div>
      </nuxt-link>

      <nuxt-link class="navi_link" to="/products">
        <div class="navi_single">
          <p class="navi_name">GIFT</p>
        </div>
      </nuxt-link>

      <nuxt-link class="navi_link" to="/farmers">
        <div class="navi_single">
          <p class="navi_name">FARMER</p>
        </div>
      </nuxt-link>
      <nuxt-link class="navi_link" to="/Q&A">
        <div class="navi_single">
          <p class="navi_name">Q&A</p>
        </div>
      </nuxt-link>

      <div class="navi_single mypage" @click="mypage">
        <p class="navi_name">MYPAGE</p>
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
.login {
  color: white;
  background-color: green;
  padding: 5px 50px;
  border-radius: 5px;
  margin-bottom: 5px;
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
.navi_single {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  cursor: pointer;
}
.navi_single:hover {
  background-color: green;
}
.navi_single:hover .navi_name {
  color: white;
}
.mypage {
  width: 20%;
}
.regist {
  display: flex;
  justify-content: center;
  align-items: center;
}
.regist_icon {
  width: 24px;
}
</style>