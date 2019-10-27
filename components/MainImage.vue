<template>
  <img :src="url" />
</template>



<script>
export default {
  props: {
    url: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>



<style scoped>
img {
  width: 80%;
  display: block;
  margin: 30px 0;
  box-shadow: 0px 0px 6px #d1d1d1;
}
@media screen and (max-width: 960px) {
  img {
    width: 100%;
    display: block;
    margin: 0;
    box-shadow: none;
    margin-bottom: 20px;
  }
}
</style>