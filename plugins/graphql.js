import { GraphQLClient } from "graphql-request";

const endpoint =
    "https://xn-tckeg2cvab4b4a4cc7iwc7b0g.myshopify.com/api/2019-07/graphql.json";

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        "X-Shopify-Storefront-Access-Token":
            "751a6be76c4928a1c85fa50c90593a1d"
    }
});

export default graphQLClient