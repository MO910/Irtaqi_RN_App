import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const GRAPHQL_URL = "https://irtaqi-api.vercel.app/graphql";

const client = new ApolloClient({
	uri: GRAPHQL_URL,
	cache: new InMemoryCache(),
});

export default function ({ children }) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
