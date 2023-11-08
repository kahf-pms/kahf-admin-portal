import { Link, NavLink } from "react-router-dom";
import { StyledNavBar } from "./NavBar.styled";

const NavBar = () => {
	return (
		<StyledNavBar>
			<Link to="/">
				<h2>Zameen</h2>
			</Link>

			<nav>
				<NavLink to="/properties">Properties</NavLink>
			</nav>
		</StyledNavBar>
	);
};

export default NavBar;
