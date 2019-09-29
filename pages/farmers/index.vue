<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <h2>こだわりの創り手</h2>
      <p class="myfarm-about-text">
        九州を４週周り、
        <br />350人以上の作り手に出会いました。
        <br />価値だけでは表現することの出来ない"モノの価値"。
        <br />そんなこだわりのある創り手を紹介します。
      </p>
    </div>

    <div class="box">
      <div class="farmers">
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
.myfarm-about-text {
  padding: 20px 0 40px 0;
  text-align: center;
}
.farmers {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.myFarm_contents {
  display: flex;
  justify-content: center;
}
</style>
