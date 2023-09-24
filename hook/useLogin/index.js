import { useState, useEffect } from "react";
import useUserData from "../useUserData";
// actions
import getId from "./actions/getId";
import fetchUserInfo from "./actions/fetchUserInfo";

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

export default function (userLoginInfo) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { updateUserData } = useUserData();
	// login function
	async function login(lazyQuery) {
		try {
			// get user id
			var userId = await getId(userLoginInfo, updateUserData);
		} catch (error) {
			axiosErrorHandler(error, setError);
		}
		// graphQl fetch
		await fetchUserInfo(userId, lazyQuery, updateUserData);
	}
	async function loginWrapper(lazyQuery) {
		setIsLoading(true);
		await login(lazyQuery);
		setIsLoading(false);
	}
	// return
	return { isLoading, error, loginWrapper };
}
