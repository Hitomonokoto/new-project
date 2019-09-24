import db from "~/plugins/firebase";

export const state = () => ({
    posts: []
})

export const mutations = {
    getPosts(state, data) {
        state.posts = data;
    }
}

export const actions = {
    async getPostsAction(context) {
        try {
            const posts = []
            const postSnapShots = await db.collection('timeline').orderBy('created_date', 'desc').get()
            postSnapShots.forEach((post, i) => {
                posts.push({ ...post.data(), id: post.id, post_id: post.id })
            });
            for (let i = 0; i < posts.length; i++) {
                const post = posts[i]
                const commentSnapShots = await db.collection("comments")
                    .where('post_id', '==', post.id).orderBy('created', 'desc').get()
                const comments = []
                commentSnapShots.forEach((comment, i) => {
                    comments.push({ ...comment.data(), id: comment.post_id })
                })
                posts[i] = { ...post, comments }
            }
            // console.log(posts, "aas")
            context.commit('getPosts', posts);


            // db.collection('timeline').orderBy('created_date', 'desc').get().then(posts => {
            //     let data = [];
            //     posts.forEach(post => {
            //         let postData = post.data();
            //         postData.post_id = post.id;

            //         let commentData = [];

            //         db.collection("comments")
            //             .where('post_id', '==', post.id).orderBy('created', 'desc').get().then(comments => {
            //                 comments.forEach(comment => {
            //                     commentData.push(comment.data());
            //                 });
            //             });
            //         postData.comments = commentData;
            //         data.push(postData);
            //     });
            // ßcontext.commit('getPosts', data);
            // });
        } catch (e) {
            console.log("firestore-postsがエラー！", e);
        }
    }
}