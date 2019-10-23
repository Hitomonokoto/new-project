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
}
@media screen and (max-width: 960px) {
  img {
    width: 100%;
    display: block;
    margin: 0;
  }
}
</style>