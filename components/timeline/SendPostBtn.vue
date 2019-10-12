<template>
  <div @click="onClick" class="posts">
    <div class="user">
      <userIcon
        cls="senb_post_icon"
        :url="$store.state.login.user_2.profile_img"
      />
      <p>投稿する</p>
    </div>
  </div>
</template>

<script>
// コンポーネント
import userIcon from "~/components/UserIcon";

export default {
  components: {
    userIcon
  },
  methods: {
    onClick() {
      this.$emit("emitClick");
    }
  }
};
</script>

<style scoped>
.posts {
  width: 500px;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 6px #d1d1d1;
  margin-bottom: 20px;
  display: flex;
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
