<template>
  <main>
    <h2>Gift</h2>
    <img class="gift_icon" src="~/assets/gift.svg" alt />
    <p>豊さを味わう</p>
    <p class="top_text">
      ーーーーー３〜５行程度の簡単な説明文が入りますーーーー
      <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーー
      <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーー
      <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーー
      <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーー
    </p>
    <div class="products">
      <div
        class="product"
        v-for="(product, index) in this.products.products"
        :to="'/products/product/'+product.sys.id"
        :key="index"
      >
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
        <nuxt-link :to="'/products/product/'+product.sys.id">
          <div class="product_img">
            <img :src="product.fields.mainImage.fields.file.url" />
            <div class="checkout">
              <img src="~/assets/gift.svg" />
            </div>
          </div>
          <div class="product_page">
            <p>詳細ページへ</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
// その他
import { mapState } from "vuex";
import getProducts from "~/apollo/gql/getProducts";

export default {
  components: {},
  async fetch({ store }) {
    await store.dispatch("products/getProductsAction");
  },
  head: {
    title: "生産者紹介"
  },
  computed: mapState({ products: "products" })
};
</script>

<style scoped>
.gift_icon {
  width: 100px;
}
.top_text {
  margin-bottom: 50px;
}
.products {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.product {
  width: 29.3%;
  display: flex;
  flex-direction: column;
  margin: 2%;
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
.checkout {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: white;
  box-shadow: 0px 0px 6px gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkout > img {
  height: 30px;
}
.product_page {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
  background-color: lightgray;
}
.farm_icon {
  display: block;
  width: 50px;
  border-radius: 5px;
  margin: 5px;
}
</style>