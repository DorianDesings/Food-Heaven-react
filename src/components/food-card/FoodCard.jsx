import {
	StyledFoodCard,
	StyledFoodCardImage,
	StyledFoodCardPrice
} from './styles';

const FoodCard = ({ foodImage, selectImage }) => {
	return (
		<StyledFoodCard onClick={selectImage} style={{ cursor: 'pointer' }}>
			<StyledFoodCardImage src={foodImage} />
			<StyledFoodCardPrice>$80</StyledFoodCardPrice>
		</StyledFoodCard>
	);
};

export default FoodCard;
