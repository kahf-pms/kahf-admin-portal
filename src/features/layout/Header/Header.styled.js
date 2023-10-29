import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 3rem;
	border-bottom: 1px solid whitesmoke;

	.breadcrumb {
		color: var(--text-gray);
		font-size: 12px;
		font-weight: 500;
	}
`;
