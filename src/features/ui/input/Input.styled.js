import styled from "styled-components";

export const StyledInput = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 8px;

	& label {
		font-size: 14px;
		color: var(--text-gray);
	}

	& input,
	& select {
		width: 100%;
		font-size: 1rem;
		padding: 0.5rem;
		outline: none;
		border: 1px solid var(--text-gray);
		border-radius: 4px;
		transition: all 0.25s ease-in-out;

		&:active,
		&:focus {
			border-color: var(--primary);
		}

		&:disabled {
			cursor: not-allowed;
		}

		&::placeholder {
			color: var(--text-gray);
		}
	}
`;
