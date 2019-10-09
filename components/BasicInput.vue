<template>
  <input
    class="basic"
    :class="cls"
    :type="type"
    :placeholder="placeholder"
    @input="updateValue"
    :style="fontSize"
  />
</template>

<script>
export default {
  props: {
    cls: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    fontSize: {
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
  border: 1px solid #ccc;
  background-color: #efefef;
  padding: 10px;
}
.info {
  width: 600px;
  margin-top: 5px;
  margin-bottom: 20px;
}
.login {
  width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.edit_user_name {
  width: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 5px;
}
.edit_email {
  width: 405px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.edit_nickname {
  width: 300px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.regist_type1 {
  width: 200px;
  margin-top: 5px;
  margin-bottom: 20px;
}
.regist_type2 {
  width: 405px;
  margin-bottom: 20px;
}
.post_title {
  margin-bottom: 10px;
  width: 100%;
  border: none;
  border-radius: 0;
  font-size: 18px;
}
</style>