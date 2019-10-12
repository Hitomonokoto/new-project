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
    // マイファーム詳細ページでの生産者を取得
    async getFarmerByMyfarmAction(context, data) {
        console.log("ここまできてる？")
        const entries = await client.getEntries({
            content_type: "farmer",
            order: '-sys.createdAt'
        });
        const serchItems = entries.items;
        const serchData = serchItems.filter(d => {
            return d.fields.farmId === data
        })
        context.commit('getFarmerByMyfarm', serchData);
    },
    // ひとりの生産者を取得
    async getFarmerAction(context, params) {
        const entry = await client.getEntry(params.farmId);
        context.commit('getFarmer', entry);

    }
}

