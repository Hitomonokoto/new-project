<template>
  <div class="container">
    <div class="pc_navi" id="pc_navi">
      <pcNavi />
    </div>
    <div class="mobile_navi" id="mobile_navi">
      <mobileNavi @closeNavi="closeNavi" />
    </div>
    <mobileMenuButton v-show="isBtn" @openNavi="openNavi" />
    <nuxt />
  </div>
</template>

<script>
import pcNavi from "~/components/navi/PcNavi";
import mobileNavi from "~/components/navi/MobileNavi";
import mobileMenuButton from "~/components/navi/MobileMenuButton";
mobileMenuButton;
export default {
  components: {
    pcNavi,
    mobileNavi,
    mobileMenuButton
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
  font-family: "Hepta Slab", serif;
}
.container {
  display: flex;
}
.pc_navi {
  width: 190px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
}
.mobile_navi {
  display: none;
}
@media screen and (max-width: 960px) {
  .container {
    flex-direction: column;
  }
  .pc_navi {
    width: 100%;
  }
}
@media screen and (max-width: 560px) {
  .container {
    position: relative;
  }
  .pc_navi {
    display: none;
  }
}

/* これより下は全ページ共通のCSS */

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  padding: 20px 0;
  text-align: center;
}
h2 {
  padding: 20px 0;
  text-align: center;
}
h3 {
  padding: 20px 0;
  text-align: center;
}
</style>
