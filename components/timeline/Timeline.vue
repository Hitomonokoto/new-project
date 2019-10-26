<template>
  <div class="timeline">
    <div class="post_area" v-for="(post, index) in posts" :key="index">
      <posts
        @postEdit="postEdit"
        :user_id="post.user_id"
        :post_data="post"
        :comments="post.comments"
        :timeline_type="timeline_type"
      />
    </div>
  </div>
</template>



<script>
// コンポーネント
import posts from "~/components/timeline/Posts";
import basicButton from "~/components/BasicButton";

// その他
import { mapState } from "vuex";

export default {
  components: {
    posts,
    basicButton
  },
  data() {
    return {};
  },
  props: {
    posts: {
      type: Array
    },
    timeline_type: {
      type: String
    }
  },
  methods: {
    post() {
      this.$emit("post");
    },
    postEdit(post_data) {
      console.log(post_data);
      this.$emit("post_edit", post_data);
    },
    sendComment(payload) {
      this.$emit("sendComment", payload);
    },
    commentDelete(payload) {
      this.$emit("commentDelete", payload);
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
.post_btn {
  width: 100%;
  display: flex;
  justify-content: center;
}
.post_area {
  width: 500px;
  box-shadow: 0px 0px 6px #d1d1d1;
  margin-bottom: 30px;
}
@media screen and (max-width: 560px) {
  .post_area {
    width: 100%;
  }
}
</style>
