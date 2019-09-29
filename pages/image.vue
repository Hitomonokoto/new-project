<template>
  <div>
    <input
      type="file"
      :multiple="false"
      accept="image/*"
      @change="detectFiles($event)"
    />
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  data() {
    return {
      fileName: "",
      imageUrl: ""
    };
  },
  methods: {
    detectFiles(e) {
      const file = e.target.files[0];
      if (file) {
        const fileName = uuid();

        this.$store.dispatch("timeline/uploadImage", {
          name: fileName,
          file: file
        });
      }
    }
  }
};
</script>

<style scoped>
</style>