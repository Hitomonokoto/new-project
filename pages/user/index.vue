<template>
  <main>
    <mainImage :url="image_path" />
    <div class="profile_area" v-if="isData">
      <div class="xxx">
        <div class="user_icon">
          <div class="icon_edge">
            <userIcon cls="user_page_icon" :url="Login.user_2.user_icon" />
          </div>
        </div>
      </div>
      <div class="mypage_header" v-if="!isNickname">
        <p class="nickname">{{ Login.user_2.nickname }} さん</p>
        <div class="mail_and_menu">
          <span class="mail_area">
            <iconAndTextButton cls="mail" :text="null" icon="mail_gry" />
          </span>
          <span class="menu_area">
            <iconAndTextButton cls="menu" :text="null" icon="menu_gry" />
          </span>

          <!-- <basicButton cls="acount_btn" @emitClick="editNickname">アカウント管理</basicButton> -->
        </div>
      </div>

      <editNickname v-if="isNickname" @emitClick="back" />

      <!-- <div class="yyy">
        <p class="basic_info_title">基本情報</p>
        <div class="basic_info_area" v-if="!isBasicData">
          <div>
            <dl>
              <dt>名前</dt>
              <dd>
                <p>{{ user_data.lastName }} {{ user_data.firstName }}</p>
              </dd>
            </dl>
            <dl>
              <dt>メールアドレス</dt>
              <dd>
                <p>{{ user_data.email }}</p>
              </dd>
            </dl>
          </div>
          <div class="action">
            <basicButton
              cls="basic_info_edit_btn"
              @emitClick="editBasicData"
            >基本情報を編集</basicButton>
          </div>
        </div>
        <editBasicData v-if="isBasicData" @emitClick="back" />
      </div>-->
    </div>
    <div class="follower_area">
      <h2 class="follower_title">フォローしている創り手</h2>
      <div class="follower_list">
        <nuxt-link
          v-for="(follower, index) in Farmers.followerData"
          :to="'/farmers/farmer/'+follower.sys.id"
          class="follower"
          :key="index"
        >
          <img
            class="follow_img"
            :src="follower.fields.farmerIcon.fields.file.url"
          />
          <p class="follow_name">{{ follower.fields.farmName }}</p>
        </nuxt-link>
      </div>
      <div class="no_follower" v-if="!Farmers.followerData.length">
        <p class="no_follower_text">
          フォローしている創り手がいません。
          <br />お気に入りの創り手をフォローして繋がりましょう。
        </p>
        <linkButton cls="farmer_search" linkTo="/farmers" text="創り手を探す" />
      </div>
    </div>

    <basicButton cls="logout_btn" @emitClick="logout">ログアウト</basicButton>
    <!-- <linkButton cls="unsub" linkTo="/unsub" text="退会する" /> -->
  </main>
</template>


<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import linkButton from "~/components/LinkButton";
import profileImgEdit from "~/components/user/ProfileImgEdit";
import editNickname from "~/components/user/EditNickname";
import editBasicData from "~/components/user/EditBasicData";
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
    profileImgEdit,
    editNickname,
    editBasicData,
    userIcon
  },
  data() {
    return {
      user_data: {},
      image_path: null,
      isData: false,
      isNickname: false,
      isBasicData: false
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
    editProfileImg() {
      alert("プロフィール画像の変更は未実装です");
    },
    editNickname() {
      this.isNickname = true;
      this.isBasicData = false;
    },
    editBasicData() {
      this.isBasicData = true;
      this.isNickname = false;
    },
    back() {
      this.isNickname = false;
      this.isBasicData = false;
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
  background-color: white;
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
.basic_info_title {
  margin-bottom: 20px;
  font-size: 20px;
}
.basic_info_area {
  display: flex;
}
dl {
  display: flex;
  margin-bottom: 10px;
}
dt {
  width: 150px;
}
.action {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
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

.follower_area {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
.follower_list {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
.follower {
  width: 21%;
  margin: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.follow_img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
.no_follower {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.no_follower_text {
  text-align: center;
  font-size: 14px;
  margin-bottom: 30px;
}
@media screen and (max-width: 960px) {
  .follower_list {
    width: 95%;
  }
  .follower {
    width: 29.3%;
    margin: 2%;
  }
}
@media screen and (max-width: 560px) {
  .follower_area {
    width: 95%;
  }
  .follower {
    width: 46%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .follow_img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 6px #d1d1d1;
  }
}
</style>
