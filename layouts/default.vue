<template>
  <div class="container">
    <div class="pc_navi">
      <pcNavi />
    </div>
    <nuxt />
  </div>
</template>

<script>
import pcNavi from "~/components/navi/PcNavi";

export default {
  components: {
    pcNavi
  },
  data() {
    return {
      isOpen: false
    };
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
}
/* .tablet_navi {
  display: none;
} */
/* これより下は全ページ共通のCSS */

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  width: 100%;
  display: flex;
  justify-content: center;
}
.box_left {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width幅は各ページで設定 */
}
.box_right {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width幅は各ページで設定 */
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

@media screen and (max-width: 1100px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .pc_navi {
    width: 100%;
  }
}

/* @media screen and (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .pc_navi {
    display: none;
  }
} */
</style>
