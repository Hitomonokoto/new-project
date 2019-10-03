<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <h2>確認画面</h2>
      <p class="info_text">お問い合わせ内容に誤りがないかご確認ください。</p>
    </div>
    <div class="page_top">
      <div class="form_area">
        <div>
          <dl>
            <dt>お名前</dt>
            <dd>{{ this.info.info_data.name }} さん</dd>
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
            <dt>メッセージ</dt>
            <dd>{{ this.info.info_data.message }}</dd>
          </dl>
        </div>
      </div>
      <div class="actions">
        <basicButton class="info_edit_btn" @emitClick="editForm">修正する</basicButton>
        <basicButton class="info_send_btn" @emitClick="sendForm">送信する</basicButton>
      </div>
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
.page_top > p {
  margin-bottom: 50px;
}
img {
  width: 100%;
}
.form_area {
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  border-radius: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
}
dl {
  margin: 10px 0;
  display: flex;
}

dt {
  width: 150px;
}
.actions {
  margin: 50px 0;
}
</style>