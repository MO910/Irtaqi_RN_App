import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import tw from "twrnc";

import useLogin from "../hook/useLogin";
const testUser = { email: "teacher@gmail.com", password: "123" };

export default function login() {
	const { userData } = useSelector((state) => state.user);
	const { isLoading, error } = useLogin(testUser);

	return (
		<View style={tw`flex-1 items-center justify-center bg-black`}>
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<Text style={tw`text-white text-4xl font-bold`}>
					User ID is: {userData.id}
				</Text>
			)}
		</View>
	);
}
