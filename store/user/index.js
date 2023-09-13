import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		name: null,
		email: null,
	},
	reducers,
});

export const userActions = userSlice.actions;
