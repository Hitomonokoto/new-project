<template>
  <div>
    <button @click="variant">variant</button>
    <button @click="checkout">ckick</button>
  </div>
</template>

<script>
import checkoutCreate from "~/apollo/gql/checkoutCreate";
import test from "~/apollo/gql/test";

export default {
  data: () => ({}),
  // apollo: {
  //   products: {
  //     query: getProducts,
  //     update: ({ products }) => products.edges
  //   },
  //   product: {
  //     query: getProduct,
  //     update: ({ node }) => node,
  //     variables: {
  //       productId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQwMzY1MTE3OTMyNTU="
  //     }
  //   }
  // },
  methods: {
    async variant() {
      const yyy = await this.$apollo.mutate({
        mutation: test
        // variables: {
        //   input: {
        //     email,
        //     password
        //   }
        // }
      });
      console.log(yyy);
    },

    async checkout() {
      const xxx = await this.$apollo.mutate({
        mutation: checkoutCreate
        // variables: {
        //   input: {
        //     email,
        //     password
        //   }
        // }
      });
      console.log(xxx);
    }
  }
};
</script>

<style scoped>
img {
  width: 300px;
}
</style>