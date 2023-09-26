export default async function (error, setError) {
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
