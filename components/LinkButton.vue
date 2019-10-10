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
.login {
  width: 380px;
  background-color: rgb(255, 211, 68);
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  padding: 20px 0;
  margin-top: 20px;
  text-align: center;
  color: white;
}
.unsub {
  margin-bottom: 100px;
}
</style>