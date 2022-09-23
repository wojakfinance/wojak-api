import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://graph.yodeswap.dog/subgraphs/name/yode-blocks",
  }),
  cache: new InMemoryCache(),
});
