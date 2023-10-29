import React from "react";
import { StyledControlSearch } from "./ControlBar.styled";
import { MdSearch } from "react-icons/md";

const ControlSearch = () => {
	return (
		<StyledControlSearch>
			<input type="text" placeholder="Search..." />
			<MdSearch />
		</StyledControlSearch>
	);
};

export default ControlSearch;
