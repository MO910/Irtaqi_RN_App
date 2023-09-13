import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { langActions } from "../store/lang";

function translate(messages, locale, word) {
	return messages?.[locale]?.[word] || word;
}

export default function index() {
	const router = useRouter();

	const { userData } = useSelector((state) => state.user); // select a slice
	const { messages, locale } = useSelector((state) => state.lang); // select a slice
	const dispatch = useDispatch();

	function changeLanguage() {
		dispatch(langActions.changeLang(locale == "en" ? "ar" : "en"));
	}

	return (
		<View>
			<Text>
				{translate(messages, locale, "name")}:{" "}
				{userData?.name || "null"}
			</Text>
			<Button title="change language" onPress={changeLanguage} />
			<Button onPress={() => router.push("/login")} title="login" />
			<Button onPress={() => router.push("/graphql")} title="graphql" />
		</View>
	);
}
