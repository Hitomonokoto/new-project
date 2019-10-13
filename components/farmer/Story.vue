<template>
  <div class="content" v-html="content"></div>
</template>



<script>
// コンポーネント

export default {
  components: {},
  props: {
    content: {
      type: String
    }
  }
};
</script>



<style scoped>
.content {
  text-align: center;
  padding: 0 20px;
}
</style>