import styled from "styled-components";

export const StyledNavBar = styled.header`
	background: var(--primary-dark-bg);
	color: white;
	padding: 1rem 2.5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	& nav {
		display: flex;
		align-items: center;
		gap: 1rem;

		& a {
			color: white;
			text-decoration: none;
			padding: 0.25rem 0.5rem;
			border-radius: 4px;
			transition: all 0.25s ease-in-out;

			&.active {
				background: var(--primary);
			}
		}
	}
`;
