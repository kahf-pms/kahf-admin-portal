import { StyledControlBar } from "./ControlBar.styled";
import ControlSearch from "./ControlSearch";

const ControlBar = () => {
	return (
		<StyledControlBar>
			<div>
				<p className="breadcrumb">Test / Test / Test</p>
				<h3>Content</h3>
			</div>
			<ControlSearch />
		</StyledControlBar>
	);
};

export default ControlBar;
