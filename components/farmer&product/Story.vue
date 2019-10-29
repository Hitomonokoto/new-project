<template>
  <div class="story">
    <h2 class="home_title">Story</h2>
    <div class="line_area">
      <hr class="line" />
      <p class="home_sub_title">想いを共有する</p>
      <hr class="line" />
    </div>
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
.line_area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.line {
  width: 50px;
  margin: 0 10px;
}
.story {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  width: 80%;
}
.farm_name {
  margin-bottom: 20px;
}
.farmer_name {
  margin-bottom: 50px;
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
  .story {
    width: 100%;
  }
  .content {
    width: 100%;
    padding: 0 20px;
  }
}
</style>