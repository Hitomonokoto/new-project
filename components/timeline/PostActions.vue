<template>
  <div class="actions">
    <div class="like_btn" v-if="!isLike_btn" @click="getLike">
      <fa class="like_fa" :icon="faHeart" />
      <span
        class="like_fa"
        v-show="post_data.like_count!=0"
      >{{ post_data.like_count }}</span>
    </div>
    <div class="like_btn" v-if="isLike_btn" @click="loseLike">
      <fa class="get_like_fa" :icon="faHeart" />
      <span
        class="get_like_fa"
        v-show="post_data.like_count!=0"
      >{{ post_data.like_count }}</span>
    </div>
    <div class="comment_btn" v-if="!isComment_btn" @click="openComment">
      <fa class="comment_fa" :icon="faCommentAlt" />
      <span
        class="comment_fa"
        v-show="post_data.comment_count!=0"
      >{{ post_data.comment_count }}</span>
    </div>
    <div class="comment_btn" v-if="isComment_btn" @click="closeComments">
      <fa class="comment_fa" :icon="faCommentAlt" />
      <span
        class="comment_fa"
        v-show="post_data.comment_count!=0"
      >{{ post_data.comment_count }}</span>
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
    }
  },
  data() {
    return {
      isComment_btn: false,
      isLike_btn: false
    };
  },
  methods: {
    getLike() {
      if (!this.login.token) {
        this.$router.push("/login");
        return;
      }

      this.isLike_btn = true;
      this.$store.dispatch("timeline/getLikeAction", {
        post_data: this.post_data,
        user_id: this.login.user_id
      });
    },
    loseLike() {
      this.isLike_btn = false;
      this.$store.dispatch("timeline/loseLikeAction", {
        post_data: this.post_data,
        user_id: this.login.user_id
      });
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
      login: state => state.login
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