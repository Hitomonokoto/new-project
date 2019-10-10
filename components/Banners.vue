<template>
  <div class="banners">
    <div class="banners_sticky">
      <linkButton cls="login" linkTo="/login" text="ログイン" />
      <router-link to="/aboutMyFarm">
        <div class="banner">
          <img src="/bannerImage/damy1.jpg" />
          <h3>マイファームとは</h3>
        </div>
      </router-link>
      <router-link to="/farmers">
        <div class="banner">
          <img src=/bannerImage/damy2.jpg />
          <h3>生産者紹介</h3>
        </div>
      </router-link>
      <nuxt-link to="/aboutUs">
        <div class="banner">
          <img src="/bannerImage/damy3.jpg" />
          <h3>私たちについて</h3>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import linkButton from "~/components/LinkButton";

export default {
  components: {
    linkButton
  },
  data() {
    return {
      linkName: this.text
    };
  }
};
</script>

<style scoped>
.banners {
  height: 100%;
}
.banners_sticky {
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
.banner > img {
  width: 380px;
  margin-top: 20px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  display: block;
}
h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}
</style>
