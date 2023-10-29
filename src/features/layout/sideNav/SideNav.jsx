import { NavLink } from "react-router-dom";
import { StyledNav } from "./SideNav.styled";
import { MdDashboard, MdHome, MdLogout } from "react-icons/md";

const SideNav = () => {
	return (
		<StyledNav>
			<section className="top">
				<section style={{ textAlign: "center" }}>
					<h2>Zameen</h2>
				</section>
				<section>
					<NavLink to="/">
						<MdDashboard />
						Dashboard
					</NavLink>
					<NavLink to="/properties">
						<MdHome />
						Properties
					</NavLink>
				</section>
			</section>
			<section className="bottom">
				<NavLink to="/logout">
					<MdLogout />
					Logout
				</NavLink>
			</section>
		</StyledNav>
	);
};

export default SideNav;
