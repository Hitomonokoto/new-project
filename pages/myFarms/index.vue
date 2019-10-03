<template>
  <main>
    <div class="page_top">
      <mainImage url="mainImage/mainDamy1.jpg" />
      <h2>マイファームを探す</h2>
      <div class="myfarm-about-text">
        ーーーーーマイファーム（有料会員）についての詳細ーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />
      </div>
    </div>

    <div class="box">
      <div v-if="this.products.length" class="myFarms">
        <nuxt-link
          v-for="(product, index) in this.products"
          :to="'/myFarms/myFarm/' + product.node.id"
          class="myFarm"
          :key="index"
        >
          <div class="farmer_img">
            <img :src="product.node.images.edges[0].node.originalSrc" />
          </div>
          <div class="myFarm_text">
            <h2>{{ product.node.title }}</h2>
            <p>{{ product.node.productType }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
import mainImage from "~/components/MainImage";

// その他
import { mapState } from "vuex";
import getProducts from "~/apollo/gql/getProducts";

export default {
  components: {
    mainImage
  },
  data() {
    return {
      products: []
    };
  },
  async created() {
    const data = await this.$apollo.query({
      query: getProducts
    });
    this.products = data.data.products.edges;
  },
  computed: mapState({ shopify: "shopify" })
};
</script>

<style scoped>
.myFarms {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.myFarm {
  width: 80%;
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
}
.farmer_img {
  width: 50%;
}
.farmer_img > img {
  width: 100%;
  border-radius: 5px 0 0 5px;
  display: block;
}
.myFarm_text {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>