import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function other() {
	return (
		<View>
			<Link href="/another">Another page</Link>
		</View>
	);
}
