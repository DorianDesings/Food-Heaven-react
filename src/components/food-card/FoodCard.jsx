const FoodCard = ({ foodImage, selectImage }) => {
	return (
		<div onClick={selectImage} style={{ cursor: 'pointer' }}>
			<img src={foodImage} />
		</div>
	);
};

export default FoodCard;
