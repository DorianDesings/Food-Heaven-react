import { v4 } from 'uuid';

const firstSection = [
	{
		id: v4(),
		image: '/assets/images/pizza.png'
	},
	{
		id: v4(),
		image: '/assets/images/salad.png'
	},
	{
		id: v4(),
		image: '/assets/images/sushi.png'
	},
	{
		id: v4(),
		image: '/assets/images/meat.png'
	}
];

const secondSection = [
	{
		id: v4(),
		image: '/assets/images/grilled.png'
	},
	{
		id: v4(),
		image: '/assets/images/indian_food.png'
	},
	{
		id: v4(),
		image: '/assets/images/pizza3.png'
	},
	{
		id: v4(),
		image: '/assets/images/sushi4.png'
	}
];

const thirdSection = [
	{
		id: v4(),
		image: '/assets/images/beef.png'
	},
	{
		id: v4(),
		image: '/assets/images/bento_bulgogi.png'
	},
	{
		id: v4(),
		image: '/assets/images/fried_chicken.png'
	},
	{
		id: v4(),
		image: '/assets/images/leaf.png'
	}
];

export const homeSlider = {
	FIRST_SECTION: firstSection,
	SECOND_SECTION: secondSection,
	THIRD_SECTION: thirdSection
};
