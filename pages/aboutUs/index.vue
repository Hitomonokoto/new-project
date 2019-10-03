<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <h2>私たちについて</h2>
      <p>
        このページは運営側（株式会社ヒトとモノとコト）の紹介ページになります。
        <br />このサービスの意義や自分たちの目指す世界などといった
        <br />自分たちのWhy meを語るページになります。
        <br />
        <br />HTMLとSCCのみの静的なページになるため、
        <br />ページ作成を後回しにしています。
      </p>
    </div>
    <div class="box"></div>
  </main>
</template>

<script>
import mainImage from "~/components/MainImage";

export default {
  components: {
    mainImage
  }
};
</script>
<style scoped>
.page_top > p {
  margin-bottom: 200px;
  text-align: center;
}
</style>