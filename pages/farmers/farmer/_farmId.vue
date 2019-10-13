<template>
  <main>
    <mainImage :src="this.farmers.farmer.fields.mainImage.fields.file.url" alt />

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
      >タイムライン</div>
      <div
        class="index_btn index_products"
        id="index_products"
        @click="openProducts"
      >応援する</div>
    </div>
    <div class="contents_area" v-if="isStory">
      <story :content="this.farmers.farmer.fields.content" />
    </div>
    <div class="contents_area" v-if="isTimeline">
      <timeline :posts="this.$store.state.timeline.selectPosts" />
    </div>
    <div class="contents_area" v-if="isProducts">
      <products v-if="$store.state.products.productsByfarmer.length" />
    </div>
  </main>
</template>

<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import story from "~/components/farmer/Story";
import products from "~/components/farmer/Products";
import timeline from "~/components/timeline/Timeline";

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
      this.farmers.farmer.fields.farmId
    );
    console.log(this.farmers.farmer.fields.farmId);
    await this.$store.dispatch(
      "timeline/getSelectPostsAction",
      this.farmers.farmer.fields.farmId
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
  computed: mapState({ farmers: "farmers" }),
  head() {
    return {
      title: this.farmers.farmer.fields.title
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
  background-color: salmon;
}
.contents_area {
  width: 100%;
}
</style>
