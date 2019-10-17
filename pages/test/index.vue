<template>
  <main>loading...</main>
</template>



<script>
// コンポーネント

// その他
import { mapState } from "vuex";
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
        customerAccessToken: this.login.token
      }
    });
    this.$store.commit("login/getUser_1", user.data.customer);
    console.log("11111111");
    this.$store.dispatch("login/getUserAction_2", user.data.customer.id);
    this.$router.push("/");
  },
  computed: mapState({
    login: state => state.login
  })
};
</script>



<style scoped>
</style>
