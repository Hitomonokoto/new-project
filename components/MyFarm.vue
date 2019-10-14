<template>
  <div class="products">
    <div
      class="product"
      v-for="(product,index) in this.products"
      :to="'/products/product/'+product.sys.id"
      :key="index"
    >
      <nuxt-link class="link_img" :to="'/products/product/'+product.sys.id">
        <div class="product_img">
          <img :src="product.fields.image.fields.file.url" />
        </div>
      </nuxt-link>
      <div class="product_text">
        <div class="product_info">
          <nuxt-link
            class="link_area"
            :to="'/products/product/'+product.sys.id"
          >
            <p>{{ product.fields.title }}</p>
            <p>{{ product.fields.farmName }}</p>
            <p>{{ product.fields.summary }}</p>
          </nuxt-link>
        </div>

        <div class="actions">
          <div class="read_more">
            <nuxt-link
              class="link_area"
              :to="'/products/product/'+product.sys.id"
            >
              <p>詳細ページへ</p>
            </nuxt-link>
          </div>
          <div class="checkout">
            <p>購入する</p>
          </div>
        </div>
      </div>
    </div>
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
.link_img {
  width: 100%;
}
.link_info {
  width: 100%;
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
.actions {
  width: 100%;
  display: flex;
}
.read_more {
  width: 70%;
  height: 50px;
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.checkout {
  width: 30%;
  height: 50px;
  background-color: rgb(255, 80, 153);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 0;
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
  .link_img {
    width: 50%;
  }
  .link_info {
    width: 100%;
    height: 100%;
  }
  .product_img {
    width: 100%;
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
  .actions {
    display: flex;
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
  .link_img {
    width: 100%;
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