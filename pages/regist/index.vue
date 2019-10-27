<template>
  <main>
    <h1 class="page_title">パートナー登録</h1>
    <div class="regist_form">
      <dl>
        <dt>ニックネーム</dt>
        <dd>
          <basicInput cls="regist_type1" type="text" v-model="nickname" />
        </dd>
      </dl>
      <dl>
        <dt>お名前</dt>
        <dd>
          <basicInput
            cls="regist_type1"
            type="text"
            v-model="createData.lastName"
            placeholder="姓"
          />
          <basicInput
            cls="regist_type1"
            type="text"
            v-model="createData.firstName"
            placeholder="名"
          />
        </dd>
      </dl>
      <dl>
        <dt>メールアドレス</dt>
        <dd>
          <basicInput
            cls="regist_type2"
            type="text"
            v-model="createData.email"
          />
        </dd>
      </dl>
      <dl>
        <dt>パスワード</dt>
        <dd class="dd_password">
          <basicInput
            cls="regist_type2"
            type="password"
            v-model="createData.password"
          />
          <basicInput
            cls="regist_type2"
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
  </main>
</template>



<script>
// コンポーネント
import basicInput from "~/components/BasicInput";

// その他
import customerCreate from "~/apollo/gql/customerCreate";

export default {
  components: { basicInput },
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
.dd_password {
  display: flex;
  flex-direction: column;
}
.error_text {
  color: red;
  margin-bottom: 20px;
}
</style>
