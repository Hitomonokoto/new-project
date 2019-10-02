<template>
  <nuxt-link :to="linkTo">
    <div class="basic" :class="cls">{{ text }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    cls: {
      type: String
    },
    text: {
      type: String
    },
    linkTo: {
      type: String
    }
  }
};
</script>

<style scoped>
.basic {
  color: white;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.top_myfarm {
  background-color: green;
  padding: 5px 20px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.type2 {
  background-color: green;
  padding: 5px 20px;
}
.type3 {
  background-color: rgb(147, 192, 147);
  padding: 5px 20px;
  margin-bottom: 30px;
}
.nav_prof_img {
  background-color: rgb(216, 235, 159);
  color: rgb(75, 94, 19);
  padding: 5px 40px;
}
</style>