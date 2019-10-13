<template>
  <div class="story">
    <h1 class="farm_name">{{ this.farmers.farmer.fields.farmName }}</h1>
    <h2 class="farmer_name">{{ this.farmers.farmer.fields.farmerName }}</h2>
    <div class="content" v-html="content"></div>
  </div>
</template>



<script>
// コンポーネント
// その他
import { mapState } from "vuex";
export default {
  components: {},
  props: {
    content: {
      type: String
    }
  },
  computed: mapState({ farmers: "farmers" })
};
</script>



<style scoped>
.content {
  text-align: center;
  padding: 0 20px;
}
</style>