import styled from "styled-components";

export const StyledCard = styled.div`
	background-color: white;
	padding: 1.5rem;
	border-radius: 8px;
	border: 1px solid var(--primary-gray);
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (max-width: 450px) {
		padding: 1rem;
		gap: 1rem;
		gap: 2rem;
	}
`;
