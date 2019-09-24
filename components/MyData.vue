<template>
  <div class="myData">
    <div class="myData_sticky">
      <div class="myInfo">
        <img src="/samplein.jpg" alt />
        <!-- <p>{{ $store.state.login.user_2.nickname }}さん</p> -->
        <p>yuppiさん</p>
      </div>
      <linkButton cls="type2" linkTo="/myFarms" text="アカウント管理" />
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
  computed: mapState({ shopify: "shopify" })
};
</script>

<style scoped>
.myData {
  width: 380px;
  height: 100%;
  margin-top: 10px;
}
.myData_sticky {
  position: sticky;
  top: 0;
}
.myInfo {
  display: flex;
  align-items: center;
  margin: 5px 0;
  background-color: aqua;
}
.myInfo > img {
  width: 100px;
  border-radius: 5px;
  margin-right: 5px;
}
</style>