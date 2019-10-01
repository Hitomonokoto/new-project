import client from "~/plugins/contentful";

export const state = () => ({
    farmers: [],
    farmerByMyfarm: [],
    farmer: []
})

export const mutations = {
    getFarmers(state, data) {
        state.farmers = data
    },
    getFarmersSerch(state, data) {
        state.farmers = data
    },
    getFarmerByMyfarm(state, data) {
        state.farmerByMyfarm = data
    },
    getFarmer(state, data) {
        state.farmer = data
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
    // カテゴリー検索でヒットした生産者を取得
    async getFarmersSerchAction(context, params) {
        const entries = await client.getEntries({
            content_type: "farmer",
            order: '-sys.createdAt'
        });
        const serchItems = entries.items;
        const serchData = serchItems.filter(d => {
            return d.fields.locationTag === params.farmerSerch | ~d.fields.foodTag.indexOf(params.farmerSerch)
        })
        context.commit('getFarmers', serchData);
    },
    // マイファーム詳細ページでの生産者を取得
    async getFarmerByMyfarmAction(context, data) {
        const entries = await client.getEntries({
            content_type: "farmer",
            order: '-sys.createdAt'
        });
        const serchItems = entries.items;
        const serchData = serchItems.filter(d => {
            return d.fields.farmName === data
        })
        context.commit('getFarmerByMyfarm', serchData);
    },
    // ひとりの生産者を取得
    async getFarmerAction(context, params) {
        const entry = await client.getEntry(params.farmId);
        context.commit('getFarmer', entry);

    }
}

