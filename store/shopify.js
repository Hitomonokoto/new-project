import { GraphQLClient } from "graphql-request";



export const state = () => ({
  myFarms: [],
  events: []
})

export const mutations = {
  getProducts(state, data) {
    state.myFarms = data;
    state.events = data;
  },
  serchMyfarm(state, data) {
    state.myFarms = data;
  }
  ,
  getProduct(state, data) {
    state.myFarm = data
  }
}

export const actions = {
  async getProductsAction(context) {
    const endpoint =
      "https://xn-tckeg2cvab4b4a4cc7iwc7b0g.myshopify.com/api/2019-07/graphql.json";

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        "X-Shopify-Storefront-Access-Token":
          "751a6be76c4928a1c85fa50c90593a1d"
      }
    });
    const query = `
        {
          products(first: 100) {
            edges {
              node {
                id
                handle
                title
                collections(first: 100) {
                  edges {
                    node {
                      id
                    }
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      originalSrc
                    }
                  }
                }
                description
                priceRange {
                  maxVariantPrice {
                    amount
                  }
                }
              }
            }
          }
        }
      `;
    const data = await graphQLClient.request(query);
    const products = data.products.edges;
    context.commit('getProducts', products);

  },
  async getProductAction2(context, handle) {
    const endpoint =
      "https://xn-tckeg2cvab4b4a4cc7iwc7b0g.myshopify.com/api/2019-07/graphql.json";

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        "X-Shopify-Storefront-Access-Token":
          "751a6be76c4928a1c85fa50c90593a1d"
      }
    });
    const query = `
        {
          products(first: 100) {
            edges {
              node {
                handle
                title
                collections(first: 100) {
                  edges {
                    node {
                      id
                    }
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      originalSrc
                    }
                  }
                }
                description
                priceRange {
                  maxVariantPrice {
                    amount
                  }
                }
              }
            }
          }
        }
      `;
    const data = await graphQLClient.request(query);
    const myFarm = data.products.edges.filter(v => {
      return v.node.handle === handle
    })
    context.commit('getProduct', myFarm[0]);
  }
}

