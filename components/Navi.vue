<template>
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
    <nuxt-link to="/aboutUs">
      <p class="nav_p">私たちについて</p>
    </nuxt-link>
    <nuxt-link to="/info">
      <p class="nav_p">お問い合わせ</p>
    </nuxt-link>
  </div>
</template>



<style scoped>
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
</style>