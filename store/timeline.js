import firebase from "~/plugins/firebase";
require('firebase/firestore');
require('firebase/storage');
const db = firebase.firestore();
const firestorage = firebase.storage();



export const state = () => ({
    posts: [],
    PostsSingle: [],
    likes: []
})



export const mutations = {
    getPosts(state, data) {
        state.posts = data;
    },
    getPostsSingle(state, data) {
        state.PostsSingle = data;
    },
    getComments(state, data) {
        const x = state.posts.filter(post => {
            return post.post_id == data.post_id;
        })
        const y = state.posts.filter(post => {
            return post.post_id != data.post_id;
        })
        x[0].comments = data.comments;
        const z = y.concat(x);
        state.posts = z.sort(function (a, b) {
            if (a.created.seconds < b.created.seconds) {
                return 1;
            } else {
                return -1;
            }
        })
        if (state.PostsSingle.length) {
            const x = state.PostsSingle.filter(post => {
                return post.post_id == data.post_id;
            })
            const y = state.PostsSingle.filter(post => {
                return post.post_id != data.post_id;
            })
            x[0].comments = data.comments;
            const z = y.concat(x);
            state.PostsSingle = z.sort(function (a, b) {
                if (a.created.seconds < b.created.seconds) {
                    return 1;
                } else {
                    return -1;
                }
            })
        }
    },
    getLikes(state, payload) {
        state.likes = payload;
    }
}



export const actions = {

    // 画像 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 画像をアップロードする
    uploadImage: (context, payload) => {
        return new Promise((resolve) => {
            firestorage
                .ref("timeline/" + payload.name)
                .put(payload.file)
                .then(snapshot => {
                    snapshot.ref.getDownloadURL().then(url => {
                        resolve(url)
                    })
                })
        })
    },
    // 画像のアップロードを更新する
    changeUploadImage: (context, payload) => {
        firebase.storage().ref("timeline/" + payload.oldFileName).delete();
        return new Promise((resolve) => {
            firestorage
                .ref(payload.name)
                .put(payload.file)
                .then(snapshot => {
                    snapshot.ref.getDownloadURL().then(url => {
                        resolve(url)
                    })
                })
        })
    },
    // 画像を削除する
    deleteImageAction(context, fileName) {
        firestorage.ref(post_data.fileName).delete();
        db.collection('timeline').doc(post_data.post_id).delete();
        context.dispatch("getPostsAction");
    },

    // 投稿 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 投稿する
    PostAction(context, payload) {
        db.collection("timeline").doc().set({
            user_id: payload.user_id,
            business_id: payload.business_id,
            farmer_id: payload.farmer_id,
            user_icon: payload.user_icon,
            name: payload.name,
            text: payload.text,
            title: payload.title,
            fileName: payload.fileName,
            fileUrl: payload.fileUrl,
            created: firebase.firestore.Timestamp.fromDate(new Date()),
            comment_count: 0,
            like_count: 0
        });
        context.dispatch("getPostsAction", { business_id: payload.business_id, timeline_type: payload.timeline_type });
    },
    // 投稿を編集する
    async PostEditAction(context, payload) {
        let fileName = payload.fileName;
        if (!payload.fileUrl && payload.fileName) {
            await firebase.storage().ref(payload.fileName).delete();
            fileName = null;
        }
        await db.collection("timeline").doc(payload.post_id).update({
            title: payload.title,
            text: payload.text,
            fileName: fileName,
            fileUrl: payload.fileUrl,
        });
        context.dispatch("getPostsAction", { business_id: payload.business_id, timeline_type: payload.timeline_type });
    },
    // タイムラインを読み込む
    async getPostsAction(context, payload) {
        const posts = [];
        if (payload.timeline_type == 'all') {
            const postSnapShots = await db.collection('timeline').orderBy('created', 'desc').get();
            postSnapShots.forEach(post => {
                const post_data = post.data();
                post_data.post_id = post.id;
                posts.push(post_data);
            });
            context.commit('getPosts', posts);
        } else if (payload.timeline_type == 'single') {
            const postSnapShots = await db.collection('timeline').where('business_id', '==', payload.business_id).get();
            postSnapShots.forEach(post => {
                const post_data = post.data();
                post_data.post_id = post.id;
                posts.push(post_data);
            });
            posts.sort(function (a, b) {
                if (a.created < b.created) {
                    return 1;
                } else {
                    return -1;
                }
            })
            context.commit('getPostsSingle', posts);
        }
    },
    // 投稿を削除する
    async deletePostAction(context, payload) {
        if (payload.fileUrl) {
            firebase.storage().ref(payload.post_data.fileName).delete();
        }
        await db.collection('timeline').doc(payload.post_data.post_id).delete();
        context.dispatch("getPostsAction", { business_id: payload.post_data.business_id, timeline_type: payload.timeline_type });
    },


    // コメント ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // コメントする
    async commentAction(context, payload) {
        await db.collection("timeline").doc(payload.post_id).collection("comments").doc().set({
            user_id: payload.user_id,
            user_icon: payload.user_icon,
            name: payload.name,
            text: payload.text,
            created: firebase.firestore.Timestamp.fromDate(new Date())
        });
        const comments = await db.collection("timeline").doc(payload.post_id).collection("comments").get();
        const comment_count = await comments.size;
        await db.collection("timeline").doc(payload.post_id).update({
            comment_count: comment_count
        });
        context.dispatch("getPostsAction", { business_id: payload.business_id, timeline_type: payload.timeline_type });
        context.dispatch("getCommentsAction", payload.post_id);
    },
    // コメントを削除する
    async commentDeleteAction(context, payload) {
        await db.collection("timeline").doc(payload.post_id).collection("comments").doc(payload.comment_id).delete();
        const comments = await db.collection("timeline").doc(payload.post_id).collection("comments").get();
        const comment_count = await comments.size;
        await db.collection("timeline").doc(payload.post_id).update({
            comment_count: comment_count
        });
        context.dispatch("getPostsAction", { business_id: payload.business_id, timeline_type: payload.timeline_type });
        context.dispatch("getCommentsAction", payload.post_id);
    },
    // コメントを読み込む
    async getCommentsAction(context, payload) {
        const comments = [];
        const commentSnapShots = await db.collection('timeline').doc(payload).collection('comments').orderBy('created', 'asc').get();
        commentSnapShots.forEach(comment => {
            const comment_data = comment.data();
            comment_data.comment_id = comment.id;
            comments.push(comment_data);
        });
        context.commit('getComments', { comments: comments, post_id: payload });
    },

    // いいね！/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // いいね！する
    async getLikeAction(context, payload) {
        await db.collection("users").doc(payload.user_id).collection("likes").doc(payload.post_data.post_id).set({
            post_id: payload.post_data.post_id
        });
        const likes = await db.collection("users").doc(payload.user_id).collection("likes").get();
        await db.collection("timeline").doc(payload.post_data.post_id).update({
            like_count: firebase.firestore.FieldValue.increment(1)
        });
        context.dispatch("getPostsAction", { business_id: payload.business_id, timeline_type: payload.timeline_type });
        context.dispatch("getLikesAction", payload.user_id);
    },
    // いいね！を取り消す
    async loseLikeAction(context, payload) {
        await db.collection("users").doc(payload.user_id).collection("likes").doc(payload.post_data.post_id).delete();
        const likes = await db.collection("users").doc(payload.user_id).collection("likes").get();
        await db.collection("timeline").doc(payload.post_data.post_id).update({
            like_count: firebase.firestore.FieldValue.increment(-1)
        });
        context.dispatch("getPostsAction", { business_id: payload.business_id, timeline_type: payload.timeline_type });
        context.dispatch("getLikesAction", payload.user_id);
    },
    // いいね！を読み込む
    async getLikesAction(context, payload) {
        const likes = [];
        const likesSnapShots = await db.collection("users").doc(payload).collection("likes").get();
        likesSnapShots.forEach(like => {
            likes.push(like.data().post_id);
        });

        context.commit("getLikes", likes);
    },
}