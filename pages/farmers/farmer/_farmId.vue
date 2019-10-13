<template>
  <main>
    <mainImage :src="this.farmers.farmer.fields.mainImage.fields.file.url" alt />
    <h1 class="farm_name">{{ this.farmers.farmer.fields.farmName }}</h1>
    <h2 class="farmer_name">{{ this.farmers.farmer.fields.farmerName }}</h2>
    <story :content="this.farmers.farmer.fields.content" />
    <products v-if="$store.state.products.productsByfarmer.length" />
    <timeline :posts="this.$store.state.timeline.selectPosts" />
  </main>
</template>

<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import story from "~/components/farmer/Story";
import products from "~/components/farmer/Products";
import timeline from "~/components/timeline/Timeline";

// その他
import { mapState } from "vuex";

export default {
  components: {
    mainImage,
    story,
    products,
    timeline
  },
  data() {
    return {
      products: []
    };
  },
  async fetch({ params, store }) {
    await store.dispatch("farmers/getFarmerAction", params);
  },
  async created() {
    await this.$store.dispatch(
      "products/getProductsByfarmerAction",
      this.farmers.farmer.fields.farmId
    );
    console.log(this.farmers.farmer.fields.farmId);
    await this.$store.dispatch(
      "timeline/getSelectPostsAction",
      this.farmers.farmer.fields.farmId
    );
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
.aboutFarmer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product_img {
  display: block;
  width: 50%;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
</style>
