import firebase from "~/plugins/firebase";
require('firebase/firestore');
require('firebase/storage');
const db = firebase.firestore();
const firestorage = firebase.storage();

export const state = () => ({
    posts: [],
    selectPosts: []
})

export const mutations = {
    getPosts(state, data) {
        state.posts = data;
    },
    getSelectPosts(state, data) {
        state.selectPosts = data;
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
        if (state.selectPosts.length) {
            const x = state.selectPosts.filter(post => {
                return post.post_id == data.post_id;
            })
            const y = state.selectPosts.filter(post => {
                return post.post_id != data.post_id;
            })
            x[0].comments = data.comments;
            const z = y.concat(x);
            state.selectPosts = z.sort(function (a, b) {
                if (a.created.seconds < b.created.seconds) {
                    return 1;
                } else {
                    return -1;
                }
            })
        }
    },
    commentCountAdjust(state, data) {
        const x = state.posts.filter(post => {
            return post.post_id == data;
        })
        const y = state.posts.filter(post => {
            return post.post_id != data;
        })
        x[0].comment_count++;
        const z = y.concat(x);
        state.posts = z.sort(function (a, b) {
            if (a.created.seconds < b.created.seconds) {
                return 1;
            } else {
                return -1;
            }
        })
    },
    commentDiscountAdjust(state, data) {
        const x = state.posts.filter(post => {
            return post.post_id == data;
        })
        const y = state.posts.filter(post => {
            return post.post_id != data;
        })
        x[0].comment_count--;
        const z = y.concat(x);
        state.posts = z.sort(function (a, b) {
            if (a.created.seconds < b.created.seconds) {
                return 1;
            } else {
                return -1;
            }
        })
    }
}

export const actions = {
    // 画像をアップロードする
    uploadImage: (context, payload) => {
        return new Promise((resolve, reject) => {
            const uploadTask = firestorage
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
        const storageRef = firebase.storage().ref("timeline/" + payload.oldFileName);
        storageRef.delete().then(function () {
            console.log("画像の削除に成功しました。");
        }).catch(function (error) {
            console.log("エラー（画像の削除に失敗しました。）");
        });
        return new Promise((resolve, reject) => {
            const uploadTask = firestorage
                .ref(payload.name)
                .put(payload.file)
                .then(snapshot => {
                    snapshot.ref.getDownloadURL().then(url => {
                        resolve(url)
                    })
                })
        })
    },
    // 投稿する（トップページ用）
    PostAction(context, payload) {
        const docRef = db.collection("timeline").doc();
        const setAda = docRef.set({
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
        context.dispatch("getPostsAction");
    },
    // 投稿する(個人ページ用)
    PostSingleAction(context, payload) {
        const docRef = db.collection("timeline").doc();
        const setAda = docRef.set({
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
        context.dispatch("getSelectPostsAction", payload.business_id);
    },
    // 投稿を編集する
    PostEditAction(context, payload) {
        let fileName = payload.fileName;
        if (!payload.fileUrl && payload.fileName) {
            const storageRef = firebase.storage().ref(payload.fileName);
            storageRef.delete().then(function () {
                console.log("画像の削除に成功しました。");
            }).catch(function (error) {
                console.log("エラー（画像の削除に失敗しました。）");
            });
            fileName = null;
        }
        const docRef = db.collection("timeline").doc(payload.post_id);
        const setAda = docRef.update({
            title: payload.title,
            text: payload.text,
            fileName: fileName,
            fileUrl: payload.fileUrl,
        });
        context.dispatch("getPostsAction");
    },
    // タイムラインを読み込む(トップページ用)
    async getPostsAction(context) {
        try {
            const posts = [];
            const postSnapShots = await db.collection('timeline').orderBy('created', 'desc').get();
            postSnapShots.forEach(post => {
                const post_data = post.data();
                post_data.post_id = post.id;
                posts.push(post_data);
            });
            context.commit('getPosts', posts);
        } catch (e) {
            console.log("firestore-postsがエラー！", e);
        }
    },
    // タイムラインを読み込む(個人ページ用)
    async getSelectPostsAction(context, payload) {
        try {
            const posts = [];
            const postSnapShots = await db.collection('timeline').where('business_id', '==', payload).get();
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
            context.commit('getSelectPosts', posts);
        } catch (e) {
            console.log("firestore-postsがエラー！", e);
        }
    },
    // 投稿を削除する
    deletePostAction(context, post_data) {
        if (post_data.fileUrl) {
            const storageRef = firebase.storage().ref(post_data.fileName);
            storageRef.delete().then(function () {
                console.log("投稿の削除に成功しました。");
            }).catch(function (error) {
                console.log("エラー（投稿の削除に失敗しました。）");
            });
        }
        const deletePost = db.collection('timeline').doc(post_data.post_id).delete().then(() => {
            context.dispatch("getPostsAction");
        })

    },
    // 画像をストレージから削除する
    deleteImageAction(context, fileName) {
        const storageRef = firebase.storage().ref(post_data.fileName);
        storageRef.delete().then(function () {
            console.log("画像の削除に成功しました。");
        }).catch(function (error) {
            console.log("エラー（画像の削除に失敗しました。）");
        });
        const deletePost = db.collection('timeline').doc(post_data.post_id).delete();
        context.dispatch("getPostsAction");
    },
    // コメントする
    commentAction(context, payload) {
        const docRef = db.collection("timeline").doc(payload.post_id).collection("comments").doc();
        const setAda = docRef.set({
            user_id: payload.user_id,
            user_icon: payload.user_icon,
            name: payload.name,
            text: payload.text,
            created: firebase.firestore.Timestamp.fromDate(new Date())
        });
        const docRef2 = db.collection("timeline").doc(payload.post_id);
        let xxx = docRef2.get()
            .then(doc => {
                const comment_count = doc.data().comment_count;
                const setAda2 = docRef2.update({
                    comment_count: comment_count + 1
                });
                console.log(comment_count + 1)
                console.log('カウントしました！')
                context.dispatch("getCommentsAction", payload.post_id);
                context.commit("commentCountAdjust", payload.post_id);
            })
    },
    // コメントを削除する
    commentDeleteAction(context, data) {
        const commentDelete = db.collection("timeline").doc(data.post_id).collection("comments").doc(data.comment_id).delete();
        const docRef = db.collection("timeline").doc(data.post_id);
        let xxx = docRef.get()
            .then(doc => {
                const comment_count = doc.data().comment_count;
                const setAda2 = docRef.update({
                    comment_count: comment_count - 1
                });
                console.log(comment_count - 1)
                console.log('ディスカウントしました！')
                context.dispatch("getCommentsAction", data.post_id);
                context.commit("commentDiscountAdjust", data.post_id);
            })
    },
    // コメントを読み込む
    async getCommentsAction(context, payload) {
        try {

            const comments = [];
            const commentSnapShots = await db.collection('timeline').doc(payload).collection('comments').orderBy('created', 'asc').get();
            commentSnapShots.forEach(comment => {
                const comment_data = comment.data();
                comment_data.comment_id = comment.id;
                comments.push(comment_data);
            });
            context.commit('getComments', { comments: comments, post_id: payload });

        } catch (e) {
            console.log("firestore-getCommentsActionがエラー！", e);
        }
    },
    // いいね！する
    getLikeAction(context, payload) {
        const docRef = db.collection("timeline").doc(payload.post_data.post_id).collection("likes").doc(payload.user_id);
        const setAda = docRef.set({
            user_id: payload.post_data.user_id,
            created: firebase.firestore.Timestamp.fromDate(new Date())
        });
        const docRef2 = db.collection("timeline").doc(payload.post_data.post_id);
        const setAda2 = docRef2.update({
            like_count: payload.post_data.like_count + 1
        });
        console.log(payload.post_data.like_count)
        console.log('カウントしました！')
        context.dispatch("getPostsAction", payload.post_data.post_id);
    },
    // いいね！を取り消す
    loseLikeAction(context, payload) {
        const commentDelete = db.collection("timeline").doc(payload.post_data.post_id).collection("likes").doc(payload.user_id).delete();
        const docRef = db.collection("timeline").doc(payload.post_data.post_id);
        const discount = docRef.update({
            like_count: payload.post_data.like_count - 1
        });
        console.log(payload.post_data.like_count)
        console.log('ディスカウントしました！')
        context.dispatch("getPostsAction", payload.post_data.post_id);
    }
}