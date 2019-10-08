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
      <div v-if="this.$store.state.login.user_id == this.user_id">
        <basicButton cls="edit_btn" @emitClick="edit">編集</basicButton>
      </div>
    </div>
    <div class="post_content">
      <div class="text">
        <p>{{ post_data.text }}</p>
      </div>
      <img class="post_img" :src="this.post_data.fileUrl" />
      <div class="actions">
        <div class="like_btn" v-if="!isLike_btn" @click="getLike">
          いいね！
          <span v-show="post_data.like_count!=0">{{ post_data.like_count }}</span>
        </div>
        <div class="like_btn" v-if="isLike_btn" @click="loseLike">
          いいね！
          <span v-show="post_data.like_count!=0">{{ post_data.like_count }}</span>
        </div>
        <div class="comment_btn" v-if="!isComment_btn" @click="getComments">
          コメント
          <span
            v-show="post_data.comment_count!=0"
          >{{ post_data.comment_count }}</span>
        </div>
        <div class="comment_btn" v-if="isComment_btn" @click="closeComments">
          コメント
          <span
            v-show="post_data.comment_count!=0"
          >{{ post_data.comment_count }}</span>
        </div>
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
    },
    user_id: {
      type: String
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
.actions > div {
  text-align: center;
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