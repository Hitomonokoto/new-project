<template>
  <div>
    <img :src="url" />
    <button>サブメニュー</button>
  </div>
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
div {
  position: relative;
}
img {
  width: 100%;
}
よ button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>