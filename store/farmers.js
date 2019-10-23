import client from "~/plugins/contentful";

export const state = () => ({
    farmers: [],
    farmer: null
})

export const mutations = {
    getFarmers(state, data) {
        state.farmers = data
    },
    getFarmer(state, data) {
        state.farmer = data
        console.log("plplplplplplplplplpl")
        console.log(data)
    }
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
    async getFarmerByMyfarmAction(context, data) {
        const entries = await client.getEntries({
            content_type: "farmer",
            order: '-sys.createdAt'
        });
        const serchItems = entries.items;
        const serchData = serchItems.filter(d => {
            return d.fields.businessId === data
        })
        console.log("okokokokokoko")
        console.log(serchData[0])
        context.commit('getFarmer', serchData[0]);
    },
    // ひとりの生産者を取得
    async getFarmerAction(context, params) {
        const entry = await client.getEntry(params.businessId);
        context.commit('getFarmer', entry);

    }
}

