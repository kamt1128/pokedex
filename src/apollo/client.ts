import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { HttpLink } from "@apollo/client/link/http";

const link = new HttpLink({
  uri: "https://graphql.pokeapi.co/v1beta2",
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});