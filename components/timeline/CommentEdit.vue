<template>
  <div class="comments">
    <div v-show="login.token" class="send_comment">
      <textarea v-model="comment"></textarea>
      <div class="send_comment">
        <basicButton @emitClick="update">更新</basicButton>
      </div>
    </div>
  </div>
</template>

<script>
// その他
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      comment: null
    };
  },
  props: {
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
    update() {
      if (!this.comment) {
        return;
      }
      this.$store.dispatch("timeline/commentAction", {
        user_id: this.login.user_2.user_id,
        name: this.login.user_2.nickname,
        post_id: this.post_id,
        text: this.comment
      });
      this.comment = "";
    }
  },
  computed: mapState({
    login: state => state.login
  })
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
}
.send_comment > textarea {
  border-radius: 5px;
  padding: 5px 10px;
  width: 70%;
  margin-left: 10px;
  background-color: #efefef;
}
.commenter {
  display: flex;
}
.commenter_icon > img {
  width: 50px;
  border-radius: 50%;
}
.comment_list {
  width: 100%;
  padding: 10px;
}
.comment {
  display: inline-block;
  background-color: #efefef;
  border-radius: 20px;
}
.comment > p {
  padding: 5px 10px;
}
</style>
