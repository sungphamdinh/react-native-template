
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const GRAPHQL_ENDPOINT = `https://graphql.contentstack.com/stacks/blt292960b854e5170e?environment=development&access_token=csf77a123fda5cc627a0363a49`;

export default function makeApolloClient(token: string) {
  const link = new HttpLink(
    {
      uri: GRAPHQL_ENDPOINT
    }
  )
  const cache = new InMemoryCache();
  return new ApolloClient({cache: cache, link: link});
}