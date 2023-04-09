import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 } from 'uuid';
import FoodCard from '../../components/food-card/FoodCard';
import { StyledFlexContainer } from '../../components/food-card/styles';
import { homeSlider } from '../../constants/home-slider';
import { StyledSlideContainer } from './styles';

const Slide = ({ setBannerActive }) => {
	return (
		<StyledSlideContainer>
			<Swiper
				spaceBetween={50}
				modules={[Pagination]}
				autoplay={{ delay: 5000 }}
				speed={1000}
				grabCursor={true}
				pagination={{
					clickable: true
				}}
			>
				{Object.keys(homeSlider).map(section => (
					<SwiperSlide key={v4()}>
						<StyledFlexContainer>
							{homeSlider[section].map((slide, index) => (
								<FoodCard
									key={slide.id}
									selectImage={() =>
										setBannerActive({ section, position: index })
									}
									foodImage={slide.image}
								/>
							))}
						</StyledFlexContainer>
					</SwiperSlide>
				))}
			</Swiper>
		</StyledSlideContainer>
	);
};

export default Slide;
