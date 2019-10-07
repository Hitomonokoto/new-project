<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <h1>マイファームについて</h1>
      <p>
        このページはパートナー登録に誘導するために、
        <br />このサービスについての説明やパートナーになるメリットや
        <br />特典などの説明をするページになります。
        <br />
        <br />HTMLとSCCのみの静的なページになるため、
        <br />ページ作成を後回しにしています。
        <br />
        <br />下のボタンから登録フォームにアクセス出来ます。
      </p>
      <linkButton cls="partner_btn" linkTo="/regist" text="パートナーになる" />
    </div>
    <div class="box"></div>
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