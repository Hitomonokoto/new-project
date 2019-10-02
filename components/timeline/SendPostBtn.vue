<template>
  <div @click="onClick" class="posts">
    <div class="user">
      <div class="user_icon">
        <img src="samplein.jpg" alt />
      </div>
      <p>投稿する</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit("emitClick");
    }
  }
};
</script>

<style scoped>
.posts {
  width: 580px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  margin-bottom: 20px;
  display: flex;
}
.user {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
}
.user_icon > img {
  display: flex;
  align-items: center;
  width: 50px;
  border-radius: 10%;
}
.user > p {
  padding-left: 10px;
}
</style>
