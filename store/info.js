import firebase from "~/plugins/firebase";
require('firebase/firestore');
const db = firebase.firestore();

export const state = () => ({
  info_data: ''
})

export const mutations = {
  input(state, data) {
    state.info_data = data;
  }
}

export const actions = {
  async sendFormAction(context, data) {
    const docRef = await db.collection("information").doc();
    const setAda = docRef.set({
      name: data.name,
      email: data.email,
      title: data.title,
      message: data.message
    });
  }
}

