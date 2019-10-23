<template>
  <div class="post">
    <div class="user">
      <userIcon cls="post_form_icon" :url="login.user_2.user_icon" />
      <p class="nickname">{{login.user_2.nickname}}</p>
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
import { mapState } from "vuex";
import uuid from "uuid";

export default {
  components: {
    basicButton,
    linkButton,
    basicInput,
    adjustedTextarea,
    userIcon
  },
  props: {
    timeline_type: {
      type: String
    }
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
    async setFiles(e) {
      const file = (e.target.files || e.dataTransfer.files)[0];
      if (file) {
        const fileName = uuid();
        if (this.fileName) {
          const url = await this.$store.dispatch("timeline/changeUploadImage", {
            name: fileName,
            file: file
          });
          this.fileName = fileName;
          this.fileUrl = url;
        } else {
          const url = await this.$store.dispatch("timeline/uploadImage", {
            name: fileName,
            file: file
          });
          this.fileName = fileName;
          this.fileUrl = url;
        }
      }
    },
    sendPost() {
      if (!this.title && !this.text && !this.fileName) {
        return;
      }
      this.$store.dispatch("timeline/PostAction", {
        user_id: this.login.user_2.user_id,
        business_id: this.login.user_2.business_id,
        farmer_id: this.login.user_2.farmer_id,
        name: this.login.user_2.nickname,
        user_icon: this.login.user_2.user_icon,
        title: this.title,
        text: this.text,
        fileName: this.fileName,
        fileUrl: this.fileUrl,
        timeline_type: this.timeline_type
      });
      this.$emit("emitBack");
    }
  },
  computed: mapState({
    login: state => state.login
  })
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
.post_img {
  width: 100%;
}
</style>
