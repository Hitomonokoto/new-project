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
  margin-top: 30px;
  margin-bottom: 100px;
}
.login {
  background-color: #b5c97c;
  padding: 5px 20px;
  margin-bottom: 10px;
}
.insert_img {
  background-color: transparent;
  margin-bottom: 10px;
  cursor: pointer;
}
.insert_img > p {
  color: gray;
}
.regist {
  background-color: transparent;
  border: 2px solid #f4b3ca;
  padding: 3px 18px;
}
.regist > p {
  color: #f4b3ca;
}
@media screen and (max-width: 560px) {
  .login {
    padding: 5px 10px;
    margin-bottom: 0;
    margin-right: 5px;
  }
  .regist {
    padding: 3px 8px;
  }
  .login > p {
    font-size: 12px;
  }
  .regist > p {
    font-size: 12px;
  }
  .login > img {
    display: none;
  }
  .regist > img {
    display: none;
  }
}
</style>