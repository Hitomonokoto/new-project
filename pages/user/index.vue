<template>
  <main>
    <div class="top_img"></div>
    <div class="profile_area" v-if="isData">
      <div class="xxx">
        <div class="profile_img">
          <div class="profile_img_edge">
            <img :src="$store.state.login.user_2.profile_img" alt />
          </div>
          <basicButton
            cls="profile_img_edit_btn"
            @emitClick="editProfileImg"
          >プロフィール画像を変更</basicButton>
        </div>
        <div class="nickname_area" v-if="!isNickname">
          <p class="nickname_title">ニックネーム</p>
          <p class="nickname">{{ $store.state.login.user_2.nickname }} さん</p>
          <basicButton
            cls="nickname_edit_btn"
            @emitClick="editNickname"
          >ニックネームを変更</basicButton>
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
            >基本情報を変更</basicButton>
          </div>
        </div>
        <editBasicData v-if="isBasicData" @emitClick="back" />
      </div>
    </div>
    <linkButton cls="unsub" linkTo="/unsub" text="退会する" />
  </main>
</template>


<script>
import basicButton from "~/components/BasicButton";
import linkButton from "~/components/LinkButton";
import profileImgEdit from "~/components/user/ProfileImgEdit";
import editNickname from "~/components/user/EditNickname";
import editBasicData from "~/components/user/EditBasicData";
import getCustomer from "~/apollo/gql/getCustomer";
export default {
  components: {
    linkButton,
    basicButton,
    profileImgEdit,
    editNickname,
    editBasicData
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
    console.log(data.data.customer);
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
  top: 350px;
  width: 70%;
  margin-bottom: 400px;
}
.xxx {
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;
}
.profile_img {
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile_img_edge {
  background-color: white;
  border-radius: 5px;
}
.profile_img_edge > img {
  display: block;
  border-radius: 5px;
  margin: 5px;
}
.nickname_area {
  width: 100%;
}
.nickname_title {
  margin-bottom: 10px;
}
.nickname {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 24px;
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
  margin-bottom: 20px;
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
