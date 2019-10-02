<template>
  <div class="timeline">
    <div class="timeline_menu">
      <h2>タイムライン</h2>
      <sendPostBtn v-if="isPost" @emitClick="post" />

      <!-- <div class="timeline_btns">
        <basicButton class="all_posts">タイムライン</basicButton>
        <basicButton class="my_posts">マイライン</basicButton>
      </div>-->
    </div>
    <div class="post" v-for="(post, index) in this.timeline.posts" :key="index">
      <posts
        @postEdit="postEdit"
        :user_id="post.user_id"
        :post_data="post"
        :comments="post.comments"
      />
    </div>
  </div>
</template>



<script>
// コンポーネント
import posts from "~/components/timeline/Posts";
import basicButton from "~/components/BasicButton";
import sendPostBtn from "~/components/timeline/SendPostBtn";

// その他
import { mapState } from "vuex";

export default {
  components: {
    posts,
    basicButton,
    sendPostBtn
  },
  data() {
    return {
      isPost: false
    };
  },
  created() {
    if (this.$store.state.login.user_2) {
      if (this.$store.state.login.user_2.user_type == 1) {
        this.isPost = true;
      }
    }
  },
  methods: {
    post() {
      this.$emit("post");
    },
    postEdit(post_data) {
      console.log(post_data);
      this.$emit("post_edit", post_data);
    }
  },
  computed: mapState({ timeline: "timeline" })
};
</script>



<style scoped>
.timeline {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timeline_menu {
  width: 100%;
  position: sticky;
  top: 0;
  background-color: white;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timeline_btns {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
}
.timeline_btns > button {
  width: 50%;
  height: 40px;
  background-color: rgb(110, 206, 110);
  text-align: center;
  line-height: 40px;
}
.send_post_btn {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.post {
  width: 580px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  margin-bottom: 20px;
}
</style>
