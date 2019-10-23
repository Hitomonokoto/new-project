import customerUpdate from "~/apollo/gql/customerUpdate";
import firebase from "~/plugins/firebase";
require('firebase/firestore');
const db = firebase.firestore();

export const state = () => ({
  token: null,
  user_1: null,
  user_2: null,
  user_id: null,
  path: null
})

export const mutations = {
  getToken(state, data) {
    state.token = data;
  },
  getUser_1(state, data) {
    state.user_1 = data;
  },
  getUser_2(state, data) {
    state.user_2 = data;
    state.user_id = data.user_id;
  },
  logout(state) {
    state.token = null;
    state.user_1 = null;
    state.user_2 = null;
    state.user_id = null;
  },
  getPath(state, data) {
    state.path = data;
  }
}

export const actions = {
  // 新規ユーザー登録
  async createUserAction(context, payload) {
    const docRef = await db.collection("users").doc(payload.user_id);
    const setAda = docRef.set({
      user_id: payload.user_id,
      user_icon: "/samplein.jpg",
      nickname: payload.nickname,
      user_type: 0,
      business_id: null
    });
  },
  // ユーザー情報を取得
  async getUserAction_2(context, payload) {
    const user = await db.collection('users').doc(payload).get();
    console.log(user.data())
    context.commit('getUser_2', user.data());
  },
  // ニックネームを変更
  async changeNicknameAction(context, payload) {
    const docRef = await db.collection("users").doc(payload.user_id);
    const setAda = docRef.update({
      nickname: payload.new_nickname
    });
    context.dispatch("getUserAction_2", payload.user_id)
  },
  // 基本情報を変更
  async changeBasicDataAction(context, payload) {

    const yyy = await this.$apollo.mutate({
      mutation: customerUpdate,
      variables: {
        customerAccessToken: payload.token,
        customer: payload.data
      }
    });
    console.log(yyy);







    context.dispatch("getUserAction_2", payload.user_id)
  }
}

