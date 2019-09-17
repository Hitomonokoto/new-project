<template>
  <div class="timeline">
    <div
      class="post"
      v-for="(post, index) in $store.state.posts.posts"
      :key="index"
    >
      <div class="user">
        <div class="user_icon">
          <img src="samplein.jpg" alt />
        </div>
        <div class="name_time">
          <p class="nickname">{{ post.user_name }}</p>
          <p class="time">{{ post.created_date.seconds | timestampToDate }}</p>
        </div>
        <div class="edit">
          <button>編集</button>
        </div>
      </div>
      <div class="text">
        <p>{{ post.text }}</p>
      </div>

      <img class="post_img" :src="post.image" alt />

      <div class="actions">
        <div class="good_btn">いいね！</div>
        <div class="comment_btn">コメントする</div>
      </div>
      <comments :postId="post.post_id" />
    </div>
  </div>
</template>

<script>
import db from "~/plugins/firebase";
import comments from "~/components/Comments";

export default {
  components: {
    comments
  },
  data() {
    return {
      comment: null
    };
  },
  methods: {},
  filters: {
    timestampToDate(value) {
      const d = new Date(value * 1000);
      const year = d.getFullYear();
      const month = `0${d.getMonth() + 1}`.slice(-2);
      const day = `0${d.getDate()}`.slice(-2);
      const hour = `0${d.getHours()}`.slice(-2);
      const minute = `0${d.getMinutes()}`.slice(-2);
      const second = `0${d.getSeconds()}`.slice(-2);
      return `${year}年${month}月${day}日${hour}時${minute}分`;
    }
  }
};
</script>

<style scoped>
.timeline {
  margin: 10px 0;
}
.post {
  border-radius: 5px;
  width: 580px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user {
  display: flex;
  width: 100%;
  padding: 10px;
}

.user_icon > img {
  width: 50px;
  border-radius: 10%;
}
.text {
  width: 100%;
  padding: 10px;
}
.post_img {
  width: 100%;
}

.actions {
  display: flex;
  width: 100%;
}

.good_btn {
  width: 50%;
  height: 40px;
  background-color: rgb(110, 206, 110);
  text-align: center;
  line-height: 40px;
}
.comment_btn {
  width: 50%;
  height: 40px;
  background-color: rgb(81, 161, 199);
  text-align: center;
  line-height: 40px;
}
</style>
