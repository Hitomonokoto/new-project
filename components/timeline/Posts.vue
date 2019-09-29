<template>
  <div class="posts">
    <div class="user">
      <div class="user_icon">
        <img src="samplein.jpg" alt />
      </div>
      <div class="name_time">
        <p class="nickname">{{ name }}</p>
        <p class="time">{{ created | timestampToDate }}</p>
      </div>
      <div v-if="this.$store.state.login.user_id == this.user_id">
        <basicButton @emitClick="edit">編集</basicButton>
      </div>
    </div>
    <div class="post_content">
      <div class="text">
        <p>{{ text }}</p>
      </div>
      <img class="post_img" :src="this.fileUrl" />
      <div class="actions">
        <basicButton class="like_btn" @emitClick="like">いいね！</basicButton>
        <basicButton
          class="comment_btn"
          v-if="!isComment_btn"
          @emitClick="getComments"
        >
          コメント
          <span v-show="comment_count!=0">{{ comment_count }}</span>
        </basicButton>
        <basicButton
          class="comment_btn"
          v-if="isComment_btn"
          @emitClick="closeComments"
        >
          コメント
          <span v-show="comment_count!=0">{{ comment_count }}</span>
        </basicButton>
      </div>
      <comments
        v-if="isComments"
        :comment_count="this.comment_count"
        :post_id="this.post_id"
        :comments="this.comments"
        :login_user_id="this.$store.state.login.user_id"
      />
    </div>
  </div>
</template>



<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import comments from "~/components/timeline/Comments";

export default {
  components: { basicButton, comments },
  props: {
    user_id: {
      type: String
    },
    name: {
      type: String
    },
    created: {
      type: Number
    },
    text: {
      type: String
    },
    fileName: {
      type: String
    },
    fileUrl: {
      type: String
    },
    post_id: {
      type: String
    },
    comments: {
      type: Array
    },
    comment_count: {
      type: Number
    }
  },
  data() {
    return {
      isComments: false,
      isComment_btn: false
    };
  },
  methods: {
    like() {
      alert("ok!");
    },
    getComments() {
      this.isComments = true;
      this.$store.dispatch("timeline/getCommentsAction", this.post_id);
      this.isComment_btn = true;
    },
    closeComments() {
      this.isComments = false;
      this.isComment_btn = false;
    },
    edit() {
      console.log("okokok");
      this.$emit("postEdit", {
        post_id: this.post_id,
        name: this.name,
        text: this.text,
        fileUrl: this.fileUrl,
        fileName: this.fileName
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
  }
};
</script>



<style scoped>
.posts {
  width: 100%;
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

.like_btn {
  width: 50%;
  height: 40px;
  line-height: 40px;
  border: none;
}
.comment_btn {
  width: 50%;
  height: 40px;
  line-height: 40px;
  border: none;
}
</style>