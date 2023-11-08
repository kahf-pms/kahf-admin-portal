import { Outlet } from "react-router-dom";
import { StyledBody } from "./Layout.styled";
import Container from "../ui/container/Container";
import LayoutTop from "./layoutTop/LayoutTop";

const Layout = () => {
	return (
		<StyledBody>
			<section className="mainContent">
				<LayoutTop />
				<Container>
					<Outlet />
				</Container>
			</section>
		</StyledBody>
	);
};

export default Layout;
