<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <div class="box">
        <input type="text" v-model="nickname" placeholder="ニックネーム" />
        <input type="text" v-model="createData.lastName" placeholder="名前（姓）" />
        <input type="text" v-model="createData.firstName" placeholder="名前（名）" />
        <input type="text" v-model="createData.email" placeholder="メールアドレス" />
        <input
          type="password"
          v-model="createData.password"
          placeholder="パスワード"
        />
        <input
          type="password"
          v-model="password_check"
          placeholder="パスワード（確認用）"
        />
        <basicButton @emitClick="save">登録</basicButton>
      </div>
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
    password_check: null
  }),
  methods: {
    save() {
      if (this.createData.password != this.password_check) {
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
</style>
