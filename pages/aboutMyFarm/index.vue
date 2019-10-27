<template>
  <main>
    <h1 class="page_title">ショクタメについて</h1>
    <p class="description">
      このページはパートナー登録に誘導するために、
      <br />このサービスについての説明やパートナーになるメリットや
      <br />特典などの説明をするページになります。
      <br />
      <br />HTMLとSCCのみの静的なページになるため、
      <br />ページ作成を後回しにしています。
      <br />
      <br />下のボタンから登録フォームにアクセス出来ます。
    </p>
    <linkButton cls="partner_btn" linkTo="/regist" text="ファミリーになる" />
  </main>
</template>

<script>
import mainImage from "~/components/MainImage";
import linkButton from "~/components/LinkButton";

export default {
  components: {
    mainImage,
    linkButton
  }
};
</script>
<style scoped>
.page_top > p {
  margin-bottom: 200px;
  text-align: center;
}
</style>