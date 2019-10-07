<template>
  <main>
    <mainImage url="/mainImage/mainDamy1.jpg" />
    <h2>お問い合わせ</h2>
    <p class="top_text">
      ご不明な点がございましたら
      <br />お気軽にこちらからお問い合わせ下さい。
    </p>
    <div class="form_area">
      <dl>
        <dt>お名前（ニックネーム可）</dt>
        <dd>
          <basicInput
            cls="info"
            v-model="name"
            id="name"
            type="text"
            placeholder="お名前"
          />
        </dd>
      </dl>
      <dl>
        <dt>メールアドレス</dt>
        <dd>
          <basicInput
            cls="info"
            v-model="email"
            id="email"
            type="email"
            placeholder="メールアドレス"
          />
        </dd>
      </dl>
      <dl>
        <dt>タイトル</dt>
        <dd>
          <basicInput
            cls="info"
            v-model="title"
            id="title"
            type="text"
            placeholder="タイトル"
          />
        </dd>
      </dl>
      <dl>
        <dt>お問い合わせ内容</dt>
        <dd>
          <textarea
            class="formtype2"
            v-model="message"
            id="message"
            placeholder="お問い合わせ内容"
          ></textarea>
        </dd>
      </dl>
      <p v-if="error" class="error_text">※未入力項目があります。</p>
      <div class="actions">
        <basicButton cls="info_back_btn" @emitClick="back">戻る</basicButton>
        <basicButton cls="info_check_btn" @emitClick="checkForm">確認する</basicButton>
      </div>
    </div>
  </main>
</template>

<script>
import mainImage from "~/components/MainImage";
import linkButton from "~/components/LinkButton";
import basicButton from "~/components/BasicButton";
import basicInput from "~/components/BasicInput";

export default {
  components: {
    mainImage,
    linkButton,
    basicButton,
    basicInput
  },
  data() {
    return {
      name: null,
      email: null,
      title: null,
      message: null,
      error: false
    };
  },
  created() {
    if (this.$store.state.info.info_data) {
      this.name = this.$store.state.info.info_data.name;
      this.email = this.$store.state.info.info_data.email;
      this.title = this.$store.state.info.info_data.title;
      this.message = this.$store.state.info.info_data.message;
    } else if (this.$store.state.login.token) {
      this.name = this.$store.state.login.user_2.nickname;
      this.email = this.$store.state.login.user_1.email;
    }
  },
  methods: {
    back() {
      this.$store.commit("info/delete");
      this.$router.push("/");
    },
    checkForm: function(e) {
      if (this.name && this.email && this.title && this.message) {
        this.$store.commit("info/input", {
          name: this.name,
          email: this.email,
          title: this.title,
          message: this.message
        });
        this.$router.push("/info/confirmation");
      } else {
        this.error = true;
        if (!this.name) {
          document.getElementById("name").classList.add("error");
        }
        if (!this.email) {
          document.getElementById("email").classList.add("error");
        }
        if (!this.title) {
          document.getElementById("title").classList.add("error");
        }
        if (!this.message) {
          document.getElementById("message").classList.add("error");
        }
      }
    }
  },
  watch: {
    name() {
      document.getElementById("name").classList.remove("error");
    },
    email() {
      document.getElementById("email").classList.remove("error");
    },
    title() {
      document.getElementById("title").classList.remove("error");
    },
    message() {
      document.getElementById("message").classList.remove("error");
    }
  }
};
</script>

<style scoped>
.top_text {
  margin-bottom: 50px;
  text-align: center;
}
.form_area {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formtype2 {
  border-radius: 5px;
  width: 600px;
  height: 400px;
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #efefef;
}
.error {
  background-color: rgb(255, 204, 204);
}
.error_text {
  color: red;
  margin-bottom: 20px;
}
.actions {
  margin: 50px 0;
}
</style>