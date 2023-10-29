import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./propertySlice";
import globalReducer from "./globalSlice";

export const store = configureStore({
	reducer: {
		global: globalReducer,
		property: propertyReducer,
	},
});
