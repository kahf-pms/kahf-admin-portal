import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	properties: [],
	property: null,
};

const propertySlice = createSlice({
	name: "property",
	initialState,
	reducers: {
		setProperties(state, action) {
			state.properties = action.payload;
		},
		setProperty(state, action) {
			state.property = action.payload;
		},
	},
});

export const { setProperties, setProperty } = propertySlice.actions;

export const getProperties = (state) => state.property.properties;
export const getProperty = (state) => state.property.property;

export default propertySlice.reducer;
