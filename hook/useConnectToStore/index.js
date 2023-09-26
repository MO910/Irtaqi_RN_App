import { useSelector, useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";

export default class ConnectToStore {
	// dispatchReduxState = dispatch(userActions.setUserDataState(data));
	constructor({
		reduxActions,
		secureStorageKey,
		updateActionName,
		deleteActionName,
		isJSON = false,
	}) {
		this.dispatch = useDispatch();
		this.reduxActions = reduxActions;
		this.secureStorageKey = secureStorageKey;
		this.updateActionName = updateActionName;
		this.deleteActionName = deleteActionName;
		this.isJSON = isJSON;
	}
	get() {
		SecureStore.getItemAsync(this.secureStorageKey).then((data) => {
			data = this.isJSON ? JSON.parse(data) : data;
			// update redux state with the stored data
			this.dispatch(this.reduxActions[this.updateActionName](data));
		});
	}
	update(feedData) {
		// update redux state
		this.dispatch(this.reduxActions[this.updateActionName](feedData));
		// update secure store state
		feedData = this.isJSON ? JSON.stringify(feedData) : feedData;
		return SecureStore.setItemAsync(this.secureStorageKey, feedData);
	}
	delete() {
		SecureStore.deleteItemAsync(this.secureStorageKey).then(() =>
			this.dispatch(this.reduxActions[this.deleteActionName]()),
		);
	}
}
