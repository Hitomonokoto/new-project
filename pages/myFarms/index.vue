<template>
  <main>
    <div class="page_top">
      <mainImage url="mainImage/mainDamy1.jpg" />
      <h2>マイファームを探す</h2>
      <div class="myfarm-about-text">
        ーーーーーマイファーム（有料会員）についての詳細ーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
        <br />
      </div>
    </div>

    <div class="box">
      <div class="box_left">
        <h3>地域から探す</h3>
        <prefectureIndex page="/myFarms/" />
      </div>
      <div class="box_right">
        <h3>作物から探す</h3>
        <foodIndex page="/myFarms/" />
      </div>
    </div>
  </main>
</template>

<script>
import mainImage from "~/components/MainImage";
import foodIndex from "~/components/FoodIndex";
import prefectureIndex from "~/components/PrefectureIndex";

export default {
  components: {
    mainImage,
    foodIndex,
    prefectureIndex
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.box_left {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightpink;
}

.box_right {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
}
</style>