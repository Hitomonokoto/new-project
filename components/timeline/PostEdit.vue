<template>
  <div class="post">
    <div class="user">
      <userIcon cls="post_edit_icon" :url="login.user_2.user_icon" />
      <div class="name_and_back">
        <p class="nickname">{{post_data.name}}</p>
        <div class="actions">
          <basicButton cls="back_btn" @emitClick="emitBack">戻る</basicButton>
          <basicButton cls="update_btn" @emitClick="updatePost">更新する</basicButton>
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
    <!-- <adjustedTextarea
      v-model="text"
      :text="this.post_data.text"
      cls="post_text"
      placeholder="本文を入力してください..."
    />-->

    <textarea
      v-model="text"
      class="post_text"
      placeholder="本文を入力してください..."
      @input="updateValue"
      style="font-size:16px;"
      ref="adjust_textarea"
      @keydown="adjustHeight"
    ></textarea>

    <label for="picture">
      <iconAndTextButton cls="insert_img" text="画像を挿入する" icon="picture" />
      <input
        class="picture"
        id="picture"
        type="file"
        @change="setFiles($event)"
      />
    </label>
    <div class="delete_area">
      <basicButton cls="post_delete_btn" @emitClick="deletePost">投稿を削除する</basicButton>
    </div>
  </div>
</template>

<script>
// コンポーネント
import basicInput from "~/components/BasicInput";
import adjustedTextarea from "~/components/AdjustedTextarea";
import userIcon from "~/components/UserIcon";

// その他
import { mapState } from "vuex";
import uuid from "uuid";

export default {
  components: {
    basicInput,
    adjustedTextarea,
    userIcon
  },
  data() {
    return {
      title: this.post_data.title,
      text: this.post_data.text.split("<br>").join("\n"),
      fileName: this.post_data.fileName,
      fileUrl: this.post_data.fileUrl
    };
  },
  props: {
    post_data: {
      type: Object
    },
    timeline_type: {
      type: String
    }
  },
  methods: {
    emitBack() {
      this.$emit("editBack");
    },
    fileDalete() {
      this.fileUrl = null;
    },
    deletePost() {
      this.$store.dispatch("timeline/deletePostAction", {
        post_data: this.post_data,
        timeline_type: this.timeline_type
      });
      this.emitBack();
    },
    setFiles(e) {
      const file = (e.target.files || e.dataTransfer.files)[0];
      if (file) {
        const fileName = uuid();
        if (this.fileName) {
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
    updatePost() {
      if (this.text == "" && !this.fileName) {
        return;
      }
      let text_html;
      text_html = this.text;
      //一応タグを使えないように置き換える
      text_html = text_html.split("<").join("&lt;");
      text_html = text_html.split(">").join("&gt;");
      //改行を改行タグに置き換える
      text_html = text_html.split("\n").join("<br>");

      this.$store.dispatch("timeline/PostEditAction", {
        post_id: this.post_data.post_id,
        business_id: this.post_data.business_id,
        title: this.title,
        text: text_html,
        fileName: this.fileName,
        fileUrl: this.fileUrl,
        timeline_type: this.timeline_type
      });
      this.emitBack();
    },
    updateValue: function(e) {
      this.$emit("input", e.target.value);
    },
    adjustHeight() {
      const textarea = this.$refs.adjust_textarea;
      const resetHeight = new Promise(function(resolve) {
        resolve((textarea.style.height = "auto"));
      });
      resetHeight.then(function() {
        textarea.style.height = textarea.scrollHeight + "px";
      });
    }
  },
  computed: mapState({
    login: state => state.login
  })
};
</script>

<style scoped>
.post {
  width: 500px;
  box-shadow: 0px 0px 6px #d1d1d1;
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
.post_text {
  width: 100%;
  padding: 10px;
  border: none;
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
.picture {
  display: none;
}
.delete_area {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
@media screen and (max-width: 560px) {
  .post {
    width: 100%;
  }
}
</style>
