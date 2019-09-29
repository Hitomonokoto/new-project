import firebase from "~/plugins/firebase";
require('firebase/firestore');
const db = firebase.firestore();

export const state = () => ({
  token: null,
  user_1: null,
  user_2: null,
  user_id: null
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
  }
}

export const actions = {

  async createUserAction(context, data) {
    const docRef = await db.collection("users").doc();
    const setAda = docRef.set({
      user_id: data.user_id,
      nickname: data.nickname,
      user_type: 0
    });
  },
  async getUserAction_2(context, data) {
    const user = await db.collection('users').where("user_id", "==", data).get();
    context.commit('getUser_2', user.docs[0].data());
  }
}

