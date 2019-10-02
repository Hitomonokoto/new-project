<template>
  <button class="basic" :class="cls" @click="onClick">
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
.basic {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: red;
}
.checkout_btn {
  width: 90%;
  padding: 10px 0;
  margin-top: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.edit_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.back_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.delete_btn {
  padding: 5px 10px;
  background-color: rgb(253, 99, 99);
}
.update_btn {
  padding: 5px 10px;
  background-color: rgb(99, 209, 253);
}
.send_btn {
  padding: 5px 10px;
  background-color: rgb(99, 209, 253);
}
</style>