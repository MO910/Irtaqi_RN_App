import React, { useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { gql, useQuery } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

// import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../hook/useUserData";
import { userActions } from "../store/user";

const Users = (id) => gql`
	query {
		user(id: "${id}") {
			first_name
		}
	}
`;

export default function () {
	const { userData } = getUserData();
	const { data, loading, error } = useQuery(Users(userData.id));
	// const dispatch = useDispatch();

	useEffect(() => {
		console.log("first_name", data?.user?.[0]?.first_name);
		if (!loading)
			dispatch(
				userActions.setUserData({ name: data.user[0].first_name }),
			);
	}, [data]);

	if (loading) return <ActivityIndicator />;
	if (error) return <Text>Error: you have to login first</Text>;
	return <Text>{JSON.stringify(data)}</Text>;
}
