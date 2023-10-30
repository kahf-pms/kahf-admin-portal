import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	padding: 1rem 2rem;
	background-color: white;
	border-bottom: 1px solid var(--primary-gray);

	svg {
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
`;
