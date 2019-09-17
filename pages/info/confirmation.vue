<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <h2>確認画面</h2>
      <p class="info_text">お問い合わせ内容に誤りがないかご確認ください。</p>
    </div>
    <div class="page_top">
      <div>
        <dl>
          <dt>お名前</dt>
          <dd>aaajdfnloubfdsgl;jnbsdfgkjnlajsdkbg;kasbd;glknasd;gjn;alsdbg;ads</dd>
        </dl>
        <dl>
          <dt>メールアドレス</dt>
          <dd>sss</dd>
        </dl>
        <dl>
          <dt>タイトル</dt>
          <dd>ddd</dd>
        </dl>
        <dl>
          <dt>お問い合わせ内容</dt>
          <dd>fff</dd>
        </dl>
      </div>
      <linkButton cls="type1" linkTo="/myFarm" text="送信する" />
    </div>
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
img {
  width: 100%;
}
.info_text {
  text-align: center;
}
dt {
  text-align: left;
}
</style>