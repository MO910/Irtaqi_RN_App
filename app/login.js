import { View, Text, ActivityIndicator, TextInput, Button } from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import tw from "twrnc";

import useLogin from "../hook/useLogin";
import useUserData from "../hook/useUserData";
// redux
import { useSelector, useDispatch } from "react-redux";
// import { userActions } from "../store/user";

import { gql, useLazyQuery } from "@apollo/client";
const UsersQuery = gql`
	query User($id: ID) {
		user(id: $id) {
			first_name
		}
	}
`;

export default function login() {
	const [email, setEmail] = useState("teacher@gmail.com");
	const [password, setPassword] = useState("123");
	// redux
	const { userData } = useSelector((state) => state.user); // select a slice
	const lazyQuery = useLazyQuery(UsersQuery);

	const { isLoading, error, loginWrapper } = useLogin({
		email,
		password,
	});

	return (
		<View style={tw`flex-1 items-center justify-center bg-black`}>
			{/* error message */}
			<Text style={tw`text-red-500`}>error: {error || "none"}</Text>
			{/* email input field */}
			<Text style={tw`text-white`}>email</Text>
			<TextInput
				style={tw`border-4 border-sky-500 w-full p-3 text-white`}
				value={email}
				onChangeText={setEmail}
			/>
			{/* password input field */}
			<Text style={tw`text-white`}>password</Text>
			<TextInput
				style={tw`border-4 border-sky-500 w-full p-3 text-white`}
				value={password}
				onChangeText={setPassword}
				secureTextEntry={true}
			/>
			{/* action */}
			<Button
				title="login"
				onPress={() => loginWrapper(lazyQuery)}
				disabled={isLoading}
				style={tw`w-full bg-green-500`}
			/>
			{/*  */}
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<Text style={tw`text-white text-4xl font-bold`}>
					User ID is: {JSON.stringify(userData)}
				</Text>
			)}
		</View>
	);
}
