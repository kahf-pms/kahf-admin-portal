import styled from "styled-components";

export const StyledButton = styled.button`
	font-size: 14px;
	padding: 0.5rem 1rem;
	border-radius: 8px;
	outline: none;
	border: none;
	background: var(--blue);
	color: white;
	letter-spacing: 0.2px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.25);
	}
`;
