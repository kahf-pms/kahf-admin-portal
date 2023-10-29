import { useSelector } from "react-redux";
import { StyledHeader } from "./Header.styled";
import { getPageName } from "../../app/globalSlice";

const Header = () => {
	const pageName = useSelector(getPageName);

	return (
		<StyledHeader>
			<div>
				<p className="breadcrumb">Test / Test / Test</p>
				<h3>{pageName}</h3>
			</div>
		</StyledHeader>
	);
};

export default Header;
