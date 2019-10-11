<template>
  <img :src="url" />
</template>



<script>
export default {
  props: {
    url: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>



<style scoped>
img {
  width: 100%;
  display: block;
}
@media screen and (max-width: 960px) {
  img {
    margin-top: 150px;
  }
}
@media screen and (max-width: 560px) {
  img {
    margin-top: 0;
  }
}
</style>