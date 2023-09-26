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
		console.log(this.dispatch, this.reduxActions, this.secureStorageKey);
		SecureStore.getItemAsync(this.secureStorageKey).then((data) => {
			data = this.isJSON ? JSON.parse(data) : data;
			// update redux state with the stored data
			this.dispatch(this.reduxActions[this.updateActionName](data));
		});
	}
	update(feedData) {
		console.log(
			{ feedData },
			this.dispatch,
			this.reduxActions,
			this.secureStorageKey,
		);
		// update redux state
		this.dispatch(this.reduxActions[this.updateActionName](feedData));
		// update secure store state
		console.log({ feedData });
		feedData = this.isJSON ? JSON.stringify(feedData) : feedData;
		return SecureStore.setItemAsync(this.secureStorageKey, feedData);
	}
	delete() {
		SecureStore.deleteItemAsync(this.secureStorageKey).then(() =>
			this.dispatch(this.reduxActions[this.deleteActionName]()),
		);
	}
}
