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
  background-color: #b5c97c;
  cursor: pointer;
  display: inline;
}
.login {
  padding: 5px 20px;
  border-radius: 5px;
}
.beginner_btn {
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 2%;
  background-color: #f4b3ca;
  font-size: 14px;
}
.top_products {
  color: #b5c97c;
  border: 2px solid #b5c97c;
  padding: 5px 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
}
.foget_pass_btn {
  color: #707070;
  background-color: transparent;
  margin-bottom: 50px;
}
.regist_btn {
  color: #b5c97c;
  background-color: transparent;
  padding: 5px 20px;
  margin-bottom: 50px;
  border-radius: 5px;
  border: 2px solid #b5c97c;
}
.partner_btn {
  padding: 5px 20px;
  margin-bottom: 50px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.acount {
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 12px;
}
.unsub {
  margin-bottom: 100px;
}
</style>