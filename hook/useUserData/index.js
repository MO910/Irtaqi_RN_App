import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

// const userDataKey = "userData";

import { userActions } from "../../store/user";
import { useSelector, useDispatch } from "react-redux";

// get user data from storage
export function getUserDataFromStorage({ dispatch, userDataKey }) {
	SecureStore.getItemAsync(userDataKey).then((userData) => {
		dispatch(userActions.setUserDataState(JSON.parse(userData)));
	});
}
// change user data
export function useUpdateUserData({ dispatch, userData, userDataKey }) {
	return function (newData) {
		let feedData = { ...userData, ...newData };
		// update redux state
		dispatch(userActions.setUserDataState(feedData));
		console.log({ userData, newData, feedData });
		// update secure store state
		feedData = JSON.stringify(feedData);
		return SecureStore.setItemAsync(userDataKey, feedData);
	};
}
// logout event
export function deleteUserData({ dispatch, userDataKey }) {
	SecureStore.deleteItemAsync(userDataKey).then(() =>
		dispatch(userActions.deleteUserDataState()),
	);
}
// export default function () {
// 	// redux
// 	// const { userData } = useSelector((state) => state.user); // select a slice
// 	const dispatch = useDispatch();
// 	// fire get user data from secure storage
// 	useEffect(() => {
// 		getUserData();
// 	}, []);

// 	return { getUserData, updateUserData, deleteUserData };
// }
