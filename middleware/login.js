import Cookies from "universal-cookie";


export default async ({ req, store, route, redirect }) => {


    const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
    const token = cookies.get("token");
    console.log(token);
    console.log(route.path);
    if (token && !store.state.login.token) {
        console.log("tokenみっけ！");
        store.commit('login/getToken', token);
        store.commit('login/getPath', route.path);
        return redirect("/test");
    } else {
        console.log("tokenないよ！");
    }



};