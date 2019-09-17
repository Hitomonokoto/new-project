import db from "~/plugins/firebase";

export const state = () => ({
    posts: []
})

export const mutations = {
    getPosts: function (state, data) {
        state.posts = data;
    }
}

export const actions = {
    async getPostsAction(context) {
        let data = [];
        try {
            const querySnapshot = await db.collection("timeline")
                .orderBy('created_date', 'desc').get()
            querySnapshot.forEach(doc => {
                let docData = doc.data();
                docData.post_id = doc.id;
                data.push(docData);
            });
            context.commit('getPosts', data);
        } catch (e) {
            console.log("firestore-postsがエラー！", e)
        }
    }
}