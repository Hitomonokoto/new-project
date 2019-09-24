import db from "~/plugins/firebase";

export const state = () => ({
  token: null,
  user_1: '',
  user_2: ''
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
  }
}

export const actions = {
  async getUserAction_2(context, data) {
    console.log("これがエラー？=>" + data);
    const user = await db.collection('users').where("user_id", "==", data).get();
    console.log(user.docs[0].data());
    context.commit('getUser_2', user.docs[0].data());
  }
}

