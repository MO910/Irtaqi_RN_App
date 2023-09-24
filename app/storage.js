import { View, Text } from "react-native";
import React, { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

async function save(key, value) {
	await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
	let result = await SecureStore.getItemAsync(key);
	if (result) {
		alert("🔐 Here's your value \n" + result);
	} else {
		alert("No values stored under that key.");
	}
}

export default function storage() {
	useEffect(() => {
		// save("key1", "value100000000000000");
		console.log(getValueFor("key1"));
	}, []);
	return (
		<View>
			<Text>storage</Text>
		</View>
	);
}
