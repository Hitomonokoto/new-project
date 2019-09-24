<template>
  <div class="comments">
    <div v-if="$store.state.login.token" class="write_comment">
      <div class="commenter_icon">
        <img src="samplein.jpg" alt />
      </div>
      <textarea v-model="comment" placeholder="コメントを書く..."></textarea>

      <div class="send_comment">
        <button @click="sendComment">送信</button>
      </div>
    </div>

    <div
      class="comment_list"
      v-for="(comment, index) in this.comments"
      :key="index"
    >
      <div class="commenter">
        <div class="commenter_icon">
          <img src="samplein.jpg" alt />
        </div>
        <div class="name_time">
          <p class="nickname">{{ comment.user_name }}</p>
          <p class="time">{{ comment.created.seconds | timestampToDate }}</p>
        </div>
        <div class="edit">
          <button>編集</button>
        </div>
      </div>
      <div class="comment">
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import db from "~/plugins/firebase";

export default {
  data() {
    return {
      comment: null
    };
  },
  props: {
    postId: {
      type: String,
      default: ""
    },
    comments: {
      type: Array,
      default: ""
    }
  },
  methods: {
    sendComment() {
      if (!this.comment) {
        return;
      }
      const firebase = require("firebase/app");
      const docRef = db.collection("comments").doc();
      const setAda = docRef.set({
        user_name: this.$store.state.login.user_2.nickname,
        post_id: this.postId,
        text: this.comment,
        created: firebase.firestore.Timestamp.fromDate(new Date())
      });
      this.comment = "";
      this.$store.dispatch("timeline/getPostsAction");
    }
  },
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
.comments {
  width: 100%;
}
.write_comment {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
}
.write_comment > textarea {
  border-radius: 5px;
  padding: 5px 10px;
  width: 70%;
  margin-left: 10px;
  background-color: #efefef;
}
.commenter {
  display: flex;
}
.commenter_icon > img {
  width: 50px;
  border-radius: 50%;
}
.comment_list {
  width: 100%;
  padding: 10px;
}
.comment {
  display: inline-block;
  background-color: #efefef;
  border-radius: 20px;
}
.comment > p {
  padding: 5px 10px;
}
</style>
