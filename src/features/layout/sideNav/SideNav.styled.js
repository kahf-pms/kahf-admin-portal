import styled from "styled-components";

export const StyledNav = styled.nav`
	width: 400px;
	height: 100%;
	background-color: var(--primary-dark-bg);
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2rem;

	a {
		text-decoration: none;
		color: var(--text-gray);
		font-size: 1rem;
		letter-spacing: 0.1px;
		transition: all 0.25s ease-in-out;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 8px;

		svg {
			width: 20px;
			height: 20px;
		}

		&:hover {
			color: white;
			background: rgba(255, 255, 255, 0.05);
		}

		&.active {
			color: white;
			background: rgba(255, 255, 255, 0.05);
		}
	}

	& .top {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		& section {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
		}
	}
`;
