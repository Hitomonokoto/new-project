<template>
  <main>
    <div v-if="isData">
      <div>
        <mainImage src="/samplein.jpg" alt />
        <basicButton>変更</basicButton>
      </div>

      <div>
        <div v-if="!isNickname">
          <p>{{ $store.state.login.user_2.nickname }}</p>
          <basicButton @emitClick="editNickname">変更</basicButton>
        </div>
        <editNickname v-if="isNickname" @emitClick="back" />
      </div>
      <div>
        <div v-if="!isBasicData">
          <p>{{ user_data.lastName }} {{ user_data.firstName }}</p>
          <p>{{ user_data.email }}</p>
          <basicButton @emitClick="editBasicData">変更</basicButton>
        </div>
        <editBasicData v-if="isBasicData" @emitClick="back" />
      </div>
      <div></div>

      <linkButton cls="type1" linkTo="/unsub" text="退会する" />
    </div>
  </main>
</template>


<script>
import basicButton from "~/components/BasicButton";
import linkButton from "~/components/LinkButton";
import profileImgEdit from "~/components/user/ProfileImgEdit";
import editNickname from "~/components/user/EditNickname";
import editBasicData from "~/components/user/EditBasicData";
import getCustomer from "~/apollo/gql/getCustomer";
export default {
  components: {
    linkButton,
    basicButton,
    profileImgEdit,
    editNickname,
    editBasicData
  },
  data() {
    return {
      user_data: {},
      isData: false,
      isNickname: false,
      isBasicData: false
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
  methods: {
    profileImgEdit() {
      alert("ok");
    },
    editNickname() {
      this.isNickname = true;
      this.isBasicData = false;
    },
    editBasicData() {
      this.isBasicData = true;
      this.isNickname = false;
    },
    back() {
      this.isNickname = false;
      this.isBasicData = false;
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
