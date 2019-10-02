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
</style>