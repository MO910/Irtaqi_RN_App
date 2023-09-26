import React from "react";
import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function () {
	return (
		<Tabs>
			<Tabs.Screen
				name="home"
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="planet-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen name="login" />
			<Tabs.Screen name="other" />
		</Tabs>
	);
}
