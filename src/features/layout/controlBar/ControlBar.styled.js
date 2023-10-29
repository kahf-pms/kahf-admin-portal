import styled from "styled-components";

export const StyledControlBar = styled.section`
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

export const StyledControlSearch = styled.div`
	display: flex;
	align-items: center;

	& svg {
		position: absolute;
		left: 5px;
		width: 25px;
		height: 25px;
		z-index: 2;
	}

	& input {
		width: 400px;
		font-size: 1rem;
		padding: 0.5rem 2rem;
		border-radius: 5px;
		outline: none;
		border: none;
		background: whitesmoke;
		color: black;

		&::placeholder {
			color: #121212;
		}
	}
`;
