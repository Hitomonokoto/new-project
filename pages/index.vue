<template>
  <main>
    <mainImage url="/mainImage/top-img.jpg" />
    <div>
      <linkButton v-show="!login.token" cls="beginner" linkTo="/aboutMyFarm" text="初めての方はこちら" />
    </div>
    <div v-show="!isPost" class="myfarm_contents">
      <h2>Gift</h2>
      <img class="gift_icon" src="~/assets/gift.svg" alt />
      <p>豊さを味わう</p>
      <myFarm :products="this.products.products" />
      <linkButton cls="top_products" linkTo="/products" text="もっと見る" />
    </div>
    <h2>Diary</h2>
    <img class="heart_icon" src="~/assets/heart.svg" alt />
    <p>日々を楽しむ</p>
    <div class="post_btn" v-if="isPost_btn && login.user_2">
      <sendPostBtn v-if="login.user_2.user_type == 1" @emitClick="post" />
    </div>
    <timeline
      v-if="isTimeline"
      :posts="timeline.posts"
      timeline_type="all"
      @post="post"
      @post_edit="post_edit"
    />
    <post v-if="isPost" @emitBack="postBack" timeline_type="all" />
    <postEdit
      v-if="isPostEdit"
      @editBack="editBack"
      :post_data="this.post_data"
      timeline_type="all"
    />
  </main>
</template>



<script>
//test
// コンポーネント
import mainImage from "~/components/MainImage";
import myFarm from "~/components/MyFarm";
import linkButton from "~/components/LinkButton";
import timeline from "~/components/timeline/Timeline";
import post from "~/components/timeline/Post";
import postEdit from "~/components/timeline/PostEdit";
import sendPostBtn from "~/components/timeline/SendPostBtn";

// その他
import { mapState } from "vuex";

export default {
  components: {
    mainImage,
    myFarm,
    linkButton,
    timeline,
    post,
    postEdit,
    sendPostBtn
  },
  data() {
    return {
      isLogin: false,
      isTimeline: true,
      isPost: false,
      isPost_btn: true,
      isPostEdit: false,
      post_data: "",
      ttt: null
    };
  },
  async fetch({ store }) {
    await store.dispatch("timeline/getPostsAction", { timeline_type: "all" });
    await store.dispatch("products/getProductsAction");
  },
  created() {
    if (this.login.token) {
      this.$store.dispatch(
        "timeline/getLikesAction",
        this.login.user_2.user_id
      );
    }
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
    pageInit() {
      this.isLogin = false;
      this.isTimeline = true;
      this.isPost = false;
      this.isPostEdit = false;
      this.isPost_btn = true;
      this.post_data = "";
    }
  },
  computed: mapState({
    products: state => state.products,
    login: state => state.login,
    timeline: state => state.timeline
  })
};
</script>



<style scoped>
.myfarm_contents {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.myfarm_contents > p {
  margin-bottom: 20px;
  padding: 0 10px;
}
.gift_icon {
  width: 100px;
}
.heart_icon {
  width: 100px;
}
</style>
