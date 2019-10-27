<template>
  <div class="story">
    <h2 class="farm_name">{{ this.farmers.farmer.fields.farmName }}</h2>
    <h3 class="farmer_name">{{ this.farmers.farmer.fields.farmerName }}</h3>
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
.story {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.farm_name {
  margin-bottom: 20px;
}
.farmer_name {
  margin-bottom: 50px;
}
.content {
  text-align: center;
  padding: 0 20px;
}
</style>