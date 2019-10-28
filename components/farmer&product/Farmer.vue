<template>
  <div class="aboutFarmer" v-if="farmers.farmer">
    <h3 class="farmer_title">創り手について</h3>
    <nuxt-link class="link_area" :to="'/farmers/farmer/'+farmers.farmer.sys.id">
      <img
        class="farmer_img"
        :src="farmers.farmer.fields.farmerIcon.fields.file.url"
        alt
      />
    </nuxt-link>
    <P class="farmer_name">{{farmers.farmer.fields.farmName}}</P>
    <div class="summary" v-html="farmers.farmer.fields.summary"></div>
    <linkButton
      cls="partner_btn"
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
  margin-bottom: 100px;
}
.farmer_title {
  margin-bottom: 20px;
}
.farmer_name {
  margin-bottom: 20px;
}
.summary {
  width: 60%;
  /* text-align: center; */
  margin-bottom: 20px;
  border-radius: 5px;
  /* box-shadow: 0px 0px 6px #d1d1d1;
  padding: 10px; */
}
.link_area {
  width: 30%;
}
.farmer_img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
@media screen and (max-width: 960px) {
  .summary {
    /* text-align: center; */
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 560px) {
  .link_area {
    width: 50%;
  }
  .summary {
    width: 95%;
    /* text-align: center; */
    margin-bottom: 20px;
  }
}
</style>