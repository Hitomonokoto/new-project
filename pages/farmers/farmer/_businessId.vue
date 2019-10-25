<template>
  <main>
    {{Farmers.follower}}
    <mainImage :src="Farmers.farmer.fields.mainImage.fields.file.url" alt />
    <div class="top_area">
      <basicButton v-if="!isFollow" cls="follow_btn" @emitClick="follow">フォローする</basicButton>
      <basicButton v-if="isFollow" cls="follow_btn" @emitClick="follow">フォロー中</basicButton>
    </div>
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
      <story :content="Farmers.farmer.fields.story" />
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
import basicButton from "~/components/BasicButton";

// その他
import { mapState } from "vuex";

export default {
  components: {
    mainImage,
    story,
    products,
    timeline,
    basicButton
  },
  data() {
    return {
      products: [],
      isStory: true,
      isTimeline: false,
      isProducts: false,
      isFollow: false
    };
  },
  async fetch({ params, store }) {
    await store.dispatch("farmers/getFarmerAction", params);
  },
  async created() {
    this.$store.dispatch(
      "products/getProductsByfarmerAction",
      this.Farmers.farmer.fields.businessId
    );
    this.$store.dispatch("timeline/getPostsAction", {
      business_id: this.Farmers.farmer.fields.businessId,
      timeline_type: "single"
    });
    if (this.Login.token) {
      await this.$store.dispatch(
        "farmers/getFollowerAction",
        this.Login.user_2.user_id
      );
      if (this.Farmers.follower.indexOf(this.Farmers.farmer.sys.id) >= 0) {
        this.isFollow = true;
      }
    }
  },
  methods: {
    follow() {
      if (!this.Login.token) {
        return;
      }
      if (this.Farmers.follower.indexOf(this.Farmers.farmer.sys.id) >= 0) {
        this.$store.dispatch("farmers/quitFollowAction", {
          farmer_id: this.Farmers.farmer.sys.id,
          user_id: this.Login.user_2.user_id
        });
        this.isFollow = false;
      } else {
        this.$store.dispatch("farmers/followAction", {
          farmer_id: this.Farmers.farmer.sys.id,
          user_id: this.Login.user_2.user_id
        });
        this.isFollow = true;
      }
    },
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
    Products: state => state.products,
    Login: state => state.login
  }),
  head() {
    return {
      title: this.Farmers.farmer.fields.productName
    };
  }
};
</script>

<style scoped>
.top_area {
  width: 80%;
  position: relative;
}
@media screen and (max-width: 960px) {
  .top_area {
    width: 100%;
  }
}
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
