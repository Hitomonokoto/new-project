<template>
  <div v-show="this.comments" class="comments">
    <div v-show="this.login.token" class="send_comment">
      <div class="commenter_icon">
        <img src="samplein.jpg" alt />
      </div>
      <textarea v-model="new_comment" placeholder="コメントを書く..."></textarea>

      <div class="send_comment">
        <basicButton cls="send_btn" @emitClick="sendComment">送信</basicButton>
      </div>
    </div>
    <p v-show="!this.login.token">パートナーになるとコメントをすることが出来ます。</p>

    <div v-for="(comment, index) in comments" :key="index">
      <div class="commenter">
        <div class="commenter_icon">
          <img src="samplein.jpg" alt />
        </div>
        <div class="name_time">
          <p class="nickname">{{ comment.name }}</p>

          <p class="time">{{ comment.created.seconds | timestampToDate }}</p>
        </div>
        <div v-if="login_user_id == comment.user_id" class="commentDelete">
          <basicButton cls="delete_btn" @emitClick="commentDelete(comment)">削除</basicButton>
        </div>
      </div>
      <div class="comment">
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
// その他
import { mapState } from "vuex";

export default {
  components: { basicButton },
  data() {
    return {
      new_comment: null
    };
  },
  props: {
    comment_count: {
      type: Number
    },
    post_id: {
      type: String
    },
    comments: {
      type: Array
    },
    login_user_id: {
      type: String
    }
  },
  methods: {
    sendComment() {
      if (!this.new_comment) {
        return;
      }
      this.$store.dispatch("timeline/commentAction", {
        user_id: this.$store.state.login.user_2.user_id,
        name: this.$store.state.login.user_2.nickname,
        post_id: this.post_id,
        text: this.new_comment,
        comment_count: this.comment_count
      });
      this.new_comment = "";
    },
    commentDelete(comment) {
      console.log(this.post_id);
      console.log(comment);
      this.$store.dispatch("timeline/commentDeleteAction", {
        post_id: this.post_id,
        comment_id: comment.comment_id,
        comment_count: this.comment_count
      });
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
  },
  computed: mapState({ timeline: "timeline", login: "login" })
};
</script>

<style scoped>
.comments {
  width: 100%;
}
.send_comment {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
}
.send_comment > textarea {
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
