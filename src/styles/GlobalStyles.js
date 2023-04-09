import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
	:root {
		--swiper-pagination-color: ${COLORS.primary};
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	img {
		display: block;
		max-width: 100%;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul {
		list-style: none;
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
	}

	body {
		font-family: sans-serif;
		margin: 0;
		font-family: 'Inter', sans-serif;
	}

	img {
		max-width: 200px;
	}

	h1,
	h2,
	h3 {
		font-family: 'Judson', serif;
	}

	.cursive {
		font-family: 'Italianno', cursive;
	}
`;

export { GlobalStyles };
