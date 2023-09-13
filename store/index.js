import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user";
import { langSlice } from "./lang";

export const Store = configureStore({
	reducer: { user: userSlice.reducer, lang: langSlice.reducer },
});
