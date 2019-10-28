<template>
  <div class="menu">
    <div class="index" @click="editProfile">プロフィール設定</div>
    <div class="index" @click="unsubscribe">退会</div>
  </div>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";

// その他

export default {
  components: {
    linkButton
  },
  methods: {
    unsubscribe() {
      this.$router.push("/unsubscribe");
    },
    editProfile() {
      this.$emit("emitEditProfile");
    }
  }
};
</script>

<style scoped>
.menu {
  position: absolute;
  top: -50px;
  right: 0;
  background-color: white;
  box-shadow: 0px 0px 6px #d1d1d1;
}
.index {
  cursor: pointer;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>