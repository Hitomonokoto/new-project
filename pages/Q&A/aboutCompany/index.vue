<template>
  <div class="wrapper">
    <img src="@/assets/company.png" class="hatena" alt />
    <h1>会社情報</h1>

    <div class="company-info" id="c">
      <table>
        <tbody>
          <tr class="table-tr">
            <th>社名</th>
            <td></td>
          </tr>
          <tr>
            <th>代表者</th>
            <td></td>
          </tr>
          <tr>
            <th>設立</th>
            <td></td>
          </tr>
          <tr>
            <th>所在地</th>
            <td></td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="memberIntroduction">
      <h2>メンバー紹介</h2>
      <div class="memberBox">
        <div class="memberImg">
          <img src="/samplein.jpg" alt />
        </div>

        <div class="memberText">
          <div class="nickname">ニックネーム</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse corrupti quos vel delectus. Natus necessitatibus dolores doloribus quisquam voluptate expedita blanditiis accusamus veniam, iste numquam, porro quam eveniet architecto maxime.</p>
        </div>
      </div>
      <div class="memberBox">
        <div class="memberImg">
          <img src="/samplein.jpg" alt />
        </div>

        <div class="memberText">
          <div class="nickname">ニックネーム</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse corrupti quos vel delectus. Natus necessitatibus dolores doloribus quisquam voluptate expedita blanditiis accusamus veniam, iste numquam, porro quam eveniet architecto maxime.</p>
        </div>
      </div>
      <div class="memberBox">
        <div class="memberImg">
          <img src="/samplein.jpg" alt />
        </div>

        <div class="memberText">
          <div class="nickname">ニックネーム</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse corrupti quos vel delectus. Natus necessitatibus dolores doloribus quisquam voluptate expedita blanditiis accusamus veniam, iste numquam, porro quam eveniet architecto maxime.</p>
        </div>
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
  margin-bottom: 30px;
}

h1 {
  font-size: 45px;
  margin-bottom: 30px;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}

.wrapper2 {
  display: flex;
  justify-content: space-between;
  margin: 70px 0;
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

.company-info {
  width: 100%;
}

table {
  border-collapse: collapse;
  margin-top: 30px;
}
tr {
  padding: 5%;
}

th {
  padding: 5%;
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;
  border-right: 1px solid #707070;
  margin: 0;
}

td {
  width: 100%;
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;
}

.memberIntroduction {
  margin: 100px 0;
  width: 100%;
}

h2 {
  font-size: 30px;
  margin-bottom: 40px;
}

.memberBox {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.memberImg {
  width: 30%;
}
.memberBox img {
  margin-right: 50px;
  width: 250px;

  object-fit: cover;
}

.memberText {
  width: 65%;
}

.nickname {
  font-size: 30px;
  margin-bottom: 15px;
  font-weight: bold;
}

.memberText p {
  font-size: 17px;
}

@media screen and (max-width: 1300px) {
  .memberBox {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }

  .memberImg {
    width: 30%;
  }
  .memberBox img {
    margin-right: 50px;
    width: 180px;

    object-fit: cover;
  }

  .memberText {
    width: 65%;
  }

  .nickname {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .memberText p {
    font-size: 15px;
    line-height: initial;
  }
}

@media screen and (max-width: 960px) {
  .wrapper {
    margin: 180px 0 100px 0;
  }

  .wrapper2 {
    display: flex;
    justify-content: initial;
    flex-direction: column;
    margin: 50px 0 30px 0;
  }

  h1 {
    margin-bottom: 30px;
  }

  .box {
    width: 100%;
    margin-bottom: 50px;
  }

  .link-list {
    width: 100%;
    display: flex;
    justify-content: initial;
    margin-bottom: 0;
    flex-direction: column;
  }

  .memberIntroduction {
    margin: 50px 0;
    width: 100%;
  }

  .memberBox {
    display: flex;
    justify-content: initial;
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    text-align: center;
  }

  .memberImg {
    width: 60%;
  }
  .memberBox img {
    margin-right: 50px;
    width: 100%;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .memberText {
    width: 80%;
  }

  .nickname {
    font-size: 30px;
    margin-bottom: 10px;
  }

  .memberText p {
    font-size: 20px;
    line-height: initial;
  }
}
</style>