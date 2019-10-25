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
      <div class="nickname_area" v-if="!isNickname">
        <div class="nicknameTitle_and_editBotton">
          <p class="nickname_title">ニックネーム</p>
          <basicButton cls="nickname_edit_btn" @emitClick="editNickname">アカウント管理</basicButton>
        </div>
        <p class="nickname">{{ Login.user_2.nickname }} さん</p>
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
      <h2>フォローしている創り手</h2>
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
    </div>

    <basicButton cls="acount_btn" @emitClick="logout">ログアウト</basicButton>
    <linkButton cls="unsub" linkTo="/unsub" text="退会する" />
  </main>
</template>


<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import basicButton from "~/components/BasicButton";
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
    basicButton,
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
}
.xxx {
  display: flex;
  align-items: flex-end;
  /* margin-bottom: 50px; */
  width: 100%;
  position: relative;
}
.user_icon {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon_edge {
  background-color: white;
  border-radius: 5px;
  position: absolute;
  top: -90px;
  left: 20px;
}
.nickname_area {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.nicknameTitle_and_editBotton {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 180px;
}
.nickname {
  font-weight: bold;
  margin-left: 180px;
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
  .icon_edge {
    position: absolute;
    top: -60px;
    left: 20px;
  }
  .nicknameTitle_and_editBotton {
    margin-left: 150px;
    margin-right: 20px;
  }
  .nickname {
    margin-left: 150px;
  }
}
@media screen and (max-width: 560px) {
  .icon_edge {
    position: absolute;
    top: -30px;
  }
  .nicknameTitle_and_editBotton {
    margin-left: 110px;
  }
  .nickname {
    margin-left: 110px;
  }
}

.follower_area {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
@media screen and (max-width: 960px) {
  .follower {
    width: 29.3%;
    margin: 2%;
  }
}
@media screen and (max-width: 560px) {
  .follower_area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
}
</style>
