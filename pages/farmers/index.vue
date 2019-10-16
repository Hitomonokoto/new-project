<template>
  <main>
    <h2>こだわりの創り手</h2>
    <p class="top_text">
      九州を４週周り、
      <br />350人以上の作り手に出会いました。
      <br />価値だけでは表現することの出来ない"モノの価値"。
      <br />そんなこだわりのある創り手を紹介します。
    </p>
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
          <div class="farmer_info">
            <p>{{ farmer.fields.farmName }}</p>
            <p>{{ farmer.fields.farmerName }}</p>
          </div>
          <div class="read_more">
            <p>詳細ページへ</p>
          </div>
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
  computed: mapState({ farmers: "farmers" })
};
</script>



<style scoped>
.top_text {
  padding: 20px 0 40px 0;
  text-align: center;
}
.farmers {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.farmer {
  width: 80%;
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
.farmer_img {
  width: 50%;
}
.farmer_img > img {
  width: 100%;
  border-radius: 5px 0 0 5px;
  display: block;
}
.farmer_text {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.farmer_info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.read_more {
  width: 100%;
  height: 50px;
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 0;
}
</style>
