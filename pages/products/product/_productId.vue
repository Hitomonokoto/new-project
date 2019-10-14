<template>
  <main>
    <mainImage :src="this.products.product.fields.image.fields.file.url" />

    <div class="index">
      <div
        class="index_btn index_description opend"
        id="index_description"
        @click="openStory"
      >商品説明</div>
      <div
        class="index_btn index_timeline"
        id="index_timeline"
        @click="openTimeline"
      >タイムライン</div>
      <div
        class="index_btn index_farmer"
        id="index_farmer"
        @click="openProducts"
      >創り手について</div>
    </div>
    <basicButton cls="checkout_btn" @emitClick="checkout">種主になる</basicButton>
    <div class="contents_area" v-if="isStory">
      <description />
    </div>
    <div class="contents_area" v-if="isTimeline">
      <timeline :posts="this.$store.state.timeline.selectPosts" />
    </div>
    <div class="contents_area" v-if="isProducts">
      <farmer />
    </div>
  </main>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import linkButton from "~/components/LinkButton";
import mainImage from "~/components/MainImage";
import description from "~/components/product/Description";
import farmer from "~/components/product/Farmer";
import timeline from "~/components/timeline/Timeline";

//その他
import { mapState } from "vuex";
import getProduct from "~/apollo/gql/getProduct";
import checkoutCreate from "~/apollo/gql/checkoutCreate";

export default {
  components: {
    mainImage,
    basicButton,
    linkButton,
    description,
    farmer,
    timeline
  },
  data() {
    return {
      product_id: "",
      isStory: true,
      isTimeline: false,
      isProducts: false
    };
  },
  async created() {
    this.$store.dispatch(
      "farmers/getFarmerByMyfarmAction",
      this.products.product.fields.farmId
    );
    const data = await this.$apollo.query({
      query: getProduct,
      variables: {
        productId: this.products.product.fields.productId
      }
    });
    this.product_id = data.data.node.variants.edges[0].node.id;
  },
  async fetch({ params, store }) {
    await store.dispatch("products/getProductAction", params);
  },
  methods: {
    async checkout() {
      const xxx = await this.$apollo.mutate({
        mutation: checkoutCreate,
        variables: {
          variantId: this.product_id
        }
      });
      const webUrl = xxx.data.checkoutCreate.checkout.webUrl;
      window.location.href = webUrl;
    },
    openStory() {
      this.isStory = true;
      this.isTimeline = false;
      this.isProducts = false;
      document.getElementById("index_description").classList.add("opend");
      document.getElementById("index_timeline").classList.remove("opend");
      document.getElementById("index_farmer").classList.remove("opend");
    },
    openTimeline() {
      this.isStory = false;
      this.isTimeline = true;
      this.isProducts = false;
      document.getElementById("index_description").classList.remove("opend");
      document.getElementById("index_timeline").classList.add("opend");
      document.getElementById("index_farmer").classList.remove("opend");
    },
    openProducts() {
      this.isStory = false;
      this.isTimeline = false;
      this.isProducts = true;
      document.getElementById("index_description").classList.remove("opend");
      document.getElementById("index_timeline").classList.remove("opend");
      document.getElementById("index_farmer").classList.add("opend");
    }
  },
  computed: mapState({ products: "products" })
};
</script>

<style scoped>
.index {
  width: 100%;
  display: flex;
  box-shadow: 0px 3px 3px -3px #797979;
  margin-bottom: 50px;
}
.index_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
.index_description {
  width: 34%;
}
.index_timeline {
  width: 33%;
}
.index_farmer {
  width: 33%;
}
.opend {
  background-color: salmon;
}
.contents_area {
  width: 100%;
}
</style>