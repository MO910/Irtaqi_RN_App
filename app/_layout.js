import React from "react";
import { Stack } from "expo-router";
// apollo
import ApolloProvider from "../components/ApolloProvider";
// redux
import { Provider } from "react-redux";
import { Store } from "../store";

const _layout = () => {
	return (
		<ApolloProvider>
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
