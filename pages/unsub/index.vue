<template>
  <main>
    <textarea v-model="reason"></textarea>
    <basicButton class="login_btn" @emitClick="unsub">退会する</basicButton>
  </main>
</template>

<script>
import basicButton from "~/components/BasicButton";
export default {
  components: { basicButton },
  data() {
    return {
      reason: ""
    };
  },
  methods: {
    unsub() {
      const data = {
        user_id: this.$store.state.login.user_1.id,
        reason: this.reason
      };
      this.$store.dispatch("unsubscribe/unsubscribeAction", data);
    }
  }
};
</script>