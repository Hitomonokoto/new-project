<template>
  <main>
    <input v-model="zip" type="text" placeholder="郵便番号" />
    <select v-model="province">
      <option value>都道府県</option>
      <option value="JP-01">北海道</option>
      <option value="JP-02">青森県</option>
      <option value="JP-03">岩手県</option>
      <option value="JP-04">宮城県</option>
      <option value="JP-05">秋田県</option>
      <option value="JP-06">山形県</option>
      <option value="JP-07">福島県</option>
      <option value="JP-08">茨城県</option>
      <option value="JP-09">栃木県</option>
      <option value="JP-10">群馬県</option>
      <option value="JP-11">埼玉県</option>
      <option value="JP-12">千葉県</option>
      <option value="JP-13">東京都</option>
      <option value="JP-14">神奈川県</option>
      <option value="JP-15">新潟県</option>
      <option value="JP-16">富山県</option>
      <option value="JP-17">石川県</option>
      <option value="JP-18">福井県</option>
      <option value="JP-19">山梨県</option>
      <option value="JP-20">長野県</option>
      <option value="JP-21">岐阜県</option>
      <option value="JP-22">静岡県</option>
      <option value="JP-23">愛知県</option>
      <option value="JP-24">三重県</option>
      <option value="JP-25">滋賀県</option>
      <option value="JP-26">京都府</option>
      <option value="JP-27">大阪府</option>
      <option value="JP-28">兵庫県</option>
      <option value="JP-29">奈良県</option>
      <option value="JP-30">和歌山県</option>
      <option value="JP-31">鳥取県</option>
      <option value="JP-32">島根県</option>
      <option value="JP-33">岡山県</option>
      <option value="JP-34">広島県</option>
      <option value="JP-35">山口県</option>
      <option value="JP-36">徳島県</option>
      <option value="JP-37">香川県</option>
      <option value="JP-38">愛媛県</option>
      <option value="JP-39">高知県</option>
      <option value="Fukuoka">福岡県</option>
      <option value="JP-41">佐賀県</option>
      <option value="JP-42">長崎県</option>
      <option value="Kumamoto">熊本県</option>
      <option value="JP-44">大分県</option>
      <option value="JP-45">宮崎県</option>
      <option value="JP-46">鹿児島県</option>
      <option value="JP-47">沖縄県</option>
    </select>
    <input v-model="city" type="text" placeholder="市区町村" />
    <input v-model="address1" type="text" placeholder="番地" />
    <input v-model="address2" type="text" placeholder="建物名・階・部屋番号" />
    <basicButton @emitClick="update">更新</basicButton>
  </main>
</template>


<script>
import basicButton from "~/components/BasicButton";
import getCustomer from "~/apollo/gql/getCustomer";
import customerAddressUpdate from "~/apollo/gql/customerAddressUpdate";
export default {
  components: { basicButton },
  data() {
    return {
      zip: "",
      province: "",
      city: "",
      address1: "",
      address2: ""
    };
  },
  async created() {},
  methods: {
    async update() {
      alert("test");
      const data = await this.$apollo.mutate({
        mutation: customerAddressUpdate,
        variables: {
          customerAccessToken: this.$store.state.login.token,
          id: this.$store.state.login.user_1.defaultAddress.id,
          address: {
            zip: this.zip,
            province: this.province,
            city: this.city,
            address1: this.address1,
            address2: this.address2
          }
        }
      });
      this.$router.push("/user");
    }
  }
};
</script>



<style scoped>
</style>
