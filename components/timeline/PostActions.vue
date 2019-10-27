<template>
  <div class="actions">
    <div class="btn_area">
      <div
        class="btn"
        v-if="Timeline.likes.indexOf(post_data.post_id) == -1 "
        @click="getLike"
      >
        <fa class="like_icon" :icon="faHeart" />
        <p class="like_text">いいね！({{ post_data.like_count }})</p>
      </div>
      <div
        class="btn"
        v-if="Timeline.likes.indexOf(post_data.post_id) >= 0"
        @click="loseLike"
      >
        <fa class="liked_icon" :icon="faHeart" />
        <p class="liked_text">いいね！({{ post_data.like_count }})</p>
      </div>
      <div class="btn" @click="toggleComments">
        <fa class="comment_icon" :icon="faCommentAlt" />
        <p class="comment_text">コメント({{ post_data.comment_count }})</p>
      </div>
    </div>
    <p class="alert" v-if="isAlert">
      いいね!やコメントするには
      <span class="alert_login" @click="alert">ログイン</span>が必要です。
    </p>
  </div>
</template>



<script>
// その他
import { mapState } from "vuex";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

export default {
  props: {
    post_data: {
      type: Object
    },
    timeline_type: {
      type: String
    }
  },
  data() {
    return {
      isComment_btn: false,
      isAlert: false
    };
  },
  methods: {
    getLike() {
      if (!this.Login.token) {
        this.isAlert = true;
        return;
      }
      console.log("getLikeAction");
      this.$store.dispatch("timeline/getLikeAction", {
        post_data: this.post_data,
        user_id: this.Login.user_id,
        business_id: this.post_data.business_id,
        timeline_type: this.timeline_type
      });
    },
    loseLike() {
      if (!this.Login.token) {
        this.isAlert = true;
        return;
      }
      this.$store.dispatch("timeline/loseLikeAction", {
        post_data: this.post_data,
        user_id: this.Login.user_id,
        business_id: this.post_data.business_id,
        timeline_type: this.timeline_type
      });
    },
    toggleComments() {
      if (!this.Login.token) {
        this.isAlert = true;
      }
      if (this.isComment_btn == false) {
        this.isComment_btn = true;
        this.$emit("openComments");
      } else {
        this.isComment_btn = false;
        this.$emit("closeComments");
      }
    },
    alert() {
      this.$router.push("/login");
    }
  },
  computed: {
    ...mapState({
      Login: state => state.login,
      Timeline: state => state.timeline
    }),
    faHeart() {
      return faHeart;
    },
    faCommentAlt() {
      return faCommentAlt;
    }
  }
};
</script>



<style scoped>
.actions {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.btn_area {
  width: 100%;
  display: flex;
}
.btn {
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}

.like_icon {
  color: gray;
}
.liked_icon {
  color: #f4b3ca;
}
.like_text {
  color: gray;
}
.liked_text {
  font-weight: bold;
  color: #f4b3ca;
}
.comment_text {
  color: gray;
}
.comment_icon {
  color: gray;
}
.conut_area {
  width: 100%;
  display: flex;
}
.alert {
  text-align: center;
  margin: 20px 0;
}
.alert_login {
  color: #b5c97c;
  cursor: pointer;
}
</style>