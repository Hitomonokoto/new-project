<template>
  <div class="yyy">
    {{Login.user_2}}
    <p class="basic_info_title">アカウント設定</p>

    <div class="basic_info_area">
      <div class="data_area">
        <dl>
          <dt>ニックネーム</dt>
          <dd>
            <p>{{ Login.user_2.nickname }}</p>
          </dd>
        </dl>
        <basicButton cls="account_edit_btn" @emitClick="editBasicData">ニックネームを編集</basicButton>
      </div>
      <editNickname />
      <div class="data_area">
        <dl>
          <dt>メールアドレス</dt>
          <dd>
            <p>{{ user_data.email }}</p>
          </dd>
        </dl>
        <basicButton
          cls="account_edit_btn"
          @emitClick="editBasicData"
        >メールアドレスを編集</basicButton>
      </div>
    </div>
  </div>
</template>

<script>
// コンポーネント
// import editNickname from "~/components/user/EditNickname";
// その他
import { mapState } from "vuex";

export default {
  // components: { editNickname },
  props: {
    user_data: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    editBasicData() {
      alert("ok");
    }
  },
  computed: mapState({
    Login: state => state.login
  })
};
</script>

<style scoped>
.yyy {
  width: 80%;
  margin-bottom: 100px;
}
.basic_info_title {
  margin-bottom: 30px;
  font-size: 20px;
}
dl {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
dt {
  width: 150px;
}
.data_area {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>