import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const userDataKey = "userData";

import { userActions } from "../../store/user";
import { useSelector, useDispatch } from "react-redux";

export default function () {
	// const [userData, setUserData] = useState(null);
	// redux
	const { userData } = useSelector((state) => state.user); // select a slice
	const dispatch = useDispatch();
	// get user data from storage
	function getUserData() {
		SecureStore.getItemAsync(userDataKey).then((userData) => {
			dispatch(userActions.setUserDataState(JSON.parse(userData)));
		});
	}
	// change user data
	async function updateUserData(newData) {
		let feedData = { ...userData, ...newData };
		dispatch(userActions.setUserDataState(feedData));
		feedData = JSON.stringify(feedData);
		return await SecureStore.setItemAsync(userDataKey, feedData);
	}
	// logout event
	function deleteUserData() {
		SecureStore.deleteItemAsync(userDataKey).then(() =>
			dispatch(userActions.deleteUserDataState()),
		);
	}
	// fire get user data from secure storage
	useEffect(() => {
		getUserData();
	}, []);

	return { userData, getUserData, updateUserData, deleteUserData };
}
