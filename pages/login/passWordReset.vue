<template>
  <main>
    <input v-model="email" type="email" placeholder="メールアドレス" />
    <basicButton @emitClick="customerRecover">送信</basicButton>
  </main>
</template>

<script>
// その他
import customerRecover from "~/apollo/gql/customerRecover";

export default {
  components: {},
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