<template>
  <div class="description">
    <h2 class="product_name">{{ products.product.fields.productName }}</h2>
    <div class="content" v-html="products.product.fields.description"></div>
  </div>
</template>



<script>
// コンポーネント
import linkButton from "~/components/LinkButton";
//その他
import { mapState } from "vuex";
export default {
  components: {
    linkButton
  },
  computed: mapState({ products: "products" })
};
</script>



<style scoped>
.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  width: 80%;
}
.product_name {
  margin-bottom: 20px;
}
.content {
  width: 80%;
}
@media screen and (max-width: 960px) {
  .content {
    width: 100%;
  }
}
@media screen and (max-width: 560px) {
  .description {
    width: 100%;
  }
  .content {
    width: 100%;
    padding: 0 20px;
  }
}
</style>