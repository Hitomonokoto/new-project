<template>
  <main>
    <mainImage cls="basic" :url="image_path" />
    <div class="profile_area" v-if="isData">
      <div class="xxx">
        <div class="user_icon">
          <div class="icon_edge">
            <userIcon cls="user_page_icon" :url="Login.user_2.user_icon" />
          </div>
        </div>
      </div>
      <div class="mypage_header">
        <p class="nickname">{{ Login.user_2.nickname }} さん</p>
        <div class="mail_and_menu">
          <span class="mail_area">
            <iconAndTextButton cls="mail" :text="null" icon="mail_gry" />
          </span>
          <span class="menu_area" @click="menu">
            <iconAndTextButton cls="menu" :text="null" icon="menu_gry" />
          </span>
        </div>
      </div>
    </div>

    <div class="mypage_menu_area">
      <mypageMenu v-if="isMenu" @emitEditProfile="editProfile" />
    </div>
    <profileData v-if="isProfileData" :user_data="user_data" />
    <follower v-if="isFollower" />
    <basicButton cls="logout_btn" @emitClick="logout">ログアウト</basicButton>
  </main>
</template>


<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import linkButton from "~/components/LinkButton";
import mypageMenu from "~/components/user/MypageMenu";
import follower from "~/components/user/Follower";
import profileData from "~/components/user/ProfileData";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";
import getCustomer from "~/apollo/gql/getCustomer";
import customerAccessTokenDelete from "~/apollo/gql/customerAccessTokenDelete";
import Cookies from "universal-cookie";

export default {
  components: {
    mainImage,
    linkButton,
    mypageMenu,
    follower,
    profileData,
    userIcon
  },
  data() {
    return {
      user_data: {},
      image_path: null,
      isProfileData: false,
      isFollower: true,
      isData: false,
      isMenu: false
    };
  },
  async created() {
    const r = Math.floor(Math.random() * 5) + 1;
    this.image_path = `/mypageImage/${r}.jpg`;
    const data = await this.$apollo.query({
      query: getCustomer,
      variables: {
        customerAccessToken: this.Login.token
      }
    });
    this.$store.commit("login/getUser_1", data.data.customer);
    this.user_data = data.data.customer;
    this.$store.dispatch(
      "farmers/getFollowerAction",
      this.Login.user_2.user_id
    );
  },
  methods: {
    editProfile() {
      this.isProfileData = true;
      this.isFollower = false;
      this.isMenu = false;
    },
    back() {
      // this.isNickname = false;
      // this.isBasicData = false;
    },
    logout() {
      this.isData = false;
      const xxx = this.$apollo.mutate({
        mutation: customerAccessTokenDelete,
        variables: {
          customerAccessToken: this.Login.token
        }
      });
      const cookies = new Cookies();
      cookies.remove("token");
      this.$store.commit("login/logout");
      this.$router.push("/");
    },
    menu() {
      if (!this.isMenu) {
        this.isMenu = true;
      } else {
        this.isMenu = false;
      }
    }
  },
  computed: mapState({
    Login: state => state.login,
    Farmers: state => state.farmers
  }),
  watch: {
    user_data() {
      this.isData = true;
    }
  },
  head() {
    return {
      title: "マイページ | ショクタメ"
    };
  }
};
</script>



<style scoped>
.profile_area {
  width: 80%;
  display: flex;
  margin-bottom: 50px;
}
.xxx {
  display: flex;
  width: 150px;
}
.user_icon {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.icon_edge {
  background-color: rgb(255, 255, 250);
  border-radius: 5px;
  position: absolute;
  top: -90px;
  left: 20px;
}
.mypage_header {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.mail_and_menu {
  display: flex;
  margin-right: 20px;
}
.mail_area {
  margin-right: 10px;
}
.nickname {
  font-weight: bold;
  margin-bottom: 20px;
}

.mypage_menu_area {
  width: 80%;
  position: relative;
}
@media screen and (max-width: 960px) {
  .profile_area {
    width: 100%;
  }
  .xxx {
    width: 150px;
  }
  .icon_edge {
    position: absolute;
    top: -80px;
  }
  .mypage_header {
    margin-top: 10px;
  }
}
@media screen and (max-width: 560px) {
  .xxx {
    width: 90px;
  }
  .icon_edge {
    position: absolute;
    top: -20px;
  }
}
</style>
