<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <h2>パートナー登録画面</h2>
      <div class="regist_form">
        <dl>
          <dt>ニックネーム</dt>
          <dd>
            <input
              class="input_type1"
              type="text"
              v-model="nickname"
              placeholder="ニックネーム"
            />
          </dd>
        </dl>
        <dl>
          <dt>お名前</dt>
          <dd>
            <input
              class="input_type1"
              type="text"
              v-model="createData.lastName"
              placeholder="姓"
            />
            <input
              class="input_type1"
              type="text"
              v-model="createData.firstName"
              placeholder="名"
            />
          </dd>
        </dl>
        <dl>
          <dt>メールアドレス</dt>
          <dd>
            <input
              class="input_type2"
              type="text"
              v-model="createData.email"
              placeholder="メールアドレス"
            />
          </dd>
        </dl>
        <dl>
          <dt>パスワード</dt>
          <dd class="dd_password">
            <input
              class="input_type2"
              type="password"
              v-model="createData.password"
              placeholder="パスワード"
            />
            <input
              class="input_type2"
              type="password"
              v-model="password_check"
              placeholder="パスワード（確認用）"
            />
          </dd>
        </dl>
      </div>
      <p v-if="error1" class="error_text">※未入力項目があります。</p>
      <p v-if="error2" class="error_text">※パスワードに誤りがあります。</p>
      <basicButton cls="regist_btn" @emitClick="regist">登録</basicButton>
    </div>
  </main>
</template>



<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import mainImage from "~/components/MainImage";

// その他
import customerCreate from "~/apollo/gql/customerCreate";
import db from "~/plugins/firebase";

export default {
  components: { mainImage, basicButton },
  data: () => ({
    createData: {
      lastName: null,
      firstName: null,
      email: null,
      password: null
    },
    nickname: null,
    password_check: null,
    error1: false,
    error2: false
  }),
  methods: {
    regist() {
      if (this.createData.password != this.password_check) {
        this.error1 = false;
        this.error2 = true;
        return;
      }
      if (
        !this.nickname &&
        !this.createData.lastName &&
        !this.createData.firstName &&
        !this.createData.email &&
        !this.createData.email
      ) {
        this.error1 = true;
        this.error2 = false;
        return;
      }

      this.create(this.createData);
    },
    async create({ lastName, firstName, email, password }) {
      const data = await this.$apollo.mutate({
        mutation: customerCreate,
        variables: {
          input: {
            lastName,
            firstName,
            email,
            password
          }
        }
      });
      this.$store.dispatch("login/createUserAction", {
        user_id: data.data.customerCreate.customer.id,
        nickname: this.nickname
      });
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.input_type1 {
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #efefef;
  margin-top: 5px;
  margin-bottom: 20px;
}
.input_type2 {
  border-radius: 5px;
  width: 405px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #efefef;
  margin-top: 5px;
  margin-bottom: 20px;
}
.dd_password {
  display: flex;
  flex-direction: column;
}
.error_text {
  color: red;
  margin-bottom: 20px;
}
</style>
