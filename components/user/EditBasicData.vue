<template>
  <div>
    <p>お名前</p>
    <basicInput
      cls="edit_user_name"
      type="text"
      v-model="lastName"
      placeholder="姓"
    />
    <basicInput
      cls="edit_user_name"
      type="text"
      v-model="firstName"
      placeholder="名"
    />
    <p>メールアドレス</p>
    <basicInput cls="edit_email" type="text" v-model="email" />
    <basicButton @emitClick="back">戻る</basicButton>
    <basicButton @emitClick="customerUpdate">変更する</basicButton>
  </div>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import basicButton from "~/components/BasicButton";
import basicInput from "~/components/BasicInput";

// その他
import customerUpdate from "~/apollo/gql/customerUpdate";

export default {
  components: {
    linkButton,
    basicButton,
    basicInput
  },
  data() {
    return {
      lastName: this.$store.state.login.user_1.lastName,
      firstName: this.$store.state.login.user_1.firstName,
      email: this.$store.state.login.user_1.email,
      user_id: this.$store.state.login.user_2.user_id
    };
  },
  methods: {
    async customerUpdate() {
      const yyy = await this.$apollo.mutate({
        mutation: customerUpdate,
        variables: {
          customerAccessToken: this.$store.state.login.token,
          customer: {
            lastName: this.lastName,
            firstName: this.firstName,
            email: this.email
          }
        }
      });
      console.log(yyy);

      this.$emit("emitClick");
    },
    back() {
      this.$emit("emitClick");
    }
  }
};
</script>

<style scoped>
</style>