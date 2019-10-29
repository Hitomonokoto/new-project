<template>
  <div class="wrapper">
    <img src="@/assets/hatena.png" class="hatena" alt />
    <h1>Diaryとは</h1>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, obcaecati? In nisi illum corrupti necessitatibus et sit ad soluta provident? Aliquid harum iure asperiores ut fuga ullam enim dolore provident?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat eos alias laboriosam temporibus nostrum veniam doloremque error id? Qui a officia fuga nulla sapiente delectus vero quaerat similique corporis.</p>

    <div class="wrapper2">
      <div class="box">
        <div class="title">購入者メリット</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet consequatur exercitationem accusamus earum cupiditate rerum a quos suscipit quae vero fuga cumque animi ad, repellendus fugit necessitatibus sint beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti adipisci nisi earum, nostrum nam ullam explicabo ducimus distinctio facere totam quaerat soluta? Aperiam natus perferendis dolore est fugit quos.</p>
      </div>

      <div class="box">
        <div class="title">生産者メリット</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste quo tempora expedita fugiat suscipit ipsum quas accusamus consequatur officiis facere quam quisquam provident laborum quia voluptatum, porro placeat animi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid minima eaque animi repellendus incidunt, eum sit blanditiis velit, aut, sint doloremque libero? Labore quia, impedit hic suscipit eum pariatur.</p>
      </div>
    </div>

    <div class="howTobuy">
      <div class="box2">
        <div class="title">ご注文について</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste quo tempora expedita fugiat suscipit ipsum quas accusamus consequatur officiis facere quam quisquam provident laborum quia voluptatum, porro placeat animi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid minima eaque animi repellendus incidunt, eum sit blanditiis velit, aut, sint doloremque libero? Labore quia, impedit hic suscipit eum pariatur.</p>
      </div>

      <div class="box2">
        <div class="title">お支払いについて</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste quo tempora expedita fugiat suscipit ipsum quas accusamus consequatur officiis facere quam quisquam provident laborum quia voluptatum, porro placeat animi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid minima eaque animi repellendus incidunt, eum sit blanditiis velit, aut, sint doloremque libero? Labore quia, impedit hic suscipit eum pariatur.</p>
      </div>
      <div class="box2">
        <div class="title">お届けについて</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste quo tempora expedita fugiat suscipit ipsum quas accusamus consequatur officiis facere quam quisquam provident laborum quia voluptatum, porro placeat animi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid minima eaque animi repellendus incidunt, eum sit blanditiis velit, aut, sint doloremque libero? Labore quia, impedit hic suscipit eum pariatur.</p>
      </div>
      <div class="box2">
        <div class="title">返品・交換・キャンセルについて</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste quo tempora expedita fugiat suscipit ipsum quas accusamus consequatur officiis facere quam quisquam provident laborum quia voluptatum, porro placeat animi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid minima eaque animi repellendus incidunt, eum sit blanditiis velit, aut, sint doloremque libero? Labore quia, impedit hic suscipit eum pariatur.</p>
      </div>
    </div>

    <div class="link-list">
      <basicButton class="qAndAlink" @emitClick="jumpToAboutCompany">
        <img src="@/assets/company.png" class="link-img" alt />会社情報
      </basicButton>

      <basicButton class="qAndAlink" @emitClick="jumpToAboutGift">
        <img src="@/assets/gift.png" class="link-img" alt />GIFTとは
      </basicButton>

      <basicButton class="qAndAlink" @emitClick="jumpToAboutDiary">
        <img src="@/assets/diary.png" class="link-img" alt />Diaryについて
      </basicButton>
    </div>
    <div class="link-list">
      <basicButton class="qAndAlink" @emitClick="jumpToAboutFamily">
        <img src="@/assets/family.png" class="link-img" alt />Familyとは
      </basicButton>

      <basicButton class="qAndAlink" @emitClick="jumpToInfo">
        <img src="@/assets/contact.png" class="link-img" alt />問い合わせ
      </basicButton>

      <basicButton class="qAndAlink" @emitClick="jumpToEtc">その他</basicButton>
    </div>
    <scrollBotton />
  </div>
</template>

<script>
import basicButton from "~/components/BasicButton.vue";
export default {
  components: {
    basicButton
  },
  methods: {
    jumpToAboutCompany() {
      this.$router.push("");
      this.$router.push("/Q&A/aboutCompany");
    },
    jumpToAboutGift() {
      this.$router.push("");
      this.$router.push("/Q&A/aboutGift");
    },
    jumpToAboutDiary() {
      this.$router.push("");
      this.$router.push("/Q&A/aboutDiary");
    },
    jumpToAboutFamily() {
      this.$router.push("");
      this.$router.push("/Q&A/aboutFamily");
    },
    jumpToEtc() {
      this.$router.push("");
      this.$router.push("/Q&A/etc");
    },
    jumpToInfo() {
      this.$router.push("");
      this.$router.push("/info");
    }
  }
};
</script>

<style scoped>
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 10%;
}
.hatena {
  width: 80px;
}

h1 {
  font-size: 45px;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}

.wrapper2 {
  display: flex;
  justify-content: space-between;
  margin: 80px 0;
  width: 100%;
}

.box {
  width: 44%;
}

.link-img {
  width: 30px;
  margin-right: 10px;
}

.link-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.howTobuy {
  margin-bottom: 50px;
}

.box2 {
  margin-bottom: 40px;
}

@media screen and (max-width: 1100px) {
  .wrapper2 {
    display: flex;
    justify-content: initial;
    flex-direction: column;
    margin: 50px 0 30px 0;
  }

  .box {
    width: 100%;
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 960px) {
  .wrapper {
    margin: 130px 0 100px 0;
  }

  h1 {
    margin-bottom: 30px;
  }

  .link-list {
    width: 100%;
    display: flex;
    justify-content: initial;
    margin-bottom: 0;
    flex-direction: column;
  }
}
</style>