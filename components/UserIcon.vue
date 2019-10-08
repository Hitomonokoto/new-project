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
.mydata_icon {
  width: 80px;
  border-radius: 5px;
  margin: 10px;
}
.user_page_icon {
  display: block;
  border-radius: 5px;
  margin: 5px;
}
.post_icon {
  width: 50px;
  border-radius: 10%;
}
.commenter_icon {
  width: 50px;
  border-radius: 50%;
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
</style>