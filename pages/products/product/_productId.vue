<template>
  <main>
    <mainImage :src="Products.product.fields.mainImage.fields.file.url" />
    <div class="top_checkout_area">
      <span @click="checkout">
        <iconAndTextButton
          cls="product_page_checkout_btn"
          text="購入する"
          icon="gift_w"
        />
      </span>
    </div>
    <description />
    <farmer />
    <div class="bottom_checkout_area">
      <h3 class="checkout_title">Gift</h3>
      <p class="checkout_sub_title">豊さを味わう</p>
      <p class="checkout_product_name">{{ Products.product.fields.productName }}</p>
      <p class="checkout_price">12,000円/年</p>
      <basicButton cls="checkout_btn" @emitClick="checkout">購入する</basicButton>
    </div>
    <iconAndTextButton cls="about_gift_btn" text="ギフトとは" icon="gift_pink" />
  </main>
</template>

<script>
// コンポーネント
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
.top_checkout_area {
  width: 80%;
  position: relative;
}

.bottom_checkout_area {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
  margin-bottom: 50px;
}
.checkout_title {
  margin-top: 20px;
  margin-bottom: 10px;
}
.checkout_sub_title {
  margin-bottom: 30px;
}
.checkout_product_name {
  margin-bottom: 5px;
}
.checkout_price {
  margin-bottom: 20px;
}
@media screen and (max-width: 960px) {
  .top_checkout_area {
    width: 100%;
  }
}
@media screen and (max-width: 560px) {
  .bottom_checkout_area {
    width: 90%;
  }
}
</style>