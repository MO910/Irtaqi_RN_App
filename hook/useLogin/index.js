import { useState, useEffect } from "react";
import { useUpdateUserData } from "../useUserData";
// actions
import getId from "./actions/getId";
import fetchUserInfo from "./actions/fetchUserInfo";

import { useSelector, useDispatch } from "react-redux";
import useConnectToStore from "../useConnectToStore";
import connectToUserStore from "../useConnectToStore/instants/connectToUserStore";

import { userActions } from "../../store/user";

function axiosErrorHandler(error, setError) {
	switch (error.code) {
		case "ERR_BAD_REQUEST":
			setError("Invalid user email or password");
			break;
		case "ERR_NETWORK":
			setError("Reconnect to the internet then try again.");
			break;
		default:
			setError("Unexpected error happened. try again later.");
	}
}

export default function (connectToUserStore, userLoginInfo) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	// redux
	const dispatch = useDispatch();
	const { userData, userDataKey } = useSelector((state) => state.user);
	// const updateUserData = useUpdateUserData({
	// 	dispatch,
	// 	userData,
	// 	userDataKey,
	// });
	// const updateUserData = connectionsInstance.update;
	// login function
	async function login(lazyQuery) {
		// get user id
		try {
			var userId = await getId(userLoginInfo);
		} catch (error) {
			axiosErrorHandler(error, setError);
		}
		// graphQl fetch
		await fetchUserInfo(userId, lazyQuery, connectToUserStore.update);
	}
	async function loginWrapper(lazyQuery) {
		setIsLoading(true);
		await login(lazyQuery);
		setIsLoading(false);
	}
	// return
	return { isLoading, error, loginWrapper };
}
