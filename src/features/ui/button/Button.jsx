import { StyledButton } from "./Button.styled";

const Button = ({ buttonProps, children, onClick, type }) => {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<StyledButton type={type} onClick={handleClick} {...buttonProps}>
			{children}
		</StyledButton>
	);
};

export default Button;
