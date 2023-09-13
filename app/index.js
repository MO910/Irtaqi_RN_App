import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { langActions } from "../store/lang";

function translate(messages, locale, word) {
	return messages?.[locale]?.[word] || word;
}

export default function index() {
	const router = useRouter();

	const { name, email } = useSelector((state) => state.user); // select a slice
	const { messages, locale } = useSelector((state) => state.lang); // select a slice
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.setUserName("malik osama"));
	}, [name, messages, locale]);

	function changeLanguage() {
		dispatch(langActions.changeLang(locale == "en" ? "ar" : "en"));
	}

	return (
		<View>
			<Text>
				{translate(messages, locale, "name")}: {name}
			</Text>
			<Button title="change language" onPress={changeLanguage} />
			<Button onPress={() => router.push("/login")} title="login" />
			<Button onPress={() => router.push("/graphql")} title="graphql" />
		</View>
	);
}
