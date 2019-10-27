<template>
  <div class="posts">
    <div class="user">
      <nuxt-link :to="'/farmers/farmer/'+post_data.farmer_id" class="user_icon">
        <userIcon cls="post_icon" :url="post_data.user_icon" />
      </nuxt-link>
      <div class="name_time_edit">
        <div class="name_time">
          <nuxt-link :to="'/farmers/farmer/'+post_data.farmer_id">
            <p class="nickname">{{ post_data.name }}</p>
          </nuxt-link>
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
      <div class="post_img">
        <img :src="this.post_data.fileUrl" />
      </div>
      <p class="post_text">{{ post_data.text }}</p>
      <postActions
        @openComments="openComments"
        @closeComments="closeComments"
        :post_data="post_data"
        :timeline_type="timeline_type"
      />
      <comments
        v-if="isComments"
        :post_id="this.post_data.post_id"
        :business_id="this.post_data.business_id"
        :comments="this.comments"
        :login_user_id="this.login.user_id"
        :timeline_type="timeline_type"
      />
    </div>
  </div>
</template>



<script>
// コンポーネント
import postActions from "~/components/timeline/PostActions";
import comments from "~/components/timeline/Comments";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";

export default {
  components: { postActions, comments, userIcon },
  props: {
    post_data: {
      type: Object
    },
    comments: {
      type: Array
    },
    user_id: {
      type: String
    },
    timeline_type: {
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
  color: #b5c97c;
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
  display: flex;
  justify-content: center;
}
.post_img > img {
  width: 100%;
  display: block;
}
</style>