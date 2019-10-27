<template>
  <div class="products">
    <h2 class="home_title">Gift</h2>
    <p class="home_sub_title">豊さを味わう</p>
    <nuxt-link
      class="product"
      :to="'/products/product/'+products.productsByfarmer[0].sys.id"
    >
      <div class="product_img">
        <img
          :src="products.productsByfarmer[0].fields.mainImage.fields.file.url"
        />
        <iconAndTextButton cls="checkout_btn" text="購入する" icon="gift_w" />
      </div>
    </nuxt-link>
    <P class="product_name">{{products.productsByfarmer[0].fields.productName}}</P>
    <linkButton
      cls="product_btn"
      :linkTo="'/products/product/'+products.productsByfarmer[0].sys.id"
      text="詳しく見る"
    />
    <iconAndTextButton cls="about_gift_btn" text="ギフトとは" icon="gift_pink" />
  </div>
</template>



<script>
// コンポーネント
import linkButton from "~/components/LinkButton";

// その他
import { mapState } from "vuex";

export default {
  components: {
    linkButton
  },
  computed: mapState({
    products: state => state.products
  })
};
</script>



<style scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product_img {
  width: 50%;
  position: relative;
  margin-bottom: 20px;
}
.product_img > img {
  width: 100%;
  display: block;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
.product_name {
  margin-bottom: 30px;
}
@media screen and (max-width: 960px) {
  .product_img {
    width: 60%;
  }
}
@media screen and (max-width: 560px) {
  .product_img {
    width: 80%;
  }
}
</style>