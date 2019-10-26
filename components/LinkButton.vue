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
  font-size: 14px;
  cursor: pointer;
}
.login {
  padding: 5px 20px;
  border-radius: 5px;
}
.top_products {
  color: #b5c97c;
  background-color: transparent;
  border: 2px solid #b5c97c;
  padding: 5px 20px;
  border-radius: 5px;
}
.foget_pass_btn {
  color: #707070;
  background-color: transparent;
  margin-bottom: 50px;
}
.regist_btn {
  color: #f4b3ca;
  background-color: transparent;
  padding: 5px 20px;
  margin-bottom: 50px;
  border-radius: 5px;
  border: 2px solid #f4b3ca;
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