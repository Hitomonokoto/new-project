<template>
  <div>
    <p>新しいニックネームを入力してください。</p>
    <input type="text" v-model="new_nickname" />
    <basicButton @emitClick="back">戻る</basicButton>
    <basicButton @emitClick="changeNickname">変更する</basicButton>
  </div>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import basicButton from "~/components/BasicButton";

// その他

export default {
  components: {
    linkButton,
    basicButton
  },
  data() {
    return {
      new_nickname: "",
      user_id: this.$store.state.login.user_2.user_id
    };
  },
  methods: {
    changeNickname() {
      this.$store.dispatch("login/changeNicknameAction", {
        new_nickname: this.new_nickname,
        user_id: this.user_id
      });
      this.$emit("emitClick");
    },
    back() {
      this.$emit("emitClick");
    }
  }
};
</script>

<style scoped>
input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #efefef;
  margin: 10px 0;
}
</style>