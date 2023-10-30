import { Outlet } from "react-router-dom";
import { StyledBody } from "./Layout.styled";
import SideNav from "./sideNav/SideNav";
// import Header from "./header/Header";
import Container from "../ui/container/Container";

const Layout = () => {
	return (
		<StyledBody>
			<SideNav />
			<section className="mainContent">
				{/* <Header /> */}
				<Container>
					<Outlet />
				</Container>
			</section>
		</StyledBody>
	);
};

export default Layout;
