<template>
  <main>
    <div class="page_top">
      <mainImage url="mainImage/mainDamy1.jpg" />
      <h2>マイファームについて</h2>
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
      <linkButton cls="type2" linkTo="/regist" text="パートナーになる" />
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