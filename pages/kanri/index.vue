<template>
  <div>
    <button @click="getProduct">click</button>
    <div v-for="(product, index) in this.products" :key="index">
      {{product.node.id}}
      {{product.node.title}}
      <p>-------------------</p>
    </div>
  </div>
</template>

<script>
import getProducts from "~/apollo/gql/getProducts";

export default {
  data() {
    return {
      products: ""
    };
  },
  methods: {
    async getProduct() {
      alert("okokok");
      const data = await this.$apollo.query({
        query: getProducts
      });
      console.log(data);
      this.products = data.data.products.edges;
    }
  }
};
</script>

<style scoped>
button {
  width: 300px;
  height: 100px;
  background-color: salmon;
}
</style>