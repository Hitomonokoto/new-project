<template>
  <div class="products">
    <div
      class="product"
      v-for="(product,index) in this.products"
      :to="'/products/product/'+product.sys.id"
      :key="index"
    >
      <div>
        <div class="title_area">
          <div class="info">
            <nuxt-link :to="'/farmers/farmer/'+product.fields.farmId">
              <img
                class="farm_icon"
                :src="product.fields.farmerIcon.fields.file.url"
              />
            </nuxt-link>

            <div class="name_area">
              <nuxt-link :to="'/farmers/farmer/'+product.fields.farmId">
                <p class="farm_name">{{product.fields.farmName}}</p>
              </nuxt-link>
              <nuxt-link :to="'/products/product/'+product.sys.id">
                <p class="product_name">{{product.fields.productName}}</p>
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="product_img">
          <img :src="product.fields.mainImage.fields.file.url" />
          <span @click="checkout(product.fields.productId)">
            <iconAndTextButton cls="checkout_btn" text="購入する" icon="gift_w" />
          </span>
        </div>
        <nuxt-link :to="'/products/product/'+product.sys.id">
          <div class="product_page">
            <p class="product_page_text">詳細ページへ</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>



<script>
import firebase from "~/plugins/firebase";
require("firebase/firestore");
const db = firebase.firestore();

import getProduct from "~/apollo/gql/getProduct";
import checkoutCreate from "~/apollo/gql/checkoutCreate";

export default {
  props: {
    products: {
      type: Array
    }
  },
  methods: {
    async checkout(productId) {
      const data = await this.$apollo.query({
        query: getProduct,
        variables: {
          productId: productId
        }
      });
      const variant_id = data.data.node.variants.edges[0].node.id;
      const xxx = await this.$apollo.mutate({
        mutation: checkoutCreate,
        variables: {
          variantId: variant_id
        }
      });
      const webUrl = xxx.data.checkoutCreate.checkout.webUrl;
      window.location.href = webUrl;
    }
  }
};
</script>



<style scoped>
.products {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}
.product {
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  box-shadow: 0px 0px 6px #d1d1d1;
  border-radius: 5px;
}
.info {
  display: flex;
  align-items: center;
}
.farm_name {
  font-size: 12px;
  margin-bottom: 5px;
}
.product_name {
  font-size: 14px;
  font-weight: bold;
}
.product_img {
  width: 100%;
  position: relative;
}
.product_img > img {
  width: 100%;
  display: block;
}
.product_page {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
  background-color: rgb(235, 235, 235);
}
.product_page:hover {
  background-color: #b5c97c;
}
.product_page_text {
  color: rgb(100, 100, 100);
}
.product_page:hover .product_page_text {
  color: white;
}
.farm_icon {
  display: block;
  width: 50px;
  border-radius: 5px;
  margin: 5px;
}
@media screen and (max-width: 960px) {
  .products {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product {
    width: 60%;
    margin-bottom: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px #d1d1d1;
  }
}
@media screen and (max-width: 560px) {
  .product {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 5px;
  }
}
</style>