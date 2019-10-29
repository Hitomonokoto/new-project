<template>
  <div class="container">
    <div class="pc_navi_area">
      <pcNavi />
    </div>
    <div class="tablet_navi_area">
      <tabletNavi />
    </div>
    <div class="mobile_navi_area">
      <mobileNavi />
    </div>
    <nuxt />
  </div>
</template>

<script>
import pcNavi from "~/components/navi/PcNavi";
import tabletNavi from "~/components/navi/TabletNavi";
import mobileNavi from "~/components/navi/MobileNavi";
export default {
  components: {
    pcNavi,
    tabletNavi,
    mobileNavi
  },
  data() {
    return {
      isBtn: true
    };
  },
  methods: {
    openNavi() {
      this.isBtn = false;
      document.getElementById("mobile_navi").style.display = "inline";
    },
    closeNavi() {
      this.isBtn = true;
      document.getElementById("mobile_navi").style.display = "none";
    }
  }
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
p {
  color: black;
}
.container {
  display: flex;
  width: 100%;
  background-color: rgb(255, 255, 250);
}
.pc_navi_area {
  width: 200px;
}
.tablet_navi_area {
  display: none;
}
.mobile_navi_area {
  display: none;
}
@media screen and (max-width: 960px) {
  .container {
    flex-direction: column;
  }
  .pc_navi_area {
    display: none;
  }
  .tablet_navi_area {
    display: block;
  }
}
@media screen and (max-width: 560px) {
  .tablet_navi_area {
    display: none;
  }
  .mobile_navi_area {
    display: block;
  }
}

/* これより下は全ページ共通のCSS */

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 960px) {
  main {
    margin-top: 150px;
  }
}
@media screen and (max-width: 560px) {
  main {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}
.page_title {
  margin-top: 50px;
  margin-bottom: 20px;
}
.description {
  margin-bottom: 50px;
  text-align: center;
}
.home_title {
  margin-bottom: 10px;
}
.follower_title {
  margin-bottom: 20px;
}
</style>
