<template>
  <div class="comments">
    <!-- {{ comments | wherePostId }} -->
    <div class="write_comment">
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
      v-for="(comment, index) in $store.state.comments.comments"
      :key="index"
    >
      <div class="commenter">
        <div class="commenter_icon">
          <img src="samplein.jpg" alt />
        </div>
        <div class="name_time">
          <p class="nickname">{{ comment.user_name }}</p>
          <p class="time">{{ comment.created_date.seconds | timestampToDate }}</p>
        </div>
        <div class="edit">
          <button @click="yuhi">編集</button>
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
      comment: null,
      comments: this.$store.state.comments.comments,
      xxx: this.postId
    };
  },
  props: {
    postId: {
      type: String,
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
        comment_id: "1",
        post_id: this.postId,
        user_name: "yuhi",
        text: this.comment,
        created_date: firebase.firestore.Timestamp.fromDate(new Date())
      });
      this.comment = "";
      this.$store.dispatch("comments/getCommentsAction");
    },
    yuhi() {
      console.log(this.postId);
      const whereComment = this.comments.filter(v => {
        // return v.post_id == "5LX2L18pP3fX06tKAQqS";
        return v.post_id == this.postId;
      });
      console.log(whereComment);
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
    // wherePostId(value) {
    //   const whereComment = value.filter(v => {
    //     // return v.post_id == "5LX2L18pP3fX06tKAQqS";
    //     return v.post_id == this.postId;
    //   });
    //   return whereComment;
    // }
  },
  watch: {
    xxx() {
      alert("ok");
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
