<template>
  <main>
    <mainImage url="/mainImage/mainDamy1.jpg" />
    <div class="box">
      <div class="box_left">
        <h3
          v-if="this.shopify.myFarms.length"
        >{{ this.shopify.myFarms.length }}件のマイファームが見つかりました。</h3>
        <h3 v-if="!this.shopify.myFarms.length">マイファームが見つかりませんでした。</h3>

        <div v-if="this.shopify.myFarms.length" class="myFarms">
          <nuxt-link
            v-for="(myFarm, index) in this.shopify.myFarms"
            :to="'/myFarms/myFarm/' + myFarm.node.id"
            class="myFarm"
            :key="index"
          >
            <div class="farmer_img">
              <img
                class="main_img"
                :src="myFarm.node.images.edges[0].node.originalSrc"
              />
            </div>
            <div class="myFarm_text">
              <h2>{{ myFarm.node.title }}</h2>
              <p>{{ myFarm.node.productType }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="box_right">
        <div class="prefectures">
          <h3>地域から探す</h3>
          <prefectureIndex page="/myFarms/" />
        </div>
        <div class="foods">
          <h3>作物から探す</h3>
          <foodIndex page="/myFarms/" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
//コンポーネント
import mainImage from "~/components/MainImage";
import foodIndex from "~/components/FoodIndex";
import prefectureIndex from "~/components/PrefectureIndex";

export default {
  components: {
    mainImage,
    foodIndex,
    prefectureIndex
  },
  data() {
    return {};
  },
  async fetch({ params, store }) {
    await store.dispatch("shopify/getProductsAction", params.serchId);
  },
  computed: mapState({ shopify: "shopify" })
};
</script>

<style scoped>
main {
  width: 1000px;
}
.main_contents {
  display: flex;
}
.box_left {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box_right {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
}
.myFarm {
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
}
.farmer_img {
  width: 300px;
}
.farmer_img > img {
  width: 100%;
  border-radius: 5px 0 0 5px;
}
.myFarm_text {
  width: 360px;
}
</style>