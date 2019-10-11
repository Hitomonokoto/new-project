<template>
  <div class="mobile_menu_btn" @click="emitClick">
    <div class="outline">
      <img class="nav_logo_img" src="~/assets/mainlogo2.png" alt />
      <p>Menu</p>
    </div>
  </div>
</template>



<script>
export default {
  methods: {
    emitClick() {
      this.$emit("openNavi");
    }
  }
};
</script>

<style scoped>
.mobile_menu_btn {
  display: none;
}
.outline {
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 3px #797979;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
@media screen and (max-width: 560px) {
  .mobile_menu_btn {
    display: inline;
  }
}
img {
  width: 50px;
}
p {
  font-size: 12px;
}
</style>