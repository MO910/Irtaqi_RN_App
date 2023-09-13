import { useState, useEffect } from "react";
import getTokenReq from "./requests/getTokenReq";
import getUserDataReq from "./requests/getUserDataReq";

const API_URL = "https://irtaqi-api.vercel.app";

import { useDispatch } from "react-redux";
import { userActions } from "../store/user";

function setUserId(dispatch, id) {
	dispatch(userActions.setUserData({ id }));
}

export default function (userLoginInfo) {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	// login function
	const login = async () => {
		setIsLoading(true);
		try {
			// get the token
			const token = await getTokenReq(API_URL, userLoginInfo);
			// get user data
			const { user } = await getUserDataReq(API_URL, token);
			setUserId(dispatch, user._id);
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
	return { isLoading, error };
}
