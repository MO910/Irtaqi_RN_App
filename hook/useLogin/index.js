import { useState, useEffect } from "react";
// actions
import axiosErrorHandler from "./requests/axiosErrorHandler";
import getId from "./actions/getId";
import fetchUserInfo from "./actions/fetchUserInfo";

export default function (connectToUserStore, userLoginInfo) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	// login function
	async function login(lazyQuery) {
		// get user id
		try {
			var userId = await getId(userLoginInfo);
		} catch (error) {
			axiosErrorHandler(error, setError);
		}
		// graphQl fetch
		await fetchUserInfo({ userId, lazyQuery, connectToUserStore });
	}
	async function loginWrapper(lazyQuery) {
		setIsLoading(true);
		await login(lazyQuery);
		setIsLoading(false);
	}
	// return
	return { isLoading, error, loginWrapper };
}
