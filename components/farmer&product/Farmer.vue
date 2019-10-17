<template>
  <div class="aboutFarmer" v-if="farmers.farmerByMyfarm.length">
    <h3>創り手について</h3>
    <nuxt-link
      class="link_area"
      :to="'/farmers/farmer/'+farmers.farmerByMyfarm[0].sys.id"
    >
      <img
        class="farmer_img"
        :src="farmers.farmerByMyfarm[0].fields.mainImage.fields.file.url"
        alt
      />
      <P>{{farmers.farmerByMyfarm[0].fields.farmName}}</P>
    </nuxt-link>

    <linkButton
      cls="top_myfarm"
      :linkTo="'/farmers/farmer/'+farmers.farmerByMyfarm[0].sys.id"
      text="この創り手のページに行く"
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
}
.link_area {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.farmer_img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
</style>