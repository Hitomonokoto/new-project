<template>
  <div class="posts">
    <div class="user">
      <nuxt-link :to="'/farmers/farmer/'+post_data.farmer_id" class="user_icon">
        <userIcon cls="post_icon" :url="post_data.user_icon" />
      </nuxt-link>
      <div class="name_time_edit">
        <div class="name_time">
          <nuxt-link
            :to="'/farmers/farmer/'+post_data.farmer_id"
            class="nickname"
          >{{ post_data.name }}</nuxt-link>
          <p class="time">{{ post_data.created.seconds | timestampToDate }}</p>
        </div>
        <basicButton
          v-if="this.login.user_id == this.user_id"
          cls="post_edit_btn"
          @emitClick="edit"
        >編集</basicButton>
      </div>
    </div>
    <div class="post_content">
      <p class="post_title">{{ post_data.title }}</p>
      <div class="post_type">{{ post_data.type }}</div>
      <img class="post_img" :src="this.post_data.fileUrl" />
      <p class="post_text">{{ post_data.text }}</p>
      <postActions
        :post_data="post_data"
        @openComments="openComments"
        @closeComments="closeComments"
      />
      <comments
        v-if="isComments"
        :comment_count="this.post_data.comment_count"
        :post_id="this.post_data.post_id"
        :comments="this.comments"
        :login_user_id="this.login.user_id"
      />
    </div>
  </div>
</template>



<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import postActions from "~/components/timeline/PostActions";
import comments from "~/components/timeline/Comments";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";

export default {
  components: { basicButton, postActions, comments, userIcon },
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
    openComments() {
      this.isComments = true;
      console.log("dsjvnbksdvbasdkvgbsjkghvbsz,djkfghz,sdhjfbjhdzsbgzd");
      console.log(this.post_data.post_id);
      this.$store.dispatch(
        "timeline/getCommentsAction",
        this.post_data.post_id
      );
    },
    closeComments() {
      this.isComments = false;
    },
    edit() {
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
  },
  computed: mapState({
    login: state => state.login
  })
};
</script>



<style scoped>
.posts {
  width: 100%;
}
.user {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
}
.name_time_edit {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.time {
  color: rgb(0, 114, 190);
  font-size: 12px;
}
.post_title {
  padding: 0 10px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}
.post_text {
  padding: 0 10px;
  margin-bottom: 20px;
}
.post_img {
  width: 100%;
  display: block;
  margin-bottom: 10px;
}
</style>