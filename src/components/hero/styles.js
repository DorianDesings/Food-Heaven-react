import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledHero = styled.div`
	position: relative;
	display: flex;
	margin-bottom: 2rem;
	height: 468px;
	background-color: ${COLORS.lightPrimary};

	&::after {
		content: '';
		position: absolute;
		left: 12rem;
		width: 392px;
		height: 100%;
		border-radius: 0 0 1rem 1rem;
		background-color: ${COLORS.primary};
	}
`;

const StyledHeroImage = styled.img`
	position: absolute;
	bottom: 0;
	left: 10.5rem;
	width: 450px;
	max-width: 500px;
	z-index: 1;
`;

const StyledHeroText = styled.div`
	margin-left: auto;
	padding-right: 12rem;
	width: 57rem;
`;

const StyledHeroTitle = styled.h2`
	font-size: 3.75rem;
	margin: 0;
`;

const StyledHeroPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 250px;
	font-weight: bold;
	color: ${COLORS.primary};
`;

const StyledPrice = styled.span`
	font-size: 2rem;
	font-family: 'Judson', serif;
`;

export {
	StyledHero,
	StyledHeroImage,
	StyledHeroText,
	StyledHeroTitle,
	StyledHeroPrice,
	StyledPrice
};
