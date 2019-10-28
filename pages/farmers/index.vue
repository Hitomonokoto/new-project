<template>
  <main>
    <h1 class="page_title">Farmer</h1>
    <p class="sub_title">豊さを繋ぐひと</p>
    <p class="description">
      九州を5週周り、
      <br />500人以上の生産者に出会いました。
      <br />
      <br />価値だけでは表現することの出来ない"モノの価値"。
      <br />
      <br />夢を描く素敵な方々を紹介致します。
    </p>
    <div class="farmers">
      <nuxt-link
        v-for="(farmer, index) in this.farmers.farmers"
        :to="'/farmers/farmer/'+farmer.sys.id"
        class="farmer"
        :key="index"
      >
        <img class="farmer_img" :src="farmer.fields.farmerIcon.fields.file.url" />

        <div class="farmer_info">
          <p class="farm_name">{{ farmer.fields.farmName }}</p>
          <p class="farmer_name">{{ farmer.fields.farmerName }}</p>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>



<script>
//コンポーネント
import myFarm from "~/components/MyFarm";

//その他
import { mapState } from "vuex";

export default {
  components: {
    myFarm
  },
  async fetch({ store }) {
    await store.dispatch("farmers/getFarmersAction");
  },
  head: {
    title: "生産者紹介"
  },
  computed: mapState({ farmers: "farmers" }),
  head() {
    return {
      title: "創り手一覧 | ショクタメ"
    };
  }
};
</script>



<style scoped>
.farmers {
  width: 95%;
  display: flex;
  flex-wrap: wrap;
}
.farmer {
  width: 21%;
  margin: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.farmer_img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
.farmer_info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.farm_name {
  font-weight: bold;
}
.farmer_name {
  font-size: 14px;
}
@media screen and (max-width: 960px) {
  .farmer {
    width: 29.3%;
    margin: 2%;
  }
}
@media screen and (max-width: 560px) {
  .farmers {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .farmer {
    width: 90%;
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: row;
  }
  .farmer_img {
    width: 40%;
  }
  .farmer_info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }
}
</style>
