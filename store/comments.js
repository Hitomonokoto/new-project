import db from "~/plugins/firebase";


export const state = () => ({
    comments: []
})

export const mutations = {
    getComments: function (state, data) {
        state.comments = data;
    }
}

export const actions = {
    async getCommentsAction(context) {
        let data = [];
        try {
            const querySnapshot = await db.collection("comments")
                .orderBy('created_date').get()
            querySnapshot.forEach(doc => {
                data.push(doc.data());
            });
            context.commit('getComments', data);
        } catch (e) {
            console.log("firestore-commentsがエラー！", e)
        }
    }
}