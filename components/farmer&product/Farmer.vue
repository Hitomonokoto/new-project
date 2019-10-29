<template>
  <div class="aboutFarmer" v-if="farmers.farmer">
    <h3 class="farmer_title">創り手について</h3>
    <div class="content">
      <div class="farmer_img">
        <img :src="farmers.farmer.fields.farmerIcon.fields.file.url" alt />
      </div>
      <div class="text_area">
        <P
          class="farmer_name"
        >{{farmers.farmer.fields.farmName}} / {{farmers.farmer.fields.farmerName}}</P>
        <div class="summary" v-html="farmers.farmer.fields.summary"></div>
      </div>
    </div>

    <linkButton
      cls="readmore_btn"
      :linkTo="'/farmers/farmer/'+farmers.farmer.sys.id"
      text="もっと知る"
    />
  </div>
</template>



<script>
// コンポーネント
import linkButton from "~/components/LinkButton";

// その他
import { mapState } from "vuex";

export default {
  components: {
    linkButton
  },
  computed: mapState({
    farmers: state => state.farmers
  })
};
</script>



<style scoped>
.aboutFarmer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.content {
  width: 80%;
  display: flex;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
  padding: 20px;
  margin-bottom: 30px;
}
.text_area {
  width: 80%;
  padding-left: 20px;
}
.farmer_title {
  margin-bottom: 20px;
}
.farmer_name {
  margin-bottom: 20px;
  font-weight: bold;
}
.summary {
  width: 100%;
}
.link_area {
  width: 20%;
}
.farmer_img {
  width: 20%;
}
.farmer_img > img {
  width: 100%;
  border-radius: 5px;
}
@media screen and (max-width: 960px) {
}
@media screen and (max-width: 560px) {
  .content {
    width: 95%;
    padding: 10px;
  }
  .text_area {
    padding-left: 10px;
  }
}
</style>