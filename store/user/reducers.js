export default {
	setUserData(state, action) {
		state.userData = { ...state.userData, ...action.payload };
	},
};
