<template>
  <main>
    <img class="top_img" :src="imgUrl" alt />
    <div class="box">
      <div class="box_left">
        <div class="single">
          <h2 class="farmer-title">{{ product.title }}</h2>
          <div class="myFarm_content" v-html="product.descriptionHtml"></div>
        </div>
      </div>
      <div class="box_right">
        <div class="farmer" v-if="$store.state.farmers.farmerByMyfarm.length">
          <h3>生産者を知る</h3>
          <nuxt-link
            :to="'/farmers/farmer/'+$store.state.farmers.farmerByMyfarm[0].sys.id"
          >
            <img
              class="farmer_img"
              :src="$store.state.farmers.farmerByMyfarm[0].fields.mainImage.fields.file.url"
              alt
            />
            <P>{{$store.state.farmers.farmerByMyfarm[0].fields.farmName}}</P>
          </nuxt-link>
        </div>
        <div class="purchase">
          <button @click="checkout">種主になる</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import mainImage from "~/components/MainImage";

//その他
import getProduct from "~/apollo/gql/getProduct";
import checkoutCreate from "~/apollo/gql/checkoutCreate";

export default {
  components: {
    mainImage
  },
  data() {
    return {
      product: "",
      imgUrl: null,
      variant: null
    };
  },
  async created() {
    const data = await this.$apollo.query({
      query: getProduct,
      variables: {
        productId: this.$route.params.myFarmId
      }
    });
    this.product = data.data.node;
    this.imgUrl = data.data.node.images.edges[0].node.originalSrc;
    this.variant = data.data.node.variants.edges[0].node;
    this.$store.dispatch(
      "farmers/getFarmerByMyfarmAction",
      this.product.productType
    );
  },
  methods: {
    async checkout() {
      const xxx = await this.$apollo.mutate({
        mutation: checkoutCreate,
        variables: {
          variantId: this.variant.id
        }
      });
      const webUrl = xxx.data.checkoutCreate.checkout.webUrl;
      window.location.href = webUrl;
    }
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
.box_right {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
}
.farmer_img {
  width: 200px;
}
</style>
