<template>
  <div @click="onClick" class="posts">
    <div class="user">
      <userIcon cls="senb_post_icon" :url="login.user_2.user_icon" />
      <p>投稿する</p>
    </div>
  </div>
</template>

<script>
// コンポーネント
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";

export default {
  components: {
    userIcon
  },
  methods: {
    onClick() {
      this.$emit("emitClick");
    }
  },
  computed: mapState({
    login: state => state.login
  })
};
</script>

<style scoped>
.posts {
  width: 500px;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 6px #d1d1d1;
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
}
.user {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
}
.user > p {
  padding-left: 10px;
}
@media screen and (max-width: 560px) {
  .posts {
    width: 100%;
  }
}
</style>
