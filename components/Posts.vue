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
      <div class="edit">
        <button>編集</button>
      </div>
    </div>
    <div class="text">
      <p>{{ text }}</p>
    </div>
    <img class="post_img" :src="image" />
    <div class="actions">
      <button @click="like" class="like_btn">いいね！</button>
      <button @click="getComments(postId)" class="comment_btn">コメント</button>
    </div>
    <comments
      v-if="isComments"
      :comments="this.comments"
      :postId="this.postId"
    />
  </div>
</template>



<script>
import db from "~/plugins/firebase";
import comments from "~/components/Comments";
export default {
  components: {
    comments
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    created: {
      type: Number,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    postId: {
      type: String,
      default: ""
    },
    comments: {
      type: Array,
      default: ""
    }
  },
  data() {
    return {
      isComments: false
    };
  },
  methods: {
    like() {
      alert("ok!");
    },
    getComments(postId) {
      this.isComments = true;
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