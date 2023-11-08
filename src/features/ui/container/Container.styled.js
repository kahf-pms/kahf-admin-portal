import styled from "styled-components";

export const StyledContainer = styled.section`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (max-width: 1024px) {
		padding: 1rem;
	}

	@media (max-width: 450px) {
		padding: 0.5rem;
	}
`;
