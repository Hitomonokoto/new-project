import Cookies from "universal-cookie";


export default async ({ req, store, route, redirect }) => {


    const cookies = req ? new Cookies(req.headers.cookie) : new Cookies();
    const token = await cookies.get("token");
    if (token && !store.state.login.token) {
        console.log("cookieにtokenはありますがstoreにはありません。");
        store.commit('login/getToken', token);
        return redirect("/test");

    } else {
        cookies.set("lastPath", route.path);
    }



};