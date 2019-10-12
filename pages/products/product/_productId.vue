<template>
  <main>
    <mainImage :src="this.products.product.fields.image.fields.file.url" />
    <h2 class="farmer-title">{{ this.products.product.fields.title }}</h2>
    <basicButton cls="checkout_btn" @emitClick="checkout">種主になる</basicButton>
    <div
      class="myFarm_content"
      v-html="this.products.product.fields.description"
    ></div>
    <basicButton cls="checkout_btn" @emitClick="checkout">種主になる</basicButton>
    <div class="aboutFarmer" v-if="$store.state.farmers.farmerByMyfarm.length">
      <h3>生産者を知る</h3>
      <nuxt-link
        class="link_area"
        :to="'/farmers/farmer/'+$store.state.farmers.farmerByMyfarm[0].sys.id"
      >
        <img
          class="farmer_img"
          :src="$store.state.farmers.farmerByMyfarm[0].fields.mainImage.fields.file.url"
          alt
        />
        <P>{{$store.state.farmers.farmerByMyfarm[0].fields.farmName}}</P>
      </nuxt-link>

      <linkButton
        cls="top_myfarm"
        :linkTo="'/farmers/farmer/'+$store.state.farmers.farmerByMyfarm[0].sys.id"
        text="この生産者のページに行く"
      />
    </div>
  </main>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import linkButton from "~/components/LinkButton";
import mainImage from "~/components/MainImage";

//その他
import { mapState } from "vuex";
import getProduct from "~/apollo/gql/getProduct";
import checkoutCreate from "~/apollo/gql/checkoutCreate";

export default {
  components: {
    mainImage,
    basicButton,
    linkButton
  },
  data() {
    return {
      product_id: ""
    };
  },
  async created() {
    this.$store.dispatch(
      "farmers/getFarmerByMyfarmAction",
      this.products.product.fields.farmId
    );
    const data = await this.$apollo.query({
      query: getProduct,
      variables: {
        productId: this.products.product.fields.productId
      }
    });
    this.product_id = data.data.node.variants.edges[0].node.id;
  },
  async fetch({ params, store }) {
    await store.dispatch("products/getProductAction", params);
  },
  methods: {
    async checkout() {
      const xxx = await this.$apollo.mutate({
        mutation: checkoutCreate,
        variables: {
          variantId: this.product_id
        }
      });
      const webUrl = xxx.data.checkoutCreate.checkout.webUrl;
      window.location.href = webUrl;
    }
  },
  computed: mapState({ products: "products" })
};
</script>

<style scoped>
.aboutFarmer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.link_area {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.farmer_img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
</style>