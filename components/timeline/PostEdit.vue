<template>
  <div class="post">
    <div class="user">
      <img class="user_icon" src="samplein.jpg" alt />
      <p class="nickname">{{post_data.name}}</p>
      <div class="edit">
        <basicButton @emitClick="back">戻る</basicButton>
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
    <img class="post_img" :src="this.fileUrl" />
    <basicButton v-show="this.fileUrl" @emitClick="fileDalete">画像削除</basicButton>
    <input type="file" @change="setFiles($event)" />
    <div class="edit">
      <basicButton @emitClick="postDalete">削除</basicButton>
      <basicButton @emitClick="update">更新</basicButton>
    </div>
  </div>
</template>

<script>
// コンポーネント
import basicButton from "~/components/BasicButton";
// その他
import uuid from "uuid";

export default {
  components: { basicButton },
  data() {
    return {
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
      // this.$store.dispatch(
      //   "timeline/deleteImageAction",
      //   this.post_data.fileName
      // );
    },
    postDalete() {
      this.$store.dispatch("timeline/deletePostAction", this.post_data);
      this.$emit("editBack");
    },
    setFiles(e) {
      const file = (e.target.files || e.dataTransfer.files)[0];
      console.log("1->" + file);
      if (file) {
        const fileName = uuid();
        console.log("2->" + fileName);
        this.$store
          .dispatch("timeline/uploadImage", {
            name: fileName,
            file: file
          })
          .then(url => {
            this.fileName = fileName;
            this.fileUrl = url;
            console.log("3->" + this.fileName);
            console.log("4->" + this.fileUrl);
          });
        console.log("5->" + this.fileName);
        console.log("6->" + this.fileUrl);
      }
    },
    update() {
      if (this.text == "" && !this.fileName) {
        return;
      }
      this.$store.dispatch("timeline/PostEditAction", {
        post_id: this.post_data.post_id,
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
.post_img {
  width: 100%;
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
