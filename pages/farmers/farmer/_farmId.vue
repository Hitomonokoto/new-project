<template>
  <main>
    <img
      class="top_img"
      :src="this.farmers.farmer.fields.mainImage.fields.file.url"
      alt
    />
    <div class="main_contents">
      <div class="main_left">
        <div class="single">
          <h1 class="farmer-title">{{ this.farmers.farmer.fields.farmName }}</h1>
          <h2 class="farmer-title">{{ this.farmers.farmer.fields.farmerName }}</h2>
          <div
            class="farmer-content"
            v-html="$md.render(this.farmers.farmer.fields.content)"
          ></div>
        </div>
      </div>
      <div class="main_right"></div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import mainImage from "~/components/MainImage";
import myFarm from "~/components/MyFarm";

export default {
  components: {
    mainImage,
    myFarm
  },
  async fetch({ params, store }) {
    await store.dispatch("farmers/getFarmerAction", params);
  },
  computed: mapState({ farmers: "farmers" }),
  head() {
    return {
      title: this.farmers.farmer.fields.title
    };
  }
};
</script>

<style scoped>
.navi_container {
  background-color: lightseagreen;
}
main {
  width: 1000px;
}
.top_img {
  width: 1000px;
}

.main_contents {
  display: flex;
}
.main_left {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightpink;
}

.myFarm_contents {
  display: flex;
  justify-content: center;
}
.main_right {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
}
</style>
