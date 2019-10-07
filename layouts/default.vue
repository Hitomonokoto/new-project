<template>
  <div class="container">
    <div class="nav">
      <navi />
    </div>
    <nuxt />
  </div>
</template>

<script>
import navi from "~/components/Navi";

export default {
  components: {
    navi
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
.container {
  display: flex;
}
.nav {
  width: 300px;
  background-color: rgb(246, 255, 220);
}

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
</style>
