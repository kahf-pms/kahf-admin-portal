import { MdSearch } from "react-icons/md";
import { StyledSearchBar } from "./SearchBar.styled";

const SearchBar = () => {
	return (
		<StyledSearchBar>
			<input type="text" placeholder="Search..." />
			<MdSearch />
		</StyledSearchBar>
	);
};

export default SearchBar;
