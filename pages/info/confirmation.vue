<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <h2>確認画面</h2>
      <p class="info_text">お問い合わせ内容に誤りがないかご確認ください。</p>
    </div>
    <div class="page_top">
      <div>
        <dl>
          <dt>お名前</dt>
          <dd>{{ this.info.info_data.name }}</dd>
        </dl>
        <dl>
          <dt>メールアドレス</dt>
          <dd>{{ this.info.info_data.email }}</dd>
        </dl>
        <dl>
          <dt>タイトル</dt>
          <dd>{{ this.info.info_data.title }}</dd>
        </dl>
        <dl>
          <dt>お問い合わせ内容</dt>
          <dd>{{ this.info.info_data.message }}</dd>
        </dl>
      </div>
      <basicButton class="login_btn" @emitClick="editForm">修正する</basicButton>
      <basicButton class="login_btn" @emitClick="sendForm">送信する</basicButton>
    </div>
  </main>
</template>

<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import basicButton from "~/components/BasicButton";

// その他
import { mapState } from "vuex";

export default {
  components: {
    mainImage,
    basicButton
  },
  methods: {
    editForm() {
      this.$router.push("/info");
    },
    sendForm() {
      this.$store.dispatch("info/sendFormAction", {
        name: this.info.info_data.name,
        email: this.info.info_data.email,
        title: this.info.info_data.title,
        message: this.info.info_data.message
      });
    }
  },
  computed: mapState({ info: "info" })
};
</script>

<style scoped>
img {
  width: 100%;
}
.info_text {
  text-align: center;
}
dt {
  text-align: left;
}
</style>