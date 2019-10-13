<template>
  <div class="story">
    <h3>種主になって応援する</h3>
    <nuxt-link
      class="product"
      :to="'/products/product/'+$store.state.products.productsByfarmer[0].sys.id"
    >
      <img
        class="product_img"
        :src="$store.state.products.productsByfarmer[0].fields.image.fields.file.url"
        alt
      />
    </nuxt-link>
    <P>{{$store.state.products.productsByfarmer[0].fields.farmName}}</P>
    <linkButton
      cls="top_myfarm"
      :linkTo="'/products/product/'+$store.state.products.productsByfarmer[0].sys.id"
      text="詳細ページへ"
    />
  </div>
</template>



<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
export default {
  components: {
    linkButton
  }
};
</script>



<style scoped>
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