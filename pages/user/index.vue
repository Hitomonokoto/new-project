<template>
  <main>
    <div v-if="isData">
      <img src="/samplein.jpg" alt />
      <basicButton @emitClick="profileImgEdit">プロフィール画像を変更</basicButton>
      <div v-if="user_data">
        <p>{{ user_data.lastName }} {{ user_data.firstName }}</p>
        <p>{{ user_data.defaultAddress.zip }}</p>
        <p>{{ user_data.defaultAddress.provinceCode | codeToName }}</p>
        <p>{{ user_data.defaultAddress.city }}</p>
        <p>{{ user_data.defaultAddress.address1 }}{{ user_data.defaultAddress.address2 }}</p>
        <p>{{ user_data.defaultAddress.lastName }} {{ user_data.defaultAddress.firstName }}</p>
        <p>{{ user_data.defaultAddress.phone }}</p>
      </div>

      <linkButton cls="type1" linkTo="/user/editAddress" text="住所を変更する" />
      <profileImgEdit />
    </div>
  </main>
</template>


<script>
import linkButton from "~/components/LinkButton";
import basicButton from "~/components/BasicButton";
import profileImgEdit from "~/components/user/ProfileImgEdit";
import getCustomer from "~/apollo/gql/getCustomer";
export default {
  components: { linkButton, basicButton, profileImgEdit },
  data() {
    return {
      user_data: {},
      isData: false
    };
  },
  async created() {
    const data = await this.$apollo.query({
      query: getCustomer,
      variables: {
        customerAccessToken: this.$store.state.login.token
      }
    });
    console.log(data.data.customer);
    this.$store.commit("login/getUser_1", data.data.customer);
    this.user_data = data.data.customer;
  },
  methods: { profileImgEdit() {} },
  filters: {
    codeToName(value) {
      const provinceCode = [
        { name: "北海道", code: "JP-01" },
        { name: "青森県", code: "JP-02" },
        { name: "岩手県", code: "JP-03" },
        { name: "宮城県", code: "JP-04" },
        { name: "秋田県", code: "JP-05" },
        { name: "山形県", code: "JP-06" },
        { name: "福島県", code: "JP-07" },
        { name: "茨城県", code: "JP-08" },
        { name: "栃木県", code: "JP-09" },
        { name: "群馬県", code: "JP-10" },
        { name: "埼玉県", code: "JP-11" },
        { name: "千葉県", code: "JP-12" },
        { name: "東京都", code: "JP-13" },
        { name: "神奈川県", code: "JP-14" },
        { name: "新潟県", code: "JP-15" },
        { name: "富山県", code: "JP-16" },
        { name: "石川県", code: "JP-17" },
        { name: "福井県", code: "JP-18" },
        { name: "山梨県", code: "JP-19" },
        { name: "長野県", code: "JP-20" },
        { name: "岐阜県", code: "JP-21" },
        { name: "静岡県", code: "JP-22" },
        { name: "愛知県", code: "JP-23" },
        { name: "三重県", code: "JP-24" },
        { name: "滋賀県", code: "JP-25" },
        { name: "京都府", code: "JP-26" },
        { name: "大阪府", code: "JP-27" },
        { name: "兵庫県", code: "JP-28" },
        { name: "奈良県", code: "JP-29" },
        { name: "和歌山県", code: "JP-30" },
        { name: "鳥取県", code: "JP-31" },
        { name: "島根県", code: "JP-32" },
        { name: "岡山県", code: "JP-33" },
        { name: "広島県", code: "JP-34" },
        { name: "山口県", code: "JP-35" },
        { name: "徳島県", code: "JP-36" },
        { name: "香川県", code: "JP-37" },
        { name: "愛媛県", code: "JP-38" },
        { name: "高知県", code: "JP-39" },
        { name: "福岡県", code: "JP-40" },
        { name: "佐賀県", code: "JP-41" },
        { name: "長崎県", code: "JP-42" },
        { name: "熊本県", code: "JP-43" },
        { name: "大分県", code: "JP-44" },
        { name: "宮崎県", code: "JP-45" },
        { name: "鹿児島県", code: "JP-46" },
        { name: "沖縄県", code: "JP-47" }
      ];
      const x = provinceCode.filter(p => {
        return p.code == value;
      });
      return x[0].name;
    }
  },
  watch: {
    user_data() {
      this.isData = true;
    }
  }
};
</script>



<style scoped>
</style>
