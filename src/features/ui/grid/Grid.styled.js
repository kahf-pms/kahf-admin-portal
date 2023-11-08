import styled from "styled-components";

export const StyledGrid = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0.5rem;

	@media (max-width: 450px) {
		grid-template-columns: 1fr;
	}
`;
