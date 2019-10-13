<template>
  <div class="products">
    <nuxt-link
      class="product"
      v-for="(product,index) in this.products"
      :to="'/products/product/'+product.sys.id"
      :key="index"
    >
      <div class="product_img">
        <img :src="product.fields.image.fields.file.url" />
      </div>

      <div class="product_text">
        <div class="product_info">
          <p>{{ product.fields.title }}</p>
          <p>{{ product.fields.farmName }}</p>
          <p>{{ product.fields.summary }}</p>
        </div>

        <div class="read_more">
          <p>詳細ページへ</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>



<script>
export default {
  props: {
    products: {
      type: Array
    }
  }
};
</script>



<style scoped>
.products {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}
.product {
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  box-shadow: 0px 0px 6px #d1d1d1;
  border-radius: 5px;
}
.product_img {
  width: 100%;
}
.product_img > img {
  width: 100%;
  border-radius: 5px 5px 0 0;
  display: block;
}
.product_text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product_info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.read_more {
  width: 100%;
  height: 50px;
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
}

@media screen and (max-width: 960px) {
  .products {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product {
    width: 80%;
    flex-direction: row;
    margin-bottom: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px #d1d1d1;
  }
  .product_img {
    width: 50%;
  }
  .product_img > img {
    width: 100%;
    border-radius: 5px 0 0 5px;
    display: block;
  }
  .product_text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .product_info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .read_more {
    width: 100%;
    height: 50px;
    background-color: rgb(243, 243, 243);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 5px 0;
  }
}

@media screen and (max-width: 560px) {
  .products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  .product {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  .product_img {
    width: 100%;
  }
  .product_img > img {
    border-radius: 5px 5px 0 0;
  }
  .product_text {
    width: 100%;
  }
  .read_more {
    border-radius: 0 0 5px 5px;
  }
}
</style>