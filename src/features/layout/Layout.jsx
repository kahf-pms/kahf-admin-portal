import { Outlet } from "react-router-dom";
import { StyledBody } from "./Layout.styled";
import Container from "../ui/container/Container";
import LayoutTop from "./layoutTop/LayoutTop";
import NavBar from "./navBar/NavBar";

const Layout = () => {
	return (
		<StyledBody>
			<NavBar />
			<LayoutTop />
			<Container>
				<Outlet />
			</Container>
		</StyledBody>
	);
};

export default Layout;
