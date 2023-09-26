import React from "react";
import { Stack } from "expo-router";
// apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// redux
import { Provider } from "react-redux";
import { Store } from "../store";

const GRAPHQL_URL = "https://irtaqi-api.vercel.app/graphql";

const client = new ApolloClient({
	uri: GRAPHQL_URL,
	cache: new InMemoryCache(),
});

const _layout = () => {
	return (
		<ApolloProvider client={client}>
			<Provider store={Store}>
				<Stack>
					<Stack.Screen
						name="(tabs)"
						options={{ headerShown: false }}
					/>
				</Stack>
			</Provider>
		</ApolloProvider>
	);
};

export default _layout;
