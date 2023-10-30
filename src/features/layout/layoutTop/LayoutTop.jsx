import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCanGoBack, getPageName } from "../../app/globalSlice";
import { StyledLayoutTop } from "./LayoutTop.styled";
import { MdArrowBack } from "react-icons/md";

const LayoutTop = () => {
	const navigate = useNavigate();
	const pageName = useSelector(getPageName);
	const canGoBack = useSelector(getCanGoBack);

	return (
		<StyledLayoutTop>
			{canGoBack && <MdArrowBack onClick={() => navigate(-1)} />}
			<h3>{pageName || "Admin Portal"}</h3>
		</StyledLayoutTop>
	);
};

export default LayoutTop;
