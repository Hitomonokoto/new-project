<template>
  <main>loading...</main>
</template>



<script>
// コンポーネント

// その他
import getCustomer from "~/apollo/gql/getCustomer";
export default {
  components: {},
  data() {
    return {};
  },
  async created() {
    const user = await this.$apollo.query({
      query: getCustomer,
      variables: {
        customerAccessToken: this.$store.state.login.token
      }
    });
    this.$store.commit("login/getUser_1", user.data.customer);
    this.$store.dispatch("login/getUserAction_2", user.data.customer.id);
    this.$router.push("/");
  }
};
</script>



<style scoped>
</style>
