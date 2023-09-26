import * as SecureStore from "expo-secure-store";

export default {
	setUserDataState(state, action) {
		state.userData = { ...state.userData, ...action.payload };
	},
	deleteUserDataState(state, action) {
		state.userData = null;
	},
	// connectToSecureStore() {
	// 	const connectToUserStore = new useConnectToStore({
	// 		reduxActions: userActions,
	// 		secureStorageKey: userDataKey,
	// 		updateActionName: "setUserDataState",
	// 		deleteActionName: "deleteUserDataState",
	// 		isJSON: true,
	// 	});
	// },
};
