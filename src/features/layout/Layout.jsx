import { Outlet } from "react-router-dom";
import { StyledBody } from "./Layout.styled";
import SideNav from "./sideNav/SideNav";
import ControlBar from "./controlBar/ControlBar";

const Layout = () => {
	return (
		<StyledBody>
			<SideNav />
			<section className="mainContent">
				<ControlBar />
				<Outlet />
			</section>
		</StyledBody>
	);
};

export default Layout;
