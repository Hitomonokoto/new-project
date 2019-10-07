<template>
  <main>
    <div class="login_form">
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

      <linkButton
        cls="foget_pass"
        linkTo="/login/passWordReset"
        text="パスワードをお忘れの方はこちら"
      />
    </div>

    <div class="nomenber_form">
      <p>
        アカウントをお持ちではありませんか？
        <br />
        <br />こちらからマイファームのご案内をさせていただきます。
        <br />ご共感頂き登録していただけると幸いです。
      </p>
      <linkButton cls="about_myfarm" linkTo="/aboutMyFarm" text="マイファームについて" />
    </div>
  </main>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import basicButton from "~/components/BasicButton";
import basicInput from "~/components/BasicInput";

// その他
import customerAccessTokenCreate from "~/apollo/gql/customerAccessTokenCreate";
import getCustomer from "~/apollo/gql/getCustomer";

export default {
  components: { linkButton, basicButton, basicInput },
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
    }
  }
};
</script>

<style scoped>
.login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-bottom: 100px;
}
.logo {
  margin-top: 50px;
  margin-bottom: 100px;
}
.logo > img {
  width: 200px;
}
.login_btn {
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #afc0f1;
  color: #ffffff;
  margin: 10px 0;
  padding: 10px 0;
  width: 300px;
}
.foget_pass {
  width: 90%;
}
.foget_pass_p {
  color: #707070;
  padding: 20px 0;
  text-align: center;
}
.nomenber_form {
  width: 80%;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
}
.nomenber_form > p {
  text-align: center;
  color: #707070;
  padding: 50px 0;
}
</style>