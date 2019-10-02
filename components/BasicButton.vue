<template>
  <button :class="cls" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    cls: {
      type: String
    }
  },
  methods: {
    onClick() {
      this.$emit("emitClick");
    }
  }
};
</script>

<style scoped>
</style>