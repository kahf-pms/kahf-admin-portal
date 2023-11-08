import styled from "styled-components";

export const StyledButton = styled.button`
	font-size: 14px;
	padding: 0.75rem 1.5rem;
	border-radius: 8px;
	outline: none;
	border: none;
	background: ${(props) =>
		props.type === "warn" ? "#ff4757" : "var(--primary)"};
	color: white;
	letter-spacing: 0.2px;
	transition: all 0.25s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
		box-shadow: ${(props) =>
			props.disabled ? "none" : "0 0 5px 3px rgba(0, 0, 0, 0.25)"};
	}

	&:disabled {
		background: var(--gray) !important;
	}

	& .loading {
		width: 1rem;
		height: 1rem;
	}
`;
