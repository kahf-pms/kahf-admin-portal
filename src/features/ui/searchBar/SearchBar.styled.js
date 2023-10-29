import styled from "styled-components";

export const StyledSearchBar = styled.div`
	display: flex;
	align-items: center;

	svg {
		position: absolute;
		left: 5px;
	}

	input {
		font-size: 1rem;
		padding: 0.25rem 1.5rem;
		min-width: 400px;
		outline: none;
		border: 1px solid gray;
		border-radius: 8px;
		transition: all 0.25s ease-in-out;

		&:focus,
		&:active {
			border-color: var(--blue);
		}
	}
`;
