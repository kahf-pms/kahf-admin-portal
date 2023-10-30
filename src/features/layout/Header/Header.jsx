import { useSelector } from "react-redux";
import { getCanGoBack, getPageName } from "../../app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./Header.styled";

const Header = () => {
	const navigate = useNavigate();
	const pageName = useSelector(getPageName);
	const canGoBack = useSelector(getCanGoBack);

	return (
		<StyledHeader>
			{canGoBack && <MdArrowBack onClick={() => navigate(-1)} />}
			<h3>{pageName || "Admin Portal"}</h3>
		</StyledHeader>
	);
};

export default Header;
