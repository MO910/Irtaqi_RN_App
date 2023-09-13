import React, { useEffect } from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import { gql, useQuery } from "@apollo/client";

const Users = gql`
	query {
		user(rules: null) {
			first_name
		}
	}
`;

export default function () {
	const { data, loading, error } = useQuery(Users);
	useEffect(() => {
		console.log({ data, loading, error });
	});
	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error : {error.message}</Text>;
	return <Text>{JSON.stringify(data)}</Text>;
}
