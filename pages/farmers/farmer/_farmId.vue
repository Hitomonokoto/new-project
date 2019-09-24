<template>
  <main>
    <img
      class="top_img"
      :src="this.farmers.farmer.fields.mainImage.fields.file.url"
      alt
    />
    <div class="box">
      <div class="box_left">
        <div class="single">
          <h1 class="farmer-title">{{ this.farmers.farmer.fields.farmName }}</h1>
          <h2 class="farmer-title">{{ this.farmers.farmer.fields.farmerName }}</h2>
          <div
            class="farmer-content"
            v-html="$md.render(this.farmers.farmer.fields.content)"
          ></div>
        </div>
      </div>
      <div class="box_right">
        <div class="products">
          <h3>マイファーム</h3>
          <nuxt-link
            :to="'/myFarms/myFarm/'+product.node.id"
            v-for="(product, index) in products"
            :key="index"
          >
            <img
              class="product_img"
              :src="product.node.images.edges[0].node.originalSrc"
              alt
            />
            <p>{{ product.node.title }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import myFarm from "~/components/MyFarm";

// その他
import { mapState } from "vuex";
import GetProducts from "~/apollo/gql/GetProducts";

export default {
  components: {
    mainImage,
    myFarm
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
    const data = await this.$apollo.query({
      query: GetProducts
    });
    console.log(data.data.products.edges);
    this.products = data.data.products.edges.filter(d => {
      return d.node.productType === this.farmers.farmer.fields.farmName;
    });
    console.log(this.products);
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
.box_left {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.farmer-content {
  text-align: center;
  padding: 0 20px;
}
.box_right {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
}
.product_img {
  width: 200px;
}
</style>
