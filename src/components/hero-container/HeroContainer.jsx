import { useState } from 'react';
import Hero from '../hero/Hero';
import Slide from '../slide/Slide';

const HeroContainer = () => {
	const [bannerActive, setBannerActive] = useState({
		section: 'FIRST_SECTION',
		position: 0
	});
	return (
		<>
			<Hero bannerActive={bannerActive} />
			<Slide setBannerActive={setBannerActive} />
		</>
	);
};

export default HeroContainer;
