<template>
  <div class="myData">
    <div class="myData_sticky">
      <div class="myInfo">
        <userIcon
          cls="mydata_icon"
          :url="$store.state.login.user_2.profile_img"
        />
        <div>
          <p>こんにちは！</p>
          <p>{{ $store.state.login.user_2.nickname }}さん</p>
        </div>
      </div>
      <div class="actions">
        <linkButton cls="acount" linkTo="/user" text="アカウント管理" />
        <basicButton cls="acount_btn" @emitClick="logout">ログアウト</basicButton>
      </div>
    </div>
  </div>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import basicButton from "~/components/BasicButton";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";
import customerAccessTokenDelete from "~/apollo/gql/customerAccessTokenDelete";

export default {
  components: {
    linkButton,
    basicButton,
    userIcon
  },
  methods: {
    async logout() {
      const xxx = await this.$apollo.mutate({
        mutation: customerAccessTokenDelete,
        variables: {
          customerAccessToken: this.$store.state.login.token
        }
      });
      this.$store.commit("login/logout");
      this.$emit("pageInit");
    }
  },
  computed: mapState({ shopify: "shopify" })
};
</script>

<style scoped>
.myData {
  width: 380px;
  height: 100%;
  margin-top: 10px;
}
.myData_sticky {
  position: sticky;
  top: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.myInfo {
  display: flex;
  align-items: center;
  margin: 5px 0;
}
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>