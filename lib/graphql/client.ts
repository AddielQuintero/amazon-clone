import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwz0by1400kc07ul8dqjw9xs/master',
    useGETForQueries: true,
  }),
  cache: new InMemoryCache(),
})

export default client
