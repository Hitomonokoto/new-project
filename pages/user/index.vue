<template>
  <main>
    <div class="top_img"></div>
    <div class="profile_area" v-if="isData">
      <div class="xxx">
        <div class="user_icon">
          <div class="icon_edge">
            <userIcon
              cls="user_page_icon"
              :url="$store.state.login.user_2.profile_img"
            />
          </div>
          <basicButton cls="profile_img_edit_btn" @emitClick="editProfileImg">変更</basicButton>
        </div>
        <div class="nickname_area" v-if="!isNickname">
          <div class="nicknameTitle_and_editBotton">
            <p class="nickname_title">ニックネーム</p>
            <basicButton
              cls="nickname_edit_btn"
              @emitClick="editNickname"
            >ニックネームを編集</basicButton>
          </div>
          <p class="nickname">{{ $store.state.login.user_2.nickname }} さん</p>
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
import basicButton from "~/components/BasicButton";
import linkButton from "~/components/LinkButton";
import profileImgEdit from "~/components/user/ProfileImgEdit";
import editNickname from "~/components/user/EditNickname";
import editBasicData from "~/components/user/EditBasicData";
import userIcon from "~/components/UserIcon";

// その他
import getCustomer from "~/apollo/gql/getCustomer";
import customerAccessTokenDelete from "~/apollo/gql/customerAccessTokenDelete";

export default {
  components: {
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
        customerAccessToken: this.$store.state.login.token
      }
    });
    this.$store.commit("login/getUser_1", data.data.customer);
    this.user_data = data.data.customer;
  },
  methods: {
    profileImgEdit() {
      alert("ok");
    },
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
      const xxx = this.$apollo.mutate({
        mutation: customerAccessTokenDelete,
        variables: {
          customerAccessToken: this.$store.state.login.token
        }
      });
      this.$store.commit("login/logout");
      this.$router.push("/");
    }
  },
  watch: {
    user_data() {
      this.isData = true;
    }
  }
};
</script>



<style scoped>
main {
  position: relative;
}
.top_img {
  background-color: lightgray;
  width: 100%;
  height: 500px;
  margin-bottom: 800px;
}
.profile_area {
  position: absolute;
  top: 450px;
  width: 80%;
  margin-bottom: 400px;
}
.xxx {
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;
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
</style>
