import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pageName: "",
	canGoBack: false
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setPageName(state, action) {
			state.pageName = action.payload;
		},
		setCanGoBack(state, action){
			state.canGoBack = action.payload;
		}
	},
});

export const { setPageName, setCanGoBack } = globalSlice.actions;

export const getPageName = (state) => state.global.pageName;
export const getCanGoBack = (state) => state.global.canGoBack;

export default globalSlice.reducer;
