<template>
  <main>
    <mainImage :src="this.farmers.farmer.fields.mainImage.fields.file.url" alt />
    <h1 class="farm_name">{{ this.farmers.farmer.fields.farmName }}</h1>
    <h2 class="farmer_name">{{ this.farmers.farmer.fields.farmerName }}</h2>
    <div class="content" v-html="this.farmers.farmer.fields.content"></div>

    <div
      class="aboutFarmer"
      v-if="$store.state.products.productsByfarmer.length"
    >
      <h3>生産者を知る</h3>
      <nuxt-link
        class="product"
        :to="'/products/product/'+$store.state.products.productsByfarmer[0].sys.id"
      >
        <img
          class="product_img"
          :src="$store.state.products.productsByfarmer[0].fields.image.fields.file.url"
          alt
        />
      </nuxt-link>
      <P>{{$store.state.products.productsByfarmer[0].fields.farmName}}</P>
      <linkButton
        cls="top_myfarm"
        :linkTo="'/products/product/'+$store.state.products.productsByfarmer[0].sys.id"
        text="この生産者のページに行く"
      />
    </div>
  </main>
</template>

<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import linkButton from "~/components/LinkButton";

// その他
import { mapState } from "vuex";

export default {
  components: {
    mainImage,
    linkButton
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
    this.$store.dispatch(
      "products/getProductsByfarmerAction",
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
.content {
  text-align: center;
  padding: 0 20px;
}
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
.products {
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
