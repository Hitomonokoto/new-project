<template>
  <main>
    <input v-model="email" type="email" placeholder="メールアドレス" />
    <basicButton @emitClick="customerRecover">送信</basicButton>
  </main>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";

// その他
import customerRecover from "~/apollo/gql/customerRecover";

export default {
  components: { basicButton },
  data: () => ({
    email: ""
  }),
  methods: {
    async customerRecover() {
      const yyy = await this.$apollo.mutate({
        mutation: customerRecover,
        variables: {
          email: this.email
        }
      });
      console.log(yyy);
    }
  }
};
</script>

<style scoped>
</style>