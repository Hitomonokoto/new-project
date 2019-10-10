<template>
  <textarea
    class="basic"
    v-model="oldText"
    :class="cls"
    :placeholder="placeholder"
    @input="updateValue"
    style="font-size:16px;"
    ref="adjust_textarea"
    @keydown="adjustHeight"
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
    },
    text: {
      type: String
    }
  },
  data() {
    return {
      oldText: this.text
    };
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    },
    adjustHeight() {
      const textarea = this.$refs.adjust_textarea;
      const resetHeight = new Promise(function(resolve) {
        resolve((textarea.style.height = "auto"));
      });
      resetHeight.then(function() {
        textarea.style.height = textarea.scrollHeight + "px";
      });
    }
  }
};
</script>

<style scoped>
.basic {
}
.write_comment {
  border-radius: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #efefef;
  width: 70%;
  margin-left: 10px;
}
.post_text {
  width: 100%;
  padding: 10px;
  border: none;
}
</style>