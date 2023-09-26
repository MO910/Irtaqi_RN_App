import useConnectToStore from "../index";
import { userActions } from "../../../store/user";

export default function () {
	return new useConnectToStore({
		reduxActions: userActions,
		secureStorageKey: "userData",
		updateActionName: "setUserDataState",
		deleteActionName: "deleteUserDataState",
		isJSON: true,
	});
}
