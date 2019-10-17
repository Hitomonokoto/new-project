<template>
  <div class="timeline">
    <div class="post_btn" v-if="isPost_btn && login.user_2">
      <sendPostBtn
        v-if="login.user_2.farmer_id == farmers.farmer.sys.id"
        @emitClick="post"
      />
    </div>

    <timeline
      v-if="isTimeline"
      @post="post"
      @post_edit="post_edit"
      :posts="timeline.selectPosts"
    />
    <post v-if="isPost" @emitBack="postBack" @emitSendPost="sendPost" />
    <postEdit
      v-if="isPostEdit"
      @editBack="editBack"
      :post_data="this.post_data"
    />
  </div>
</template>



<script>
// コンポーネント
import timeline from "~/components/timeline/Timeline";
import post from "~/components/timeline/Post";
import postEdit from "~/components/timeline/PostEdit";
import sendPostBtn from "~/components/timeline/SendPostBtn";

// その他
import { mapState } from "vuex";

export default {
  components: { timeline, post, postEdit, sendPostBtn },
  data() {
    return {
      isPost_btn: true,
      isTimeline: true,
      isPost: false,
      isPostEdit: false,
      post_data: "",
      ttt: null
    };
  },
  methods: {
    post() {
      this.isTimeline = false;
      this.isPost = true;
      this.isPost_btn = false;
    },
    postBack() {
      this.isPost = false;
      this.isTimeline = true;
      this.isPost_btn = true;
    },
    editBack() {
      this.isTimeline = true;
      this.isPostEdit = false;
      this.isPost_btn = true;
    },
    post_edit(post_data) {
      this.post_data = post_data;
      this.isPostEdit = true;
      this.isTimeline = false;
      this.isPost_btn = false;
    },
    sendPost(payload) {
      this.$store.dispatch("timeline/PostSingleAction", payload);
      this.postBack();
    }
  },
  computed: mapState({
    farmers: state => state.farmers,
    timeline: state => state.timeline,
    login: state => state.login
  })
};
</script>



<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>