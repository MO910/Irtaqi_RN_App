import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers";
// messages
import en from "./messages/en";
import ar from "./messages/ar";

export const langSlice = createSlice({
	name: "lang",
	initialState: {
		locale: "en",
		messages: { en, ar },
		rtl: { ar: true, en: false },
	},
	reducers,
});

export const langActions = langSlice.actions;
