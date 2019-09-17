<template>
  <main>
    <div class="page_top">
      <mainImage url="/mainImage/mainDamy1.jpg" />
      <h2>お問い合わせ</h2>
      <p class="info_text">
        ご不明な点がございましたら
        <br />お気軽にこちらからお問い合わせ下さい。
      </p>
    </div>
    <form action="/info/confirmation" @submit="checkForm" method="post">
      <input
        class="formtype1"
        id="name"
        v-model="name"
        name="name"
        type="text"
        placeholder="お名前"
      />
      <input
        class="formtype1"
        id="email"
        v-model="email"
        name="email"
        type="email"
        placeholder="メールアドレス"
      />
      <input
        class="formtype1"
        id="title"
        v-model="title"
        name="title"
        type="text"
        placeholder="タイトル"
      />
      <textarea
        class="formtype2"
        id="message"
        v-model="message"
        name="message"
        placeholder="お問い合わせ内容"
      ></textarea>
      <p v-if="error" class="error_text">※未入力項目があります。</p>
      <input class="form_btn" type="submit" value="確認する" />
    </form>
  </main>
</template>

<script>
import mainImage from "~/components/MainImage";
import linkButton from "~/components/LinkButton";

export default {
  components: {
    mainImage,
    linkButton
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
  methods: {
    checkForm: function(e) {
      if (this.name && this.email && this.title && this.message) {
        return true;
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
        e.preventDefault();
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
.info_text {
  text-align: center;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formtype1 {
  border-radius: 5px;
  width: 600px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #efefef;
  margin: 10px 0;
}
.formtype2 {
  border-radius: 5px;
  width: 600px;
  height: 400px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #efefef;
}
.error {
  background-color: rgb(255, 204, 204);
}
.error_text {
  color: red;
}
</style>