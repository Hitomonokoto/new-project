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
  color: white;
  background-color: #b5c97c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.login_btn {
  margin: 10px 0;
  width: 300px;
  padding: 10px 0px;
}
.checkout_btn {
  padding: 5px 20px;
  margin-bottom: 20px;
  background-color: #f4b3ca;
}
.post_btn {
  padding: 5px 20px;
  margin-bottom: 20px;
  font-size: 14px;
}
.post_edit_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.post_delete_btn {
  background-color: transparent;
  color: red;
  border: none;
  margin: 10px;
}
.post_img_delete_btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: white;
  font-size: 20px;
}
.edit_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.back_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.comment_delete_btn {
  background-color: transparent;
  color: red;
  border: none;
  padding-right: 5px;
}
.update_btn {
  padding: 5px 10px;
}
.send_btn {
  padding: 5px 10px;
}
.info_check_btn {
  padding: 10px 30px;
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
}
.regist_btn {
  padding: 10px 30px;
  margin-bottom: 50px;
  background-color: #f4b3ca;
}
.logout_btn {
  padding: 5px 10px;
  margin: 10px 20px;
  background-color: lightgray;
}
.user_icon_edit_btn {
  padding: 5px 10px;
  background-color: lightgray;
}
.nickname_edit_back_btn {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: lightgray;
}
.nickname_edit_update_btn {
  padding: 5px 10px;
}
.account_edit_btn {
  background-color: transparent;
  color: gray;
}
.basic_info_edit_back_btn {
  padding: 5px 10px;
  margin-right: 5px;
  background-color: lightgray;
}
.basic_info_edit_update_btn {
  padding: 5px 10px;
}
.unsubscribe_back_btn {
  padding: 10px 30px;
  background-color: lightgray;
}
.unsubscribe_btn {
  padding: 10px 30px;
  background-color: rgb(253, 99, 99);
}
.qAndAlink {
  background-color: #efefef;

  font-size: 15px;
  color: #000000;
  cursor: pointer;
  width: 30%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qAndAlink:active {
  background-color: red;
}

.follow_btn {
  position: absolute;
  top: -80px;
  right: 20px;
  background-color: #f4b3ca;
  padding: 10px 30px;
}
.followed_btn {
  position: absolute;
  top: -80px;
  right: 20px;
  background-color: #f88ab0;
  padding: 10px 30px;
}
.acount_btn {
  background-color: transparent;
  color: #303030;
  border: none;
  padding-right: 5px;
}
@media screen and (max-width: 960px) {
  .qAndAlink {
    width: 100%;
    margin-bottom: 30px;
  }
  .follow_btn {
    position: absolute;
    top: -70px;
    right: 20px;
  }
}
@media screen and (max-width: 560px) {
  .follow_btn {
    padding: 10px 10px;
    position: absolute;
    top: -65px;
    right: 10px;
  }
}
</style>