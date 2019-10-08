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
  width: 80%;
  padding: 10px 0;
  margin-top: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgb(255, 80, 153);
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
.info_check_btn {
  padding: 10px 30px;
  background-color: rgb(99, 209, 253);
  margin-bottom: 50px;
}
.info_back_btn {
  padding: 10px 30px;
  background-color: lightgray;
  margin-bottom: 50px;
}
.info_edit_btn {
  padding: 10px 30px;
  background-color: lightgray;
}
.info_send_btn {
  padding: 10px 30px;
  background-color: rgb(99, 209, 253);
}
.regist_btn {
  padding: 10px 30px;
  background-color: rgb(255, 211, 68);
  margin-bottom: 50px;
}
.acount_btn {
  padding: 5px 10px;
  background-color: rgb(253, 99, 99);
  margin: 10px 20px;
}
.profile_img_edit_btn {
  padding: 5px 10px;
  background-color: rgb(99, 209, 253);
}
.nickname_edit_btn {
  display: block;
  margin-left: auto;
  margin-right: 0;
  background-color: rgb(99, 209, 253);
}
.nickname_edit_back_btn {
  margin-right: 5px;
  background-color: lightgray;
}
.nickname_edit_update_btn {
  background-color: rgb(99, 209, 253);
}
.basic_info_edit_btn {
  display: block;
  margin-left: auto;
  margin-right: 0;
  background-color: rgb(99, 209, 253);
}
.basic_info_edit_back_btn {
  margin-right: 5px;
  background-color: lightgray;
}
.basic_info_edit_update_btn {
  background-color: rgb(99, 209, 253);
}
</style>