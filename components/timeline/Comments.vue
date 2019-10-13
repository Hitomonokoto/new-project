<template>
  <div v-show="this.comments" class="comments">
    <div v-if="this.login.token" class="send_comment">
      <userIcon
        cls="send_comment_icon"
        :url="$store.state.login.user_2.user_icon"
      />
      <textarea
        v-model="new_comment"
        class="write_comment"
        placeholder="コメントを書く..."
        style="font-size:16px;"
        ref="adjust_textarea"
        @keydown="adjustHeight"
      ></textarea>
      <div>
        <basicButton cls="send_btn" @emitClick="sendComment">送信</basicButton>
      </div>
    </div>
    <p class="comment_alert" v-show="!this.login.token">パートナーになるとコメントをすることが出来ます。</p>

    <div class="comment_list" v-for="(comment, index) in comments" :key="index">
      <div v-if="login_user_id != comment.user_id" class="comment">
        <userIcon cls="commenter_icon" :url="comment.user_icon" />
        <div class="comment_main">
          <p class="nickname">{{ comment.name }}</p>
          <div class="comment_text">
            <div class="comment_background">
              <p>{{ comment.text }}</p>
            </div>
            <p class="time">{{ comment.created.seconds | timestampToDate }}</p>
          </div>
        </div>
      </div>

      <div v-if="login_user_id == comment.user_id" class="comment_i">
        <div class="comment_main_i">
          <div class="comment_text_i">
            <div class="comment_background_i">
              <p>{{ comment.text }}</p>
            </div>
          </div>
          <div class="time_and_delete">
            <p class="time_i">{{ comment.created.seconds | timestampToDate }}</p>
            <basicButton
              cls="comment_delete_btn"
              @emitClick="commentDelete(comment)"
            >削除</basicButton>
          </div>
        </div>
        <userIcon cls="commenter_icon_i" :url="comment.user_icon" />
      </div>
    </div>
  </div>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import adjustedTextarea from "~/components/AdjustedTextarea";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";

export default {
  components: { basicButton, adjustedTextarea, userIcon },
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
        user_icon: this.$store.state.login.user_2.user_icon,
        name: this.$store.state.login.user_2.nickname,
        post_id: this.post_id,
        text: this.new_comment,
        comment_count: this.comment_count
      });
      this.new_comment = "";
    },
    commentDelete(comment) {
      this.$store.dispatch("timeline/commentDeleteAction", {
        post_id: this.post_id,
        comment_id: comment.comment_id,
        comment_count: this.comment_count
      });
    },
    adjustHeight() {
      const textarea = this.$refs.adjust_textarea;
      const resetHeight = new Promise(function(resolve) {
        resolve((textarea.style.height = "auto"));
      });
      resetHeight.then(function() {
        textarea.style.height = textarea.scrollHeight + "px";
      });
    }
  },
  filters: {
    timestampToDate(value) {
      const d = new Date(value * 1000);
      const x = Date.now() - value * 1000;
      if (x < 60000) {
        return "数秒前";
      }
      if (x < 3600000) {
        const y = Math.floor(x / 60000);
        return y + "分前";
      }
      if (x < 86400000) {
        const z = Math.floor(x / 3600000);
        console.log(z);
        return z + "時間前";
      }
      const month = d.getMonth() + 1;
      const day = d.getDate();
      if (x < 31536000000) {
        return `${month}月${day}日`;
      }
      const year = d.getFullYear();
      return `${year}年${month}月${day}日`;
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
  margin-bottom: 20px;
}
.comment_list {
}
.comment {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}
.comment_i {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}
.comment_main {
  margin-left: 10px;
}
.comment_text {
  display: flex;
  align-items: flex-end;
}
.comment_text_i {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.comment_background {
  display: inline-block;
  background-color: #efefef;
  border-radius: 20px;
}
.comment_background_i {
  display: inline-block;
  background-color: #fae989;
  border-radius: 20px;
}
.comment_background > p {
  padding: 3px 15px;
}
.comment_background_i > p {
  padding: 3px 15px;
}
.nickname {
  font-weight: bold;
  font-size: 14px;
}
.nickname_i {
  text-align: right;
  font-weight: bold;
  font-size: 14px;
}
.time {
  margin-left: 5px;
  color: rgb(0, 114, 190);
  font-size: 12px;
}
.time_i {
  margin-right: 10px;
  color: rgb(0, 114, 190);
  font-size: 12px;
}
.comment_alert {
  text-align: center;
  margin: 20px 0;
  padding: 10px 0;
  background-color: rgb(241, 234, 129);
}
.time_and_delete {
  display: flex;
  justify-content: flex-end;
}
.write_comment {
  border-radius: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #efefef;
  width: 70%;
  margin-left: 10px;
}
</style>
