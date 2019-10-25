<template>
  <main>
    <mainImage :src="Products.product.fields.mainImage.fields.file.url" />
    <div class="checkout_area">
      <div class="checkout" @click="checkout">
        <img src="~/assets/gift.svg" />
      </div>
      <!-- <basicButton cls="checkout_btn" @emitClick="checkout">種主になる</basicButton> -->
    </div>

    <description />
    <farmer />
  </main>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import linkButton from "~/components/LinkButton";
import mainImage from "~/components/MainImage";
import description from "~/components/farmer&product/Description";
import farmer from "~/components/farmer&product/Farmer";

//その他
import { mapState } from "vuex";
import getProduct from "~/apollo/gql/getProduct";
import checkoutCreate from "~/apollo/gql/checkoutCreate";

export default {
  components: {
    mainImage,
    basicButton,
    linkButton,
    description,
    farmer
  },
  data() {
    return {
      product_id: ""
    };
  },
  async fetch({ params, store }) {
    await store.dispatch("products/getProductAction", params);
  },
  async created() {
    this.$store.dispatch(
      "farmers/getFarmerByMyfarmAction",
      this.Products.product.fields.businessId
    );
    const data = await this.$apollo.query({
      query: getProduct,
      variables: {
        productId: this.Products.product.fields.productId
      }
    });
    this.product_id = data.data.node.variants.edges[0].node.id;
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
  computed: mapState({
    Products: state => state.products
  })
};
</script>

<style scoped>
.checkout_area {
  width: 80%;
  position: relative;
}
.checkout {
  width: 80px;
  height: 80px;
  position: absolute;
  top: -120px;
  right: 10px;
  background-color: white;
  box-shadow: 0px 0px 6px gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.checkout > img {
  height: 60px;
}
</style>