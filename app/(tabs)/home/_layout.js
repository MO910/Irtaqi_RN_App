import React from "react";
import { Stack } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function () {
	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="anotherInHome" />
		</Stack>
	);
}
