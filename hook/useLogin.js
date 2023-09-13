import { useState, useEffect } from "react";
import getTokenReq from "./requests/getTokenReq";
import getUserDataReq from "./requests/getUserDataReq";

const API_URL = "https://irtaqi-api.vercel.app";

export default function (userLoginInfo) {
	const [userId, setUserId] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	// login function
	const login = async () => {
		setIsLoading(true);
		// get the token
		try {
			var token = await getTokenReq(API_URL, userLoginInfo);
		} catch (error) {
			setError(error);
			console.log(error);
		}
		// get user data
		try {
			var userData = await getUserDataReq(API_URL, token);
			setUserId(userData.user._id);
		} catch (error) {
			setError(error);
			console.log(error);
		}
		setIsLoading(false);
	};
	// fire the login event
	useEffect(() => {
		login();
	}, []);
	// return
	return { userId, isLoading, error };
}
