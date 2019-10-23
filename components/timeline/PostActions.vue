<template>
  <div class="actions">
    <div class="like_btn" @click="getLike">
      <fa class="like_fa" :icon="faHeart" />
      <span
        class="like_fa"
        v-show="post_data.like_count!=0"
      >{{ post_data.like_count }}</span>いいね！
    </div>

    <div class="comment_btn" v-if="!isComment_btn" @click="openComment">
      <fa class="comment_fa" :icon="faCommentAlt" />
      <span
        class="comment_fa"
        v-show="post_data.comment_count!=0"
      >{{ post_data.comment_count }}</span>コメント
    </div>
    <div class="comment_btn" v-if="isComment_btn" @click="closeComments">
      <fa class="comment_fa" :icon="faCommentAlt" />
      <span
        class="comment_fa"
        v-show="post_data.comment_count!=0"
      >{{ post_data.comment_count }}</span>コメント
    </div>
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
      isComment_btn: false
    };
  },
  methods: {
    getLike() {
      if (!this.Login.token) {
        this.$router.push("/login");
        return;
      }
      if (this.Timeline.likes.indexOf(this.post_data.post_id) >= 0) {
        this.$store.dispatch("timeline/loseLikeAction", {
          post_data: this.post_data,
          user_id: this.Login.user_id,
          business_id: this.post_data.business_id,
          timeline_type: this.timeline_type
        });
        console.log("11111");
      } else {
        this.$store.dispatch("timeline/getLikeAction", {
          post_data: this.post_data,
          user_id: this.Login.user_id,
          business_id: this.post_data.business_id,
          timeline_type: this.timeline_type
        });
        console.log("22222");
      }
    },
    openComment() {
      this.isComment_btn = true;
      this.$emit("openComments");
    },
    closeComments() {
      this.isComment_btn = false;
      this.$emit("closeComments");
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
  cursor: pointer;
}
.comment_btn {
  width: 50%;
  height: 40px;
  line-height: 40px;
  border: none;
  cursor: pointer;
}
.like_fa {
  color: gray;
}
.get_like_fa {
  color: rgb(255, 45, 56);
}
.comment_fa {
  color: gray;
}
</style>