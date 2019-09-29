<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />

      <div class="box">
        <div class="box_left">
          <div v-show="!isPost" class="myFarm_contents">
            <h2>新着・オススメのマイファーム</h2>
            <myFarm :myFarms="this.products" />
            <linkButton cls="type1" linkTo="/myFarms" text="もっと見る" />
          </div>

          <timeline v-if="isTimeline" @post="post" @post_edit="post_edit" />
          <post v-if="isPost" @emitBack="postBack" />
          <postEdit
            v-if="isPostEdit"
            @editBack="editBack"
            :post_data="this.post_data"
          />
        </div>
        <div class="box_right">
          <myData v-if="$store.state.login.token" @pageInit="pageInit" />
          <banners v-if="!$store.state.login.token" />
        </div>
      </div>
    </div>
  </main>
</template>


<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import banners from "~/components/Banners";
import myData from "~/components/user/MyData";
import myFarm from "~/components/MyFarm";
import linkButton from "~/components/LinkButton";
import timeline from "~/components/timeline/Timeline";
import post from "~/components/timeline/Post";
import postEdit from "~/components/timeline/PostEdit";

import getProducts from "~/apollo/gql/getProducts";

export default {
  components: {
    mainImage,
    banners,
    myData,
    myFarm,
    linkButton,
    timeline,
    post,
    postEdit
  },
  data() {
    return {
      products: [],
      isLogin: false,
      isTimeline: true,
      isPost: false,
      isPostEdit: false,
      post_data: ""
    };
  },
  async fetch({ store }) {
    await store.dispatch("timeline/getPostsAction");
  },
  async created() {
    const data = await this.$apollo.query({
      query: getProducts
    });
    this.products = data.data.products.edges;
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
  }
};
</script>



<style scoped>
.box_left {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box_right {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
