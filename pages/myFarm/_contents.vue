<template>
  <main>
    <mainImage url="/mainImage/mainDamy1.jpg" />
    <div class="main_contents">
      <div class="main_left">
        <h2>〇〇個のマイファームが見つかりました！</h2>
      </div>
      <div class="main_right">
        <div class="prefectures">
          <h3>地域から探す</h3>
          <prefectureIndex page="/myFarm/" />
        </div>
        <div class="foods">
          <h3>作物から探す</h3>
          <foodIndex page="/myFarm/" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
//コンポーネント
import client from "~/plugins/shopify";
import mainImage from "~/components/MainImage";
import foodIndex from "~/components/FoodIndex";
import prefectureIndex from "~/components/PrefectureIndex";

//その他
import axios from "axios";
import fetch from "node-fetch";

console.log(client);
console.log(client.product.graphQLClient);
// client.product.fetchAll().then(products => {
//   console.log(products);
// });
// const productId = "4036511793255";
// client.product.fetch(productId).then(product => {
//   // Do something with the product
//   console.log(product);
// });
export default {
  components: {
    mainImage,
    foodIndex,
    prefectureIndex
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
main {
  width: 1000px;
}
.main_contents {
  display: flex;
}
.main_left {
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightpink;
}
.main_right {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
}
</style>