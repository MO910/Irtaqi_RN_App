// requests
import getUserDataReq from "../requests/getUserDataReq";
import getTokenReq from "../requests/getTokenReq";

const API_URL = "https://irtaqi-api.vercel.app";

export default async function (userLoginInfo, updateUserData) {
	// get the token
	const token = await getTokenReq(API_URL, userLoginInfo);
	// get user id
	var {
		user: { _id: id },
	} = await getUserDataReq(API_URL, token);
	// update on the app storage
	await updateUserData({ id });
	return id;
}
