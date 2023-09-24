import axios from "axios";

export default async function (API_URL, userLoginInfo) {
	const options = {
		method: "POST",
		url: `${API_URL}/auth/login`,
		data: userLoginInfo,
	};
	const response = await axios.request(options);
	return response.data.token;
}
