<template>
  <main>
    <mainImage url="/mainImage/mainDamy1.jpg" />
    <div class="profile_area" v-if="isData">
      <div class="xxx">
        <div class="user_icon">
          <div class="icon_edge">
            <userIcon cls="user_page_icon" :url="login.user_2.user_icon" />
          </div>
          <basicButton cls="user_icon_edit_btn" @emitClick="editProfileImg">変更</basicButton>
        </div>
        <div class="nickname_area" v-if="!isNickname">
          <div class="nicknameTitle_and_editBotton">
            <p class="nickname_title">ニックネーム</p>
            <basicButton
              cls="nickname_edit_btn"
              @emitClick="editNickname"
            >ニックネームを編集</basicButton>
          </div>
          <p class="nickname">{{ login.user_2.nickname }} さん</p>
        </div>

        <editNickname v-if="isNickname" @emitClick="back" />
      </div>
      <div class="yyy">
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
      isData: false,
      isNickname: false,
      isBasicData: false
    };
  },
  async created() {
    const data = await this.$apollo.query({
      query: getCustomer,
      variables: {
        customerAccessToken: this.login.token
      }
    });
    this.$store.commit("login/getUser_1", data.data.customer);
    this.user_data = data.data.customer;
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
          customerAccessToken: this.login.token
        }
      });
      const cookies = new Cookies();
      cookies.remove("token");
      this.$store.commit("login/logout");
      this.$router.push("/");
    }
  },
  computed: mapState({
    login: state => state.login
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
  width: 60%;
  margin-bottom: 400px;
}
.xxx {
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;
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
  top: -50px;
  left: 0;
}
.nickname_area {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 120px;
}
.nicknameTitle_and_editBotton {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.nickname_title {
}
.nickname {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
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
    width: 80%;
  }
  .icon_edge {
    position: absolute;
    top: -40px;
    left: 0;
  }
  .nickname_area {
    margin-left: 90px;
  }
}
@media screen and (max-width: 560px) {
  .profile_area {
    width: 100%;
    padding: 0 10px;
  }
  .icon_edge {
    position: absolute;
    top: -30px;
    left: 0;
  }
  .nickname_area {
    margin-left: 50px;
  }
}
</style>
