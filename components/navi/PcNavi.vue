<template>
  <div class="nav_sticky">
    <div class="nav_logo_area">
      <nuxt-link to="/">
        <img class="nav_logo_img" src="~/assets/mainlogo2.png" alt />
      </nuxt-link>
    </div>
    <div class="nav_list">
      <div class="nav_single">
        <nuxt-link to="/">
          <p>ホーム</p>
        </nuxt-link>
      </div>
      <div class="nav_single">
        <nuxt-link to="/myFarms">
          <p>マイファームを探す</p>
        </nuxt-link>
      </div>
      <div class="nav_single">
        <nuxt-link to="/farmers">
          <p>生産者紹介</p>
        </nuxt-link>
      </div>
      <div class="nav_single" v-if="!$store.state.login.token">
        <nuxt-link to="/login">
          <p>ログイン</p>
        </nuxt-link>
      </div>
      <div class="nav_single" v-if="$store.state.login.token">
        <nuxt-link to="/user">
          <p>マイページ</p>
        </nuxt-link>
      </div>
      <div class="nav_single">
        <nuxt-link to="/info">
          <p>お問い合わせ</p>
        </nuxt-link>
      </div>
    </div>
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
.nav_list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  color: black;
  margin-bottom: 40px;
}

@media screen and (max-width: 1100px) {
  .nav_sticky {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav_logo_area {
    width: 100%;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav_logo_img {
    width: 100px;
    margin: 20px 0 20px 0;
  }
  .nav_list {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .nav_single {
    width: 20%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    color: black;
    margin-bottom: 0;
  }
}
</style>