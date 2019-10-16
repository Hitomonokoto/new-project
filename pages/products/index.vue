<template>
  <main>
    <h2>マイファームを探す</h2>
    <p class="top_text">
      ーーーーー３〜５行程度の簡単な説明文が入りますーーーー
      <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーー
      <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーー
      <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーー
      <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーー
    </p>
    <div class="products">
      <div
        v-for="(product, index) in this.products.products"
        :to="'/products/product/'+product.sys.id"
        class="product"
        :key="index"
      >
        <nuxt-link
          :to="'/products/product/'+product.sys.id"
          class="product_img"
        >
          <img :src="product.fields.image.fields.file.url" />
        </nuxt-link>

        <div class="product_text">
          <nuxt-link
            :to="'/products/product/'+product.sys.id"
            class="product_info"
          >
            <p>{{ product.fields.title }}</p>
            <p>{{ product.fields.farmName }}</p>
            <p>{{ product.fields.summary }}</p>
          </nuxt-link>
          <div class="actions">
            <nuxt-link
              :to="'/products/product/'+product.sys.id"
              class="read_more"
            >
              <p>詳細ページへ</p>
            </nuxt-link>
            <div class="checkout">
              <p>購入する</p>
            </div>
          </div>
        </div>
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
.top_text {
  margin-bottom: 50px;
}
.products {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product {
  width: 80%;
  display: flex;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
.product_img {
  width: 50%;
}
.product_img > img {
  width: 100%;
  border-radius: 5px 0 0 5px;
  display: block;
}
.product_text {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.product_info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.actions {
  width: 100%;
  display: flex;
}
.read_more {
  width: 70%;
  height: 50px;
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.checkout {
  width: 30%;
  height: 50px;
  background-color: rgb(255, 80, 153);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px;
}
</style>