<template>
  <main>
    <mainImage url="/mainImage/top-img.jpg" />
    <div class="beginner_area">
      <nuxt-link to="/aboutMyFarm">
        <iconAndTextButton
          v-if="!login.token"
          cls="top_beginner_btn"
          text="初めての方はこちら"
          icon="beginner_w"
        />
      </nuxt-link>
    </div>
    <div v-show="isGift" class="myfarm_area">
      <h2 class="home_title">Gift</h2>
      <p class="home_sub_title">豊さを味わう</p>
      <myFarm :products="products.pickupProducts" />
      <linkButton cls="top_products" linkTo="/products" text="もっと見る" />
    </div>
    <div class="timeline_area" v-if="isTimeline">
      <h2 class="home_title">Diary</h2>
      <p class="home_sub_title">日々を楽しむ</p>
      <div class="post_btn" v-if="login.user_2">
        <basicButton
          cls="post_btn"
          v-if="login.user_2.user_type == 1"
          @emitClick="post"
        >Diaryを書く</basicButton>
      </div>
      <timeline
        :posts="timeline.posts"
        timeline_type="all"
        @post="post"
        @post_edit="post_edit"
      />
    </div>

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
      isGift: true,
      isPostEdit: false,
      post_data: "",
      ttt: null
    };
  },
  async fetch({ store }) {
    await store.dispatch("timeline/getPostsAction", { timeline_type: "all" });
    await store.dispatch("products/getPickupProductsAction");
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
      this.isGift = false;
      this.isTimeline = false;
      this.isPost = true;
    },
    postBack() {
      this.isPost = false;
      this.isGift = true;
      this.isTimeline = true;
    },
    editBack() {
      this.isGift = true;
      this.isTimeline = true;
      this.isPostEdit = false;
    },
    post_edit(post_data) {
      this.post_data = post_data;
      this.isPostEdit = true;
      this.isGift = false;
      this.isTimeline = false;
    },
    pageInit() {
      this.isLogin = false;
      this.isGift = true;
      this.isTimeline = true;
      this.isPost = false;
      this.isPostEdit = false;
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
.myfarm_area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
.timeline_area {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
</style>
