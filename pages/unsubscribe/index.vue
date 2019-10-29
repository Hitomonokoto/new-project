<template>
  <main>
    <mainImage cls="basic" url="/mainImage/top-img.jpg" />
    <h1>退会</h1>
    <p class="top_text">
      本サービスをご利用頂き、誠にありがとうございました。
      <br />本サービス向上の為、アンケートにお答え頂けると大変幸いです。
    </p>
    <dl>
      <dt>退会理由を教えて下さい。（※複数回答可）</dt>
      <dd>
        <input type="checkbox" value="1" />サービスが使いにくい、分かりにくい。
      </dd>
      <dd>
        <input type="checkbox" value="2" />会員のメリットが感じられない。
      </dd>
      <dd>
        <input type="checkbox" value="3" />ほしい商品がない。
      </dd>
      <dd>
        <input type="checkbox" value="4" />商品の価格が高い。
      </dd>
      <dd>
        <input type="checkbox" value="5" />その他
      </dd>
    </dl>
    <dl>
      <dt>上記退会理由の詳細や、その他のご意見等ございましたらご記入下さい。</dt>
      <dd>
        <basicTextarea v-model="message" cls="unsubscribe" />
      </dd>
    </dl>
    <div class="actions">
      <basicButton cls="unsubscribe_back_btn" @emitClick="back">戻る</basicButton>
      <basicButton cls="unsubscribe_btn" @emitClick="unsub">退会する</basicButton>
    </div>
  </main>
</template>

<script>
// コンポーネント
import mainImage from "~/components/MainImage";
import basicTextarea from "~/components/BasicTextarea";

// その他
import { mapState } from "vuex";

export default {
  components: { mainImage, basicTextarea },
  data() {
    return {
      message: ""
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    unsub() {
      const data = {
        user_id: this.login.user_1.id,
        message: this.message
      };
      this.$store.dispatch("unsubscribe/unsubscribeAction", data);
    }
  },
  computed: mapState({
    login: state => state.login
  })
};
</script>
<style scoped>
.top_text {
  padding: 20px 0 40px 0;
  text-align: center;
}
dl {
  margin-bottom: 50px;
}
dt {
  margin-bottom: 20px;
}
dd {
  margin-bottom: 10px;
}
.actions {
  margin-bottom: 50px;
}
</style>