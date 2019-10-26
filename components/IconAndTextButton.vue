<template>
  <div class="basic" :class="cls">
    <img class="icon" :src="'/naviIcon/'+icon+'.svg'" alt />
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cls: {
      type: String
    },
    linkTo: {
      type: String
    },
    text: {
      type: String
    },
    icon: {
      type: String
    }
  }
};
</script>

<style scoped>
.basic {
  display: flex;
  justify-content: center;
  border-radius: 5px;
}
.icon {
  width: 20px;
  margin-right: 5px;
}
.text {
  font-size: 14px;
  color: white;
}
.top_beginner_btn {
  padding: 10px;
  background-color: #f4b3ca;
}
.login {
  background-color: #b5c97c;
  padding: 5px 20px;
  margin-bottom: 10px;
}
.regist {
  background-color: transparent;
  border: 2px solid #f4b3ca;
  padding: 3px 18px;
  margin-bottom: 10px;
}
.regist > p {
  color: #f4b3ca;
}
</style>