import React from "react";
import { Tabs } from "expo-router";

export default function () {
	return (
		<Tabs>
			<Tabs.Screen name="home" />
			<Tabs.Screen name="login" />
			<Tabs.Screen name="other" />
		</Tabs>
	);
}
