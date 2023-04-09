import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledFlexContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const StyledFoodCard = styled.div`
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 300px;
	height: 300px;
	background-color: ${COLORS.primary};
`;

const StyledFoodCardImage = styled.img`
	position: absolute;
	top: -50px;
	left: 0;
`;

const StyledFoodCardPrice = styled.span``;

const StyledFoodCardRating = styled.span``;

const StyledFoodCardTitle = styled.h2``;

const StyledFoodCardText = styled.p``;

export {
	StyledFlexContainer,
	StyledFoodCard,
	StyledFoodCardImage,
	StyledFoodCardPrice,
	StyledFoodCardRating,
	StyledFoodCardTitle,
	StyledFoodCardText
};
