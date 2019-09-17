<template>
  <div class="post">
    <div class="user">
      <img class="user_icon" src="samplein.jpg" alt />
      <p class="nickname">yuppi</p>
      <div class="edit">
        <button @click="back">戻る</button>
      </div>
    </div>
    <textarea
      v-model="text"
      name="text"
      id
      cols="30"
      rows="10"
      placeholder="入力してください..."
    ></textarea>
    <input type="file" />
    <div class="edit">
      <button @click="sendPost">投稿</button>
    </div>
  </div>
</template>

<script>
import linkButton from "~/components/LinkButton";

import db from "~/plugins/firebase";

export default {
  components: { linkButton },
  data() {
    return {
      text: null
    };
  },
  methods: {
    back() {
      this.$emit("emitBack");
    },
    sendPost() {
      const firebase = require("firebase/app");
      const docRef = db.collection("timeline").doc();
      const setAda = docRef.set({
        user_name: "yuhi",
        text: this.text,
        created_date: firebase.firestore.Timestamp.fromDate(new Date())
      });
      this.text = "";
      this.$store.dispatch("posts/getPostsAction");
      this.$emit("emitSendPost");
    }
  }
};
</script>

<style scoped>
.post {
  border-radius: 5px;
  width: 580px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}

.user {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
}

.user_icon {
  width: 50px;
  border-radius: 10%;
}
textarea {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #efefef;
}
</style>
