<template>
  <main>
    <mainImage url="/mainImage/top-img.jpg" />
    <div>
      <linkButton
        v-show="!this.$store.state.login.token"
        cls="top_myfarm"
        linkTo="/aboutMyFarm"
        text="初めての方はこちら"
      />
    </div>

    <div v-show="!isPost" class="myfarm_contents">
      <h2>新着・オススメの体験銘柄</h2>
      <p>創り手の畑を所有し、モノづくりの過程を楽しみながら創り手を応援しましょう！</p>
      <myFarm :products="this.products.products" />
      <linkButton cls="top_myfarm" linkTo="/products" text="もっと見る" />
    </div>
    <h2>タイムライン</h2>
    <p>創り手の畑を所有し、モノづくりの過程を楽しみながら創り手を応援しましょう！</p>
    <timeline
      v-if="isTimeline"
      :posts="this.$store.state.timeline.posts"
      @post="post"
      @post_edit="post_edit"
    />
    <post v-if="isPost" @emitBack="postBack" />
    <postEdit
      v-if="isPostEdit"
      @editBack="editBack"
      :post_data="this.post_data"
    />
  </main>
</template>



<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import myFarm from "~/components/MyFarm";
import linkButton from "~/components/LinkButton";
import timeline from "~/components/timeline/Timeline";
import post from "~/components/timeline/Post";
import postEdit from "~/components/timeline/PostEdit";

// その他
import { mapState } from "vuex";

export default {
  components: {
    mainImage,
    myFarm,
    linkButton,
    timeline,
    post,
    postEdit
  },
  data() {
    return {
      isLogin: false,
      isTimeline: true,
      isPost: false,
      isPostEdit: false,
      post_data: ""
    };
  },
  async fetch({ store }) {
    await store.dispatch("timeline/getPostsAction");
    await store.dispatch("products/getProductsAction");
  },
  methods: {
    post() {
      this.isTimeline = false;
      this.isPost = true;
    },
    postBack() {
      this.isPost = false;
      this.isTimeline = true;
    },
    editBack() {
      this.isTimeline = true;
      this.isPostEdit = false;
    },
    post_edit(post_data) {
      this.post_data = post_data;
      this.isPostEdit = true;
      this.isTimeline = false;
    },
    pageInit() {
      this.isLogin = false;
      this.isTimeline = true;
      this.isPost = false;
      this.isPostEdit = false;
      this.post_data = "";
    }
  },
  computed: mapState({ products: "products" }, { timeline: "timeline" })
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
</style>
