<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
    </div>

    <div class="box">
      <div class="box_left">
        <p
          v-if="this.farmers.farmers.length"
        >{{ this.farmers.farmers.length }}組の生産者さんが見つかりました。</p>
        <p v-if="!this.farmers.farmers.length">生産者さんが見つかりませんでした。</p>
        <div v-if="this.farmers.farmers.length" class="farmers">
          <nuxt-link
            v-for="(farmer, index) in this.farmers.farmers"
            :to="'/farmers/farmer/'+farmer.sys.id"
            class="farmer"
            :key="index"
          >
            <div class="farmer_img">
              <img :src="farmer.fields.mainImage.fields.file.url" />
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
//コンポーネント
import mainImage from "~/components/MainImage";
import myFarm from "~/components/MyFarm";
import foodIndex from "~/components/FoodIndex";
import prefectureIndex from "~/components/PrefectureIndex";

//その他
import { mapState } from "vuex";

export default {
  components: {
    mainImage,
    myFarm,
    foodIndex,
    prefectureIndex
  },
  async fetch({ params, store }) {
    await store.dispatch("farmers/getFarmersSerchAction", params);
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

.farmer_text {
  width: 360px;
}
.box_right {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: cornsilk;
}
</style>
