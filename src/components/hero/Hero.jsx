import { homeSlider } from '../../constants/home-slider';
import Button from '../button/Button';
import {
	StyledHero,
	StyledHeroImage,
	StyledHeroPrice,
	StyledHeroText,
	StyledHeroTitle,
	StyledPrice
} from './styles';

const Hero = ({ bannerActive }) => {
	const { section, position } = bannerActive;
	return (
		<StyledHero>
			<StyledHeroImage src={homeSlider[section][position].image} alt='' />
			<StyledHeroText>
				<h2>Welcome</h2>
				<StyledHeroTitle>
					Maxican Burger With Bacon, Tasty Ham and Onion{' '}
				</StyledHeroTitle>
				<p>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum.
				</p>
				<StyledHeroPrice>
					<StyledPrice>$130</StyledPrice>
					<Button path={'/contact'}>Order now</Button>
				</StyledHeroPrice>
			</StyledHeroText>
		</StyledHero>
	);
};

export default Hero;
