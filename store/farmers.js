const contentful = require('contentful');
const client = contentful.createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_ACCESS_TOKEN
});

export const state = () => ({
    farmers: [],
    farmer: []
})

export const mutations = {
    getFarmers: function (state, data) {
        state.farmers = data
    },
    getFarmer: function (state, data) {
        state.farmer = data
    }
}

export const actions = {
    async getFarmersAction(context) {
        const entries = await client.getEntries({
            content_type: "farmer",
            order: '-sys.createdAt'
        });
        context.commit('getFarmers', entries.items);

    },
    async getFarmerAction(context, params) {
        const entry = await client.getEntry(params.farmId);
        context.commit('getFarmer', entry);

    }
}

