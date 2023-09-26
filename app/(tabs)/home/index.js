import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import tw from "twrnc";
// redux
import { useSelector, useDispatch } from "react-redux";
import { langActions } from "../../../store/lang";
import { userActions } from "../../../store/user";
// import {
// 	getUserDataFromStorage,
// 	deleteUserData,
// } from "../../../hook/useUserData";
import connectToUserStore from "../../../hook/useConnectToStore/instants/connectToUserStore";

function translate(messages, locale, word) {
	return messages?.[locale]?.[word] || word;
}

export default function index() {
	const router = useRouter();
	const { messages, locale } = useSelector((state) => state.lang); // select a slice
	const dispatch = useDispatch();
	// user state
	const { userData, userDataKey } = useSelector((state) => state.user);
	// toggle language function
	function changeLanguage() {
		dispatch(langActions.changeLang(locale == "en" ? "ar" : "en"));
	}
	// get the stored user data to redux state
	const connectionsInstance = connectToUserStore();
	useEffect(() => {
		connectionsInstance.get();
		connectionsInstance.update({});
	}, []);

	return (
		<View>
			<Text>{JSON.stringify(userData)}</Text>
			<Text>
				{translate(messages, locale, "name")}:{" "}
				{userData?.name || "null"}
			</Text>
			<Button title="change language" onPress={changeLanguage} />
			{/* login condition */}
			{userData?.id ? (
				<Button
					onPress={() => connectionsInstance.delete()}
					title="logout"
					color="red"
				/>
			) : (
				<Button onPress={() => router.push("/login")} title="login" />
			)}
			<Button onPress={() => router.push("/graphql")} title="graphql" />
			<Button onPress={() => router.push("/storage")} title="storage" />
			{/* another page in the same tab */}
			<Button
				onPress={() => router.push("/home/anotherInHome")}
				title="Another In Home"
				color="green"
			/>
		</View>
	);
}
