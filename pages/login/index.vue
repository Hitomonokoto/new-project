<template>
  <main>
    <div class="logo">
      <img src="~/assets/mainlogo1.png" alt />
    </div>

    <basicInput
      v-model="input.email"
      cls="login"
      type="text"
      placeholder="メールアドレス"
    />
    <basicInput
      v-model="input.password"
      cls="login"
      type="password"
      placeholder="パスワード"
    />
    <basicButton class="login_btn" @emitClick="save">ログイン</basicButton>

    <!-- <linkButton
      cls="foget_pass_btn"
      linkTo="/login/passWordReset"
      text="パスワードをお忘れの方はこちら"
    />-->
    <span class="foget_pass_btn" @click="passWordReset">パスワードをお忘れの方はこちら</span>

    <linkButton cls="regist_btn" linkTo="/regist" text="新規登録" />
  </main>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import basicInput from "~/components/BasicInput";

// その他
import customerAccessTokenCreate from "~/apollo/gql/customerAccessTokenCreate";
import getCustomer from "~/apollo/gql/getCustomer";
import Cookies from "universal-cookie";

export default {
  components: { linkButton, basicInput },
  data: () => ({
    input: {
      email: null,
      password: null
    }
  }),
  methods: {
    save() {
      this.login(this.input);
    },
    async login({ email, password }) {
      const xxx = await this.$apollo.mutate({
        mutation: customerAccessTokenCreate,
        variables: {
          input: {
            email,
            password
          }
        }
      });
      const token =
        xxx.data.customerAccessTokenCreate.customerAccessToken.accessToken;
      const cookies = new Cookies();
      cookies.set("token", token);
      this.$store.commit("login/getToken", token);
      this.getUser(token);
    },
    async getUser(token) {
      const user = await this.$apollo.query({
        query: getCustomer,
        variables: {
          customerAccessToken: token
        }
      });
      this.$store.commit("login/getUser_1", user.data.customer);
      this.$store.dispatch("login/getUserAction_2", user.data.customer.id);
      this.$router.push("/");
    },
    passWordReset() {
      this.$router.push("/login/passWordReset");
    }
  },
  head() {
    return {
      title: "ログイン | ショクタメ"
    };
  }
};
</script>

<style scoped>
main {
  height: 100vh;
}
.logo {
  margin-top: 50px;
  margin-bottom: 100px;
}
.logo > img {
  width: 200px;
}

.foget_pass {
  width: 90%;
}
.foget_pass_p {
  color: #707070;
  padding: 20px 0;
  text-align: center;
}
.foget_pass_btn {
  color: #707070;
  margin-bottom: 50px;
  cursor: pointer;
}

@media screen and (max-width: 960px) {
  main {
    margin-top: 150px;
  }
}
@media screen and (max-width: 560px) {
  main {
    margin-top: 0;
  }
}
</style>