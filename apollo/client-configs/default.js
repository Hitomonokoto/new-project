import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
    const httpLink = new HttpLink({ uri: 'https://xn-tckeg2cvab4b4a4cc7iwc7b0g.myshopify.com/api/2019-07/graphql.json' })

    const middlewareLink = new ApolloLink((operation, forward) => {
        operation.setContext({
            headers: {
                "X-Shopify-Storefront-Access-Token":
                    process.env.STORE_FRONT_ACCESS_TOKEN
            }
        })
        return forward(operation)
    })
    const link = middlewareLink.concat(httpLink)
    return {
        link,
        cache: new InMemoryCache()
    }
}