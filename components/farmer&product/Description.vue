<template>
  <div class="description">
    <h2 class="product_name">{{ products.product.fields.productName }}</h2>
    <div class="myFarm_content" v-html="products.product.fields.description"></div>
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
}
</style>