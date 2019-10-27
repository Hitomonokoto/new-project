<template>
  <div class="products">
    <div
      class="product"
      v-for="(product,index) in this.products"
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

      <div class="product_img">
        <img :src="product.fields.mainImage.fields.file.url" />
        <iconAndTextButton cls="checkout_btn" text="購入する" icon="gift_w" />
      </div>
      <nuxt-link :to="'/products/product/'+product.sys.id">
        <div class="product_page">
          <p class="product_page_text">詳細ページへ</p>
        </div>
      </nuxt-link>
    </div>
    <!-- <basicButton @emitClick="update">更新</basicButton> -->
  </div>
</template>



<script>
import firebase from "~/plugins/firebase";
require("firebase/firestore");
const db = firebase.firestore();

export default {
  props: {
    products: {
      type: Array
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