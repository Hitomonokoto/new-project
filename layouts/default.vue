<template>
  <div class="container">
    <div class="nav">
      <div class="nav_sticky">
        <nuxt-link to="/">
          <img class="nav_logo_img" src="~/assets/mainlogo2.png" alt />
        </nuxt-link>
        <nuxt-link to="/">
          <p class="nav_p">ホーム</p>
        </nuxt-link>
        <nuxt-link to="/myFarms">
          <p class="nav_p">マイファームを探す</p>
        </nuxt-link>
        <nuxt-link to="/farmers">
          <p class="nav_p">生産者紹介</p>
        </nuxt-link>
        <nuxt-link to="/login">
          <p class="nav_p_sub">ログイン</p>
        </nuxt-link>
        <a href="https://c-hitomonokoto.jp/about/">
          <p class="nav_p_sub">私たちについて</p>
        </a>
        <nuxt-link to="/info">
          <p class="nav_p_sub">お問い合わせ</p>
        </nuxt-link>
        <nuxt-link to="/aboutMyFarm">
          <p class="nav_p_sub">パートナーになる</p>
        </nuxt-link>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import linkButton from "~/components/LinkButton";

export default {
  components: {
    linkButton
  }
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
body {
  background-color: lightgrey;
}
.container {
  display: flex;
  justify-content: center;
}
.nav {
  width: 200px;
  background-color: rgb(246, 255, 220);
}
.nav_sticky {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav_logo_img {
  width: 100px;
  margin: 30px 0 60px 0;
}
.nav_p {
  padding-bottom: 30px;
  color: rgb(75, 94, 19);
}
.nav_p_sub {
  color: rgb(75, 94, 19);
}
main {
  width: 1000px;
  background-color: white;
}

.box {
  display: flex;
  justify-content: center;
}
.page_top {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  padding: 20px 0;
}
h3 {
  padding: 20px 0;
}
</style>
