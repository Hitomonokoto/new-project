<template>
  <main>
    <mainImage :src="Farmers.farmer.fields.mainImage.fields.file.url" alt />

    <div class="index">
      <div
        class="index_btn index_story opend"
        id="index_story"
        @click="openStory"
      >ストーリー</div>
      <div
        class="index_btn index_timeline"
        id="index_timeline"
        @click="openTimeline"
      >コミュニティ</div>
      <div
        class="index_btn index_products"
        id="index_products"
        @click="openProducts"
      >応援</div>
    </div>
    <div class="contents_area" v-show="isStory">
      <story :content="Farmers.farmer.fields.content" />
    </div>
    <div class="contents_area" v-show="isTimeline">
      <timeline />
    </div>
    <div class="contents_area" v-show="isProducts">
      <products v-if="Products.productsByfarmer.length" />
    </div>
  </main>
</template>

<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import story from "~/components/farmer&product/Story";
import products from "~/components/farmer&product/Products";
import timeline from "~/components/farmer&product/Timeline";

// その他
import { mapState } from "vuex";

export default {
  components: {
    mainImage,
    story,
    products,
    timeline
  },
  data() {
    return {
      products: [],
      isStory: true,
      isTimeline: false,
      isProducts: false
    };
  },
  async fetch({ params, store }) {
    await store.dispatch("farmers/getFarmerAction", params);
  },
  async created() {
    await this.$store.dispatch(
      "products/getProductsByfarmerAction",
      this.Farmers.farmer.fields.farmId
    );
    console.log(this.Farmers.farmer.fields.farmId);
    await this.$store.dispatch(
      "timeline/getSelectPostsAction",
      this.Farmers.farmer.fields.farmId
    );
  },
  methods: {
    openStory() {
      this.isStory = true;
      this.isTimeline = false;
      this.isProducts = false;
      document.getElementById("index_story").classList.add("opend");
      document.getElementById("index_timeline").classList.remove("opend");
      document.getElementById("index_products").classList.remove("opend");
    },
    openTimeline() {
      this.isStory = false;
      this.isTimeline = true;
      this.isProducts = false;
      document.getElementById("index_story").classList.remove("opend");
      document.getElementById("index_timeline").classList.add("opend");
      document.getElementById("index_products").classList.remove("opend");
    },
    openProducts() {
      this.isStory = false;
      this.isTimeline = false;
      this.isProducts = true;
      document.getElementById("index_story").classList.remove("opend");
      document.getElementById("index_timeline").classList.remove("opend");
      document.getElementById("index_products").classList.add("opend");
    }
  },
  computed: mapState({
    Farmers: state => state.farmers,
    Products: state => state.products
  }),
  head() {
    return {
      title: this.Farmers.farmer.fields.title
    };
  }
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
.index_story {
  width: 34%;
}
.index_timeline {
  width: 33%;
}
.index_products {
  width: 33%;
}
.opend {
  background-color: green;
  color: white;
}
.contents_area {
  width: 100%;
}
</style>
