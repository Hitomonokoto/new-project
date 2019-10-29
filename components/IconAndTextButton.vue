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
  height: 20px;
  margin-right: 5px;
}
.text {
  font-size: 14px;
  color: white;
}
.top_beginner_btn {
  padding: 10px;
  background-color: #f4b3ca;
  margin-bottom: 80px;
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

.checkout_btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #f4b3ca;
  box-shadow: 0px 0px 6px rgb(59, 59, 59);
  cursor: pointer;
}
.checkout_btn > img {
  width: 24px;
  height: 24px;
  margin: 0;
}
.checkout_btn > p {
  font-size: 12px;
}

.product_page_checkout_btn {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -120px;
  right: 10px;
  background-color: #f4b3ca;
  box-shadow: 0px 0px 6px rgb(59, 59, 59);
  cursor: pointer;
}
.product_page_checkout_btn > img {
  width: 36px;
  height: 36px;
  margin: 0;
}
.product_page_checkout_btn > p {
  font-size: 12px;
}

.about_gift_btn {
  padding: 3px 16px;
  border: 2px solid #f4b3ca;
  cursor: pointer;
  margin-bottom: 100px;
}
.about_gift_btn > p {
  color: #f4b3ca;
}
@media screen and (max-width: 960px) {
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

  .product_page_checkout_btn {
    width: 60px;
    height: 60px;
    position: absolute;
    top: -90px;
    right: 10px;
  }
  .product_page_checkout_btn > img {
    width: 30px;
    height: 30px;
    margin: 0;
  }
  .product_page_checkout_btn > p {
    font-size: 11px;
  }
}
</style>