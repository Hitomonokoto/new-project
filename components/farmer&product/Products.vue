<template>
  <div class="products">
    <h3>種主になって応援する</h3>
    <nuxt-link
      class="product"
      :to="'/products/product/'+products.productsByfarmer[0].sys.id"
    >
      <img
        class="product_img"
        :src="products.productsByfarmer[0].fields.mainImage.fields.file.url"
        alt
      />
    </nuxt-link>
    <P>{{products.productsByfarmer[0].fields.productName}}</P>
    <linkButton
      cls="top_myfarm"
      :linkTo="'/products/product/'+products.productsByfarmer[0].sys.id"
      text="詳細ページへ"
    />
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
  display: block;
  width: 50%;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
</style>