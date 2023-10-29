import { StyledButton } from "./Button.styled";

const Button = ({ buttonProps, children, onClick }) => {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<StyledButton onClick={handleClick} {...buttonProps}>
			{children}
		</StyledButton>
	);
};

export default Button;
