import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pageName: "",
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setPageName(state, action) {
			state.pageName = action.payload;
		},
	},
});

export const { setPageName } = globalSlice.actions;

export const getPageName = (state) => state.global.pageName;

export default globalSlice.reducer;
