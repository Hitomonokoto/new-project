<template>
  <div class="post">
    <div class="user">
      <img class="user_icon" src="samplein.jpg" alt />
      <div class="name_and_back">
        <p class="nickname">{{post_data.name}}</p>
        <div class="actions">
          <basicButton cls="back_btn" @emitClick="back">戻る</basicButton>
          <basicButton cls="post_delete_btn" @emitClick="postDalete">削除</basicButton>
        </div>
      </div>
    </div>
    <basicInput
      cls="post_title"
      v-model="title"
      type="text"
      placeholder="タイトルを入力してください..."
      fontSize="font-size:20px;"
    />
    <div class="img_area">
      <img class="post_img" :src="this.fileUrl" />
      <basicButton
        v-show="this.fileUrl"
        cls="post_img_delete_btn"
        @emitClick="fileDalete"
      >×</basicButton>
    </div>
    <adjustedTextarea
      v-model="text"
      :text="this.post_data.text"
      cls="post_text"
      placeholder="本文を入力してください..."
    />
    <input type="file" @change="setFiles($event)" />
    <basicButton cls="update_btn" @emitClick="update">更新</basicButton>
  </div>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
import basicInput from "~/components/BasicInput";
import adjustedTextarea from "~/components/AdjustedTextarea";
// その他
import uuid from "uuid";

export default {
  components: { basicButton, basicInput, adjustedTextarea },
  data() {
    return {
      title: this.post_data.title,
      text: this.post_data.text,
      fileName: this.post_data.fileName,
      fileUrl: this.post_data.fileUrl
    };
  },
  props: {
    post_data: {
      type: Object
    }
  },
  methods: {
    back() {
      this.$emit("editBack");
    },
    fileDalete() {
      this.fileUrl = null;
    },
    postDalete() {
      this.$store.dispatch("timeline/deletePostAction", this.post_data);
      this.$emit("editBack");
    },
    setFiles(e) {
      const file = (e.target.files || e.dataTransfer.files)[0];
      if (file) {
        const fileName = uuid();
        if (this.fileName) {
          console.log("1");
          this.$store
            .dispatch("timeline/changeUploadImage", {
              oldFileName: this.fileName,
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
    update() {
      if (this.text == "" && !this.fileName) {
        return;
      }
      this.$store.dispatch("timeline/PostEditAction", {
        post_id: this.post_data.post_id,
        title: this.title,
        text: this.text,
        fileName: this.fileName,
        fileUrl: this.fileUrl
      });

      this.$emit("editBack");
    }
  }
};
</script>

<style scoped>
.post {
  width: 580px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}
.img_area {
  position: relative;
}
.post_img {
  width: 100%;
  display: block;
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
.name_and_back {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
