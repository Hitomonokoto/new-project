<template>
  <div class="nav_sticky">
    <div class="nav_logo_area">
      <nuxt-link to="/">
        <img class="nav_logo_img" src="~/assets/mainlogo2.png" alt />
      </nuxt-link>
    </div>
    <div class="nav_list">
      <nuxt-link to="/">
        <p class="nav_p">ホーム</p>
      </nuxt-link>
      <nuxt-link to="/myFarms">
        <p class="nav_p">マイファームを探す</p>
      </nuxt-link>
      <nuxt-link to="/farmers">
        <p class="nav_p">生産者紹介</p>
      </nuxt-link>
      <nuxt-link v-if="!$store.state.login.token" to="/login">
        <p class="nav_p">ログイン</p>
      </nuxt-link>
      <nuxt-link v-if="$store.state.login.token" to="/user">
        <p class="nav_p">マイページ</p>
      </nuxt-link>
      <nuxt-link to="/info">
        <p class="nav_p">お問い合わせ</p>
      </nuxt-link>
    </div>
  </div>
</template>



<style scoped>
.nav_sticky {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: cent;
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