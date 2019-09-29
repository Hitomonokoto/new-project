<template>
  <div class="products">
    <nuxt-link
      v-for="(myFarm,index) in this.myFarms"
      :to="'/myFarms/myFarm/' + myFarm.node.id"
      :key="index"
    >
      <div class="product">
        <img :src="myFarm.node.images.edges[0].node.originalSrc" />
        <p>{{myFarm.node.title}}</p>
      </div>
    </nuxt-link>
  </div>
</template>



<script>
//その他
import { mapState } from "vuex";

export default {
  props: {
    myFarms: {
      type: Array
    }
  },
  computed: mapState({ shopify: "shopify" })
};
</script>



<style scoped>
.products {
  display: flex;
  justify-content: center;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
}
img {
  width: 180px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  border-radius: 5px;
}
</style>