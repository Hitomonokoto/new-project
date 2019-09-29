<template>
  <div class="myData">
    <div class="myData_sticky">
      <div class="myInfo">
        <img :src="$store.state.login.user_2.profile_image" alt />
        <p>{{ $store.state.login.user_2.nickname }}さん</p>
      </div>
      <linkButton cls="type2" linkTo="/user" text="アカウント管理" />
      <basicButton @emitClick="logout">ログアウト</basicButton>
    </div>
  </div>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import basicButton from "~/components/BasicButton";

// その他
import { mapState } from "vuex";
import customerAccessTokenDelete from "~/apollo/gql/customerAccessTokenDelete";

export default {
  components: {
    linkButton,
    basicButton
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
  top: 0;
}
.myInfo {
  display: flex;
  align-items: center;
  margin: 5px 0;
  background-color: aqua;
}
.myInfo > img {
  width: 100px;
  border-radius: 5px;
  margin-right: 5px;
}
</style>