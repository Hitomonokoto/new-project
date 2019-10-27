<template>
  <main>loading...</main>
</template>



<script>
// コンポーネント

// その他
import { mapState } from "vuex";
import getCustomer from "~/apollo/gql/getCustomer";
import Cookies from "universal-cookie";

export default {
  components: {},
  data() {
    return {};
  },
  async created() {
    try {
      const user = await this.$apollo.query({
        query: getCustomer,
        variables: {
          customerAccessToken: this.login.token
        }
      });
    } catch {
      const cookies = new Cookies();
      cookies.remove("token");
      this.$store.commit("login/logout");
      this.$router.push("/");
    }

    const cookies = new Cookies();
    const lastPath = await cookies.get("lastPath");
    if (user.data.customer) {
      this.$store.commit("login/getUser_1", user.data.customer);
      await this.$store.dispatch(
        "login/getUserAction_2",
        user.data.customer.id
      );
      if (lastPath) {
        this.$router.push(lastPath);
      } else {
        this.$router.push("/");
      }
    } else {
      const cookies = new Cookies();
      cookies.remove("token");
      this.$store.commit("login/logout");
      this.$router.push("/");
    }
  },
  computed: mapState({
    login: state => state.login
  })
};
</script>



<style scoped>
</style>
