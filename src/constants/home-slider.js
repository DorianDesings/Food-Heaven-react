import { v4 } from 'uuid';

const firstSection = [
	{
		id: v4(),
		image: '/assets/images/pizza.png',
		price: '$20',
		food: 'Pepperoni Pizza',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	},
	{
		id: v4(),
		image: '/assets/images/salad.png',
		price: '$30',
		food: 'Greek Salad',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	},
	{
		id: v4(),
		image: '/assets/images/chinees_noodles.png',
		price: '$25',
		food: 'Chinees Noodles',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	},
	{
		id: v4(),
		image: '/assets/images/mussel_canvas.png',
		price: '$45',
		food: 'Mousse de mejillones',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	}
];

const secondSection = [
	{
		id: v4(),
		image: '/assets/images/grilled.png',
		price: '$35',
		food: 'Verduras a la plancha',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	},
	{
		id: v4(),
		image: '/assets/images/indian_food.png',
		price: '$50',
		food: 'Dorada al limón',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	},
	{
		id: v4(),
		image: '/assets/images/pizza3.png',
		price: '$35',
		food: 'Pizza Vegana',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	},
	{
		id: v4(),
		image: '/assets/images/sushi4.png',
		price: '$75',
		food: 'Sushi Mix',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	}
];

const thirdSection = [
	{
		id: v4(),
		image: '/assets/images/beef.png',
		price: '$80',
		food: 'Filete de Buey',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	},
	{
		id: v4(),
		image: '/assets/images/bento_bulgogi.png',
		price: '$20',
		food: 'Huevos Escalfados',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	},
	{
		id: v4(),
		image: '/assets/images/fried_chicken.png',
		price: '$50',
		food: 'Arroz con Pollo',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	},
	{
		id: v4(),
		image: '/assets/images/leaf.png',
		price: '$60',
		food: 'Merluza Con Espárragos',
		description: 'The point of using Lorem Ipsum is that it has a more',
		rating: 4.5
	}
];

export const homeSlider = {
	FIRST_SECTION: firstSection,
	SECOND_SECTION: secondSection,
	THIRD_SECTION: thirdSection
};
