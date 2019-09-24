<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />

      <div class="box">
        <div class="box_left">
          <div v-show="!isPost" class="myFarm_contents">
            <h2>新着・オススメのマイファーム</h2>
            <myFarm />
            <linkButton cls="type1" linkTo="/myFarms" text="もっと見る" />
          </div>

          <timeline v-show="!isPost" @post="post" />
          <post v-if="isPost" @emitBack="back" @emitSendPost="back" />
        </div>
        <div class="box_right">
          <myData v-if="$store.state.login.token" />
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
import myData from "~/components/MyData";
import myFarm from "~/components/MyFarm";
import linkButton from "~/components/LinkButton";
import timeline from "~/components/Timeline";
import post from "~/components/Post";

export default {
  components: {
    mainImage,
    banners,
    myData,
    myFarm,
    linkButton,
    timeline,
    post
  },
  data() {
    return {
      isLogin: false,
      isPost: false,
      test: null
    };
  },
  async fetch({ store }) {
    await store.dispatch("timeline/getPostsAction");
    await store.dispatch("shopify/getProductsAction");
  },
  methods: {
    post() {
      this.isPost = true;
    },
    back() {
      this.isPost = false;
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
