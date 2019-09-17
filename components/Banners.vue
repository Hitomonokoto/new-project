<template>
  <div class="banners">
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
    <router-link to="/aboutUs">
      <div class="banner">
        <img src="/bannerImage/damy3.jpg" />
        <h3>私たちについて</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkName: this.text
    };
  }
};
</script>

<style scoped>
.banner {
  position: relative;
}
.banner > img {
  width: 380px;
  margin-top: 10px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
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
