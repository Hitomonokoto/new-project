<template>
  <img :class="cls" :src="url" />
</template>



<script>
export default {
  props: {
    url: {
      type: String
    },
    cls: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>



<style scoped>
.basic {
  width: 80%;
  display: block;
  margin: 30px 0;
  box-shadow: 0px 0px 6px #d1d1d1;
}
.top_img {
  width: 70%;
  display: block;
  margin: 80px 0;
  box-shadow: 0px 0px 6px #d1d1d1;
}
@media screen and (max-width: 960px) {
  .basic {
    width: 100%;
    display: block;
    margin: 0;
    box-shadow: none;
    margin-bottom: 0;
  }
}
</style>