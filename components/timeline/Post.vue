<template>
  <div class="post">
    <div class="user">
      <userIcon
        cls="post_form_icon"
        :url="$store.state.login.user_2.user_icon"
      />
      <p class="nickname">{{$store.state.login.user_2.nickname}}</p>
      <div class="edit">
        <basicButton cls="back_btn" @emitClick="back">戻る</basicButton>
      </div>
    </div>
    <basicInput
      cls="post_title"
      v-model="title"
      type="text"
      placeholder="タイトルを入力してください..."
      fontSize="font-size:20px;"
    />
    <img v-if="this.fileUrl" class="post_img" :src="this.fileUrl" />
    <adjustedTextarea
      v-model="text"
      cls="post_text"
      placeholder="本文を入力してください..."
    />
    <input type="file" @change="setFiles($event)" />
    <div class="edit">
      <basicButton cls="send_btn" @emitClick="sendPost">投稿</basicButton>
    </div>
  </div>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import linkButton from "~/components/LinkButton";
import basicInput from "~/components/BasicInput";
import adjustedTextarea from "~/components/AdjustedTextarea";
import userIcon from "~/components/UserIcon";

// その他
import uuid from "uuid";

export default {
  components: {
    basicButton,
    linkButton,
    basicInput,
    adjustedTextarea,
    userIcon
  },
  data() {
    return {
      title: null,
      text: null,
      fileName: null,
      fileUrl: null
    };
  },
  methods: {
    back() {
      this.$emit("emitBack");
    },
    setFiles(e) {
      const file = (e.target.files || e.dataTransfer.files)[0];
      if (file) {
        const fileName = uuid();
        if (this.fileName) {
          console.log("1");
          this.$store
            .dispatch("timeline/changeUploadImage", {
              oldFileName: this.post_data.fileName,
              name: fileName,
              file: file
            })
            .then(url => {
              this.fileName = fileName;
              this.fileUrl = url;
            });
        } else {
          console.log("2");
          this.$store
            .dispatch("timeline/uploadImage", {
              name: fileName,
              file: file
            })
            .then(url => {
              this.fileName = fileName;
              this.fileUrl = url;
            });
        }
      }
    },
    sendPost() {
      if (this.text == "" && !this.fileName) {
        return;
      }
      this.$store.dispatch("timeline/PostAction", {
        user_id: this.$store.state.login.user_2.user_id,
        business_id: this.$store.state.login.user_2.business_id,
        name: this.$store.state.login.user_2.nickname,
        user_icon: this.$store.state.login.user_2.user_icon,
        title: this.title,
        text: this.text,
        fileName: this.fileName,
        fileUrl: this.fileUrl
      });
      this.$emit("emitBack");
    }
  }
};
</script>

<style scoped>
.post {
  border-radius: 5px;
  width: 580px;
  box-shadow: 0px 0px 6px #d1d1d1;
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
  margin-right: 10px;
}
textarea {
}
.post_img {
  width: 100%;
}
</style>
