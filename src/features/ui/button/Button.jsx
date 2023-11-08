import { StyledButton } from "./Button.styled";

const Button = ({ buttonProps, loading, children, onClick, type }) => {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<StyledButton
			type={type}
			onClick={handleClick}
			{...buttonProps}
			disabled={loading}
		>
			{loading ? "Loading..." : children}
		</StyledButton>
	);
};

export default Button;
