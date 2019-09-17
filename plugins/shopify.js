// const Client = require("shopify-buy");
import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'https://xn-tckeg2cvab4b4a4cc7iwc7b0g.myshopify.com',
    storefrontAccessToken: '751a6be76c4928a1c85fa50c90593a1d'
});


export default client