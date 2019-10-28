<template>
  <div class="edit_nickname_area">
    <p>新しいニックネームを入力してください。</p>
    <div>
      <basicInput cls="edit_nickname" type="text" v-model="new_nickname" />
    </div>

    <div class="actions">
      <basicButton cls="nickname_edit_back_btn" @emitClick="back">戻る</basicButton>
      <basicButton
        cls="nickname_edit_update_btn"
        @emitClick="changeNickname"
      >変更する</basicButton>
    </div>
  </div>
</template>

<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
import basicInput from "~/components/BasicInput";

// その他
import { mapState } from "vuex";

export default {
  components: {
    linkButton,
    basicInput
  },
  data() {
    return {
      new_nickname: null,
      user_id: this.login.user_2.id
    };
  },
  methods: {
    changeNickname() {
      if (!this.new_nickname) {
        return;
      }
      this.$store.dispatch("login/changeNicknameAction", {
        new_nickname: this.new_nickname,
        user_id: this.login.user_2.id
      });
      this.$emit("emitClick");
    },
    back() {
      this.$emit("emitClick");
    }
  },
  computed: mapState({
    login: state => state.login
  })
};
</script>

<style scoped>
.edit_nickname_area {
  width: 100%;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>