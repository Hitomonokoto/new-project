<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
    </div>

    <div class="box">
      <div class="box_left">
        <h2 class="page_title">こだわりの創り手</h2>
        <p>
          九州を４週周り、
          <br />350人以上の作り手に出会いました。
          <br />価値だけでは表現することの出来ない"モノの価値"。
          <br />そんなこだわりのある創り手を紹介します。
        </p>
        <div v-if="this.farmers.farmers.length" class="farmers">
          <nuxt-link
            v-for="(farmer, index) in $store.state.farmers.farmers"
            :to="'farmers/farmer/'+farmer.sys.id"
            class="farmer"
            :key="index"
          >
            <div class="farmer_img">
              <img
                class="main_img"
                :src="farmer.fields.mainImage.fields.file.url"
              />
            </div>

            <div class="farmer_text">
              <h2>{{ farmer.fields.farmName }}</h2>
              <p>{{ farmer.fields.farmerName }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="box_right">
        <h3>地域から探す</h3>
        <prefectureIndex page="/farmers/" />

        <h3>作物から探す</h3>
        <foodIndex page="/farmers/" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import mainImage from "~/components/MainImage";
import myFarm from "~/components/MyFarm";
import foodIndex from "~/components/FoodIndex";
import prefectureIndex from "~/components/PrefectureIndex";

export default {
  components: {
    mainImage,
    myFarm,
    foodIndex,
    prefectureIndex
  },
  async fetch({ store }) {
    await store.dispatch("farmers/getFarmersAction");
  },
  head: {
    title: "生産者紹介"
  },
  computed: mapState({ farmers: "farmers" })
};
</script>

<style scoped>
.box_left {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box_left > p {
  padding: 20px 0 40px 0;
  text-align: center;
}
.farmer {
  display: flex;
  background-color: white;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
}
.farmer_img {
  width: 300px;
}
.farmer_img > img {
  height: 100%;
  border-radius: 5px 0 0 5px;
}
.main_img {
  width: 100%;
}
.farmer_text {
  width: 360px;
}
.myFarm_contents {
  display: flex;
  justify-content: center;
}
.box_right {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: cornsilk;
}
</style>
