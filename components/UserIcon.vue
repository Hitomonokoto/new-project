<template>
  <img class="basic" :class="cls" :src="url" />
</template>



<script>
export default {
  props: {
    cls: {
      type: String
    },
    url: {
      type: String
    }
  }
};
</script>

<style scoped>
.basic {
  display: block;
}
.mydata_icon {
  width: 80px;
  border-radius: 5px;
  margin: 10px;
}
.user_page_icon {
  display: block;
  width: 120px;
  border-radius: 5px;
  margin: 5px;
}
@media screen and (max-width: 960px) {
  .user_page_icon {
    width: 120px;
    margin: 4px;
  }
}
@media screen and (max-width: 560px) {
  .user_page_icon {
    width: 60px;
    margin: 3px;
  }
}
.post_icon {
  width: 50px;
  border-radius: 10%;
  margin-right: 10px;
}
.commenter_icon {
  width: 50px;
  border-radius: 50%;
  margin-left: 10px;
}
.commenter_icon_i {
  width: 50px;
  border-radius: 50%;
  margin: 0 10px 20px 10px;
}
.send_comment_icon {
  width: 50px;
  border-radius: 50%;
}
.senb_post_icon {
  display: flex;
  align-items: center;
  width: 50px;
  border-radius: 10%;
}
.post_form_icon {
  width: 50px;
  border-radius: 10%;
  margin-right: 10px;
}
.post_edit_icon {
  width: 50px;
  border-radius: 10%;
  margin-right: 10px;
}
</style>