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
.top_myfarm {
  color: white;
  background-color: green;
  padding: 5px 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.foget_pass {
  color: #707070;
}
.type2 {
  background-color: green;
  padding: 5px 20px;
}
.about_myfarm {
  color: white;
  background-color: rgb(255, 211, 68);
  padding: 5px 20px;
  margin-bottom: 50px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.partner_btn {
  color: white;
  background-color: rgb(255, 211, 68);
  padding: 5px 20px;
  margin-bottom: 50px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.acount {
  background-color: rgb(148, 247, 247);
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 12px;
}
</style>