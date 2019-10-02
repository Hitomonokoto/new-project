<template>
  <div class="posts">
    <div class="user">
      <div class="user_icon">
        <img src="samplein.jpg" alt />
      </div>
      <div class="name_time">
        <p class="nickname">{{ post_data.name }}</p>
        <p class="time">{{ post_data.created.seconds | timestampToDate }}</p>
      </div>
      <div v-if="this.$store.state.login.user_id == this.post_data.user_id">
        <basicButton @emitClick="edit">編集</basicButton>
      </div>
    </div>
    <div class="post_content">
      <div class="text">
        <p>{{ post_data.text }}</p>
      </div>
      <img class="post_img" :src="this.post_data.fileUrl" />
      <div class="actions">
        <basicButton class="like_btn" v-if="!isLike_btn" @emitClick="getLike">
          いいね！
          <span v-show="post_data.like_count!=0">{{ post_data.like_count }}</span>
        </basicButton>
        <basicButton class="like_btn" v-if="isLike_btn" @emitClick="loseLike">
          いいね！
          <span v-show="post_data.like_count!=0">{{ post_data.like_count }}</span>
        </basicButton>
        <basicButton
          class="comment_btn"
          v-if="!isComment_btn"
          @emitClick="getComments"
        >
          コメント
          <span
            v-show="post_data.comment_count!=0"
          >{{ post_data.comment_count }}</span>
        </basicButton>
        <basicButton
          class="comment_btn"
          v-if="isComment_btn"
          @emitClick="closeComments"
        >
          コメント
          <span
            v-show="post_data.comment_count!=0"
          >{{ post_data.comment_count }}</span>
        </basicButton>
      </div>
      <comments
        v-if="isComments"
        :comment_count="this.post_data.comment_count"
        :post_id="this.post_data.post_id"
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
    post_data: {
      type: Object
    },
    comments: {
      type: Array
    }
  },
  data() {
    return {
      isComments: false,
      isComment_btn: false,
      isLike_btn: false
    };
  },
  methods: {
    getLike() {
      if (!this.$store.state.login.token) {
        return;
      }
      this.isLike_btn = true;
      this.$store.dispatch("timeline/getLikeAction", {
        post_data: this.post_data,
        user_id: this.$store.state.login.user_id
      });
    },
    loseLike() {
      this.isLike_btn = false;
      this.$store.dispatch("timeline/loseLikeAction", {
        post_data: this.post_data,
        user_id: this.$store.state.login.user_id
      });
    },
    getComments() {
      this.isComments = true;
      this.$store.dispatch(
        "timeline/getCommentsAction",
        this.post_data.post_id
      );
      this.isComment_btn = true;
    },
    closeComments() {
      this.isComments = false;
      this.isComment_btn = false;
    },
    edit() {
      console.log("okokok");
      this.$emit("postEdit", this.post_data);
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