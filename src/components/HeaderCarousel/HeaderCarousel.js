import React from 'react';

import Carousel from './Carousel';
import { Section, CarouselItem } from './styles';

import { imgs } from '../../imgs/header_imgs';


const HeaderCarousel = () => (
	<Section>
		<Carousel
			delay={3}
			duration={1}
			autoPlay={true}
			navigation={true}
			playControl={true}
			className="fade"
		>
			{ref =>
				imgs.map((img, i) => (
					<CarouselItem key={i}>
						<img src={img} ref={ref} alt="img" />
					</CarouselItem>
				))
			}
		</Carousel>
	</Section>
);

export default HeaderCarousel;
