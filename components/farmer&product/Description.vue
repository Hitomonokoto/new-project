<template>
  <div class="description">
    <h2 class="farmer-title">{{ this.products.product.fields.title }}</h2>
    <div
      class="myFarm_content"
      v-html="this.products.product.fields.description"
    ></div>
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