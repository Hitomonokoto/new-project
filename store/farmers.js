import client from "~/plugins/contentful";
import firebase from "~/plugins/firebase";
require('firebase/firestore');
const db = firebase.firestore();

export const state = () => ({
    farmers: [],
    farmer: null,
    follower: [],
    followerData: []
})

export const mutations = {
    getFarmers(state, data) {
        state.farmers = data
    },
    getFarmer(state, data) {
        state.farmer = data
    },
    getFollower(state, data) {
        state.follower = data
    },
    getFollowerData(state, data) {
        state.followerData = data
    },
}

export const actions = {
    // 全ての生産者を取得
    async getFarmersAction(context) {
        const entries = await client.getEntries({
            content_type: "farmer",
            order: '-sys.createdAt'
        });
        context.commit('getFarmers', entries.items);
    },
    // マイファーム詳細ページでの生産者を取得
    async getFarmerByMyfarmAction(context, payload) {
        const entries = await client.getEntries({
            content_type: "farmer",
            order: '-sys.createdAt'
        });
        const serchItems = entries.items;
        const serchData = serchItems.filter(d => {
            return d.fields.businessId === payload
        })
        context.commit('getFarmer', serchData[0]);
    },
    // ひとりの生産者を取得
    async getFarmerAction(context, payload) {
        const entry = await client.getEntry(payload.businessId);
        context.commit('getFarmer', entry);

    },
    // 生産者をフォローする
    async followAction(context, payload) {
        await db.collection("users").doc(payload.user_id).collection("follower").doc(payload.farmer_id).set({
            farmer_id: payload.farmer_id
        });
        context.dispatch('getFollowerAction', payload.user_id);
    },
    // フォローをやめる
    async quitFollowAction(context, payload) {
        await db.collection("users").doc(payload.user_id).collection("follower").doc(payload.farmer_id).delete();
        context.dispatch('getFollowerAction', payload.user_id);
    },
    // フォローしている生産者を取得
    async getFollowerAction(context, payload) {
        let follower = [];
        const followerSnapShots = await db.collection("users").doc(payload).collection("follower").get();
        await followerSnapShots.forEach(doc => {
            follower.push(doc.data().farmer_id);
        });
        context.dispatch('getFollowerDataAction', follower);
        context.commit('getFollower', follower);
    },
    // フォローしている生産者のデータをを取得
    async getFollowerDataAction(context, payload) {
        let data = [];
        const entries = await client.getEntries({
            content_type: "farmer",
            order: '-sys.createdAt'
        });
        payload.forEach(farmer_id => {

            const follorData = entries.items.filter(entry => {
                return entry.sys.id === farmer_id
            })
            data.push(follorData[0]);
        });
        context.commit('getFollowerData', data);
    }
}

