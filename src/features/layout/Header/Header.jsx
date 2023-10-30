import { useSelector } from "react-redux";
import { StyledHeader } from "./Header.styled";
import { getPageName } from "../../app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const pageName = useSelector(getPageName);

	return (
		<StyledHeader>
			<MdArrowBack onClick={() => navigate(-1)} />
			<h3>{pageName}</h3>
		</StyledHeader>
	);
};

export default Header;
