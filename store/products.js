import client from "~/plugins/contentful";

export const state = () => ({
    products: [],
    productsByfarmer: [],
    product: []
})

export const mutations = {
    getProducts(state, data) {
        state.products = data
    },
    getProductsByfarmer(state, data) {
        state.productsByfarmer = data
    },
    getProduct(state, data) {
        state.product = data
    }
}

export const actions = {
    // 全ての生産者を取得
    async getProductsAction(context) {
        const entries = await client.getEntries({
            content_type: "product",
            order: '-sys.createdAt'
        });
        context.commit('getProducts', entries.items);
    },
    // マイファーム詳細ページでの生産者を取得
    async getProductsByfarmerAction(context, data) {
        const entries = await client.getEntries({
            content_type: "product",
            order: '-sys.createdAt'
        });
        const serchItems = entries.items;
        const serchData = serchItems.filter(d => {
            return d.fields.farmId === data
        })
        context.commit('getProductsByfarmer', serchData);
    },
    // ひとりの生産者を取得
    async getProductAction(context, params) {
        const entry = await client.getEntry(params.productId);
        context.commit('getProduct', entry);

    }
}

