<template>
  <div class="navi_single">
    <img class="icon icon_b" :src="'/naviIcon/'+icon_b+'.svg'" alt />
    <img class="icon icon_w" :src="'/naviIcon/'+icon_w+'.svg'" alt />
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // cls: {
    //   type: String
    // },
    icon_b: {
      type: String
    },
    icon_w: {
      type: String
    },
    text: {
      type: String
    }
  }
};
</script>

<style scoped>
.navi_single {
  cursor: pointer;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.navi_single:hover {
  background-color: #b5c97c;
}
.navi_single:hover .text {
  color: white;
}
.navi_single:hover .icon_b {
  display: none;
}
.navi_single:hover .icon_w {
  display: inline;
}
.icon {
  width: 24px;
  margin-left: 50px;
  margin-right: 10px;
}
.icon_w {
  display: none;
}
@media screen and (max-width: 960px) {
  .navi_single {
    justify-content: center;
  }
  .icon {
    margin-left: 0;
  }
}
@media screen and (max-width: 560px) {
  .navi_single {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon_b {
    margin: 5px 0;
    width: 20px;
  }
  .text {
    margin-bottom: 5px;
    font-size: 12px;
  }
}
</style>