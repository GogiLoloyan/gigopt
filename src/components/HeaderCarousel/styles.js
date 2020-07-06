import styled from 'styled-components';

const Section = styled.section`
	position: relative;
	height: 38vw;
	width: 100vw;
`;

const CarouselItem = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;

	img {
		position: relative;
		width: 100%;
	}
`;

export { Section, CarouselItem };
