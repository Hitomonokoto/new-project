<template>
  <main>
    <div class="page_top test">
      <mainImage url="mainImage/mainDamy1.jpg" />
    </div>
    <div class="profile">
      <div class="prof_top">
        <div class="prof_img">
          <img src="samplein.jpg" alt />
        </div>
        <p class="nickname">yuppiさん</p>
        <button>アカウント管理</button>
      </div>
      <div class="prof_bottom">
        <p>自己紹介</p>
        <p>
          福岡福岡在住の2児のママです。
          <br />子供のために健康的で美味しいご飯を作ってあげることが生きがいです！
        </p>
      </div>
    </div>
    <div class="box">
      <div class="box_left">
        <h3>お知らせ</h3>
        <div>
          ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
          <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
          <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
          <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
          <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
          <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
          <br />ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
          <br />
        </div>
      </div>
      <div class="box_right">
        <h3>yuppiさんのマイファーム</h3>
      </div>
    </div>
  </main>
</template>

<script>
import mainImage from "~/components/MainImage";

export default {
  components: {
    mainImage
  }
};
</script>

<style scoped>
.profile {
  position: relative;
}
.prof_top {
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.prof_img {
  width: 160px;
  height: 160px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: absolute;
  top: -100px;
  left: 50px;
}

.prof_img > img {
  width: 150px;
  border-radius: 5px;
}

.nickname {
  padding-left: 215px;
}
button {
  position: absolute;
  top: 10px;
  right: 10px;
}
.prof_bottom {
  margin: 20px 0;
}
.prof_bottom > p {
  padding-left: 50px;
}

.box_left {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightpink;
}
.box_right {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
}
</style>