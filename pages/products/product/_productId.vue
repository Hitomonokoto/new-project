<template>
  <main>
    <mainImage :src="Products.product.fields.mainImage.fields.file.url" />

    <div class="index">
      <div
        class="index_btn index_description opend"
        id="index_description"
        @click="openStory"
      >商品詳細</div>
      <div
        class="index_btn index_timeline"
        id="index_timeline"
        @click="openTimeline"
      >コミュニティ</div>
      <div
        class="index_btn index_farmer"
        id="index_farmer"
        @click="openFarmer"
      >創り手</div>
    </div>
    <basicButton cls="checkout_btn" @emitClick="checkout">種主になる</basicButton>
    <div class="contents_area" v-show="isStory">
      <description />
    </div>
    <div class="contents_area" v-show="isTimeline">
      <timeline />
    </div>
    <div class="contents_area" v-show="isFarmer">
      <farmer />
    </div>
  </main>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import linkButton from "~/components/LinkButton";
import mainImage from "~/components/MainImage";
import description from "~/components/farmer&product/Description";
import farmer from "~/components/farmer&product/Farmer";
import timeline from "~/components/farmer&product/Timeline";

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
      isFarmer: false
    };
  },
  async fetch({ params, store }) {
    await store.dispatch("products/getProductAction", params);
  },
  async created() {
    this.$store.dispatch("timeline/getPostsAction", {
      business_id: this.Products.product.fields.businessId,
      timeline_type: "single"
    });

    this.$store.dispatch(
      "farmers/getFarmerByMyfarmAction",
      this.Products.product.fields.businessId
    );
    const data = await this.$apollo.query({
      query: getProduct,
      variables: {
        productId: this.Products.product.fields.productId
      }
    });
    this.product_id = data.data.node.variants.edges[0].node.id;
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
      this.isFarmer = false;
      document.getElementById("index_description").classList.add("opend");
      document.getElementById("index_timeline").classList.remove("opend");
      document.getElementById("index_farmer").classList.remove("opend");
    },
    openTimeline() {
      this.isStory = false;
      this.isTimeline = true;
      this.isFarmer = false;
      document.getElementById("index_description").classList.remove("opend");
      document.getElementById("index_timeline").classList.add("opend");
      document.getElementById("index_farmer").classList.remove("opend");
    },
    openFarmer() {
      this.isStory = false;
      this.isTimeline = false;
      this.isFarmer = true;
      document.getElementById("index_description").classList.remove("opend");
      document.getElementById("index_timeline").classList.remove("opend");
      document.getElementById("index_farmer").classList.add("opend");
    }
  },
  computed: mapState({
    Products: state => state.products,
    Timeline: state => state.timeline
  })
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
  cursor: pointer;
}
.index_btn:hover {
  background-color: lightgreen;
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
  color: white;
  background-color: green;
}
.contents_area {
  width: 100%;
}
</style>