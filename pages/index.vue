<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <div class="box">
        <div class="box_left">
          <h2>新着・オススメのマイファーム</h2>
          <div class="myFarm_contents">
            <myFarm />
            <myFarm />
            <myFarm />
          </div>
          <linkButton cls="type1" linkTo="/myFarm" text="もっと見る" />
          <h2>新着・オススメのイベント</h2>
          <div class="myFarm_contents">
            <myFarm />
            <myFarm />
            <myFarm />
          </div>
          <linkButton cls="type2" linkTo="/myFarm" text="もっと見る" />
          <h2>タイムライン</h2>
          <button v-if="!isPost" @click="post">投稿する</button>
          <timeline v-if="!isPost" />
          <post v-if="isPost" @emitBack="back" @emitSendPost="back" />
        </div>
        <div class="box_right">
          <banners />
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import mainImage from "~/components/MainImage";
import banners from "~/components/Banners";
import myFarm from "~/components/MyFarm";
import linkButton from "~/components/LinkButton";
import timeline from "~/components/Timeline";
import post from "~/components/Post";

export default {
  components: {
    mainImage,
    banners,
    myFarm,
    linkButton,
    timeline,
    post
  },
  data() {
    return {
      isPost: false
    };
  },
  async fetch({ store }) {
    await store.dispatch("posts/getPostsAction");
    await store.dispatch("comments/getCommentsAction");
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
.myFarm_contents {
  display: flex;
  justify-content: center;
}
.box_right {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
