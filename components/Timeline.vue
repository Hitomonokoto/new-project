<template>
  <div class="timeline">
    <div class="timeline_menu">
      <button v-if="$store.state.login.user_2.user_type==1" @click="post">投稿する</button>
      <div class="timeline_btns">
        <button class="all_posts">タイムライン</button>
        <button class="my_posts">マイライン</button>
      </div>
    </div>
    <div class="post" v-for="(post, index) in this.timeline.posts" :key="index">
      <posts
        :name="post.user_name"
        :created="post.created_date.seconds"
        :text="post.text"
        :image="post.image"
        :postId="post.post_id"
        :comments="post.comments"
      />
    </div>
  </div>
</template>



<script>
// コンポーネント
import posts from "~/components/Posts";

// その他
import { mapState } from "vuex";

export default {
  components: {
    posts
  },
  methods: {
    post() {
      this.$emit("post");
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

.post {
  width: 580px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  margin-bottom: 20px;
}
</style>
