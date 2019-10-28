<template>
  <div class="follower_area">
    <h2 class="follower_title">フォローしている創り手</h2>
    <div class="follower_list">
      <nuxt-link
        v-for="(follower, index) in Farmers.followerData"
        :to="'/farmers/farmer/'+follower.sys.id"
        class="follower"
        :key="index"
      >
        <img
          class="follow_img"
          :src="follower.fields.farmerIcon.fields.file.url"
        />
        <p class="follow_name">{{ follower.fields.farmName }}</p>
      </nuxt-link>
    </div>
    <div class="no_follower" v-if="!Farmers.followerData.length">
      <p class="no_follower_text">
        フォローしている創り手がいません。
        <br />お気に入りの創り手をフォローして繋がりましょう。
      </p>
      <linkButton cls="farmer_search" linkTo="/farmers" text="創り手を探す" />
    </div>
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
  methods: {
    unsubscribe() {
      this.$router.push("/unsubscribe");
    },
    editProfile() {
      this.$emit("emitEditProfile");
    }
  },
  computed: mapState({
    Login: state => state.login,
    Farmers: state => state.farmers
  })
};
</script>

<style scoped>
.follower_area {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
.follower_list {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
}
.follower {
  width: 21%;
  margin: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.follow_img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #d1d1d1;
}
.no_follower {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.no_follower_text {
  text-align: center;
  font-size: 14px;
  margin-bottom: 30px;
}
@media screen and (max-width: 960px) {
  .follower_list {
    width: 95%;
  }
  .follower {
    width: 29.3%;
    margin: 2%;
  }
}
@media screen and (max-width: 560px) {
  .follower_area {
    width: 95%;
  }
  .follower {
    width: 46%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .follow_img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 6px #d1d1d1;
  }
}
</style>