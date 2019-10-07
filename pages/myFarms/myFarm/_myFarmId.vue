<template>
  <main>
    <mainImage :src="imgUrl" alt />
    <div class="box">
      <div class="box_left">
        <h2 class="farmer-title">{{ product.title }}</h2>
        <div class="myFarm_content" v-html="product.descriptionHtml"></div>
      </div>
      <div class="box_right">
        <div
          class="aboutFarmer"
          v-if="$store.state.farmers.farmerByMyfarm.length"
        >
          <h3>生産者を知る</h3>
          <nuxt-link
            class="farmer"
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
        <basicButton cls="checkout_btn" @emitClick="checkout">種主になる</basicButton>
      </div>
    </div>
  </main>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import mainImage from "~/components/MainImage";

//その他
import { mapState } from "vuex";
import getProduct from "~/apollo/gql/getProduct";
import checkoutCreate from "~/apollo/gql/checkoutCreate";

export default {
  components: {
    mainImage,
    basicButton
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
.box_left {
  width: 70%;
}
.box_right {
  width: 30%;
}
.aboutFarmer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.farmer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.farmer_img {
  width: 80%;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
}
</style>
