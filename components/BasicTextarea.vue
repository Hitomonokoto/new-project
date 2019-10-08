<template>
  <textarea
    class="basic"
    :class="cls"
    :placeholder="placeholder"
    @input="updateValue"
  ></textarea>
</template>

<script>
export default {
  props: {
    cls: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style scoped>
.basic {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #efefef;
}
.info {
  width: 600px;
  height: 400px;
  margin-top: 5px;
  margin-bottom: 20px;
}
.unsubscribe {
  width: 600px;
  height: 200px;
  margin-top: 5px;
  margin-bottom: 20px;
}
</style>