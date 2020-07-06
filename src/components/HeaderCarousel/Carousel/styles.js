import styled, { css } from 'styled-components';

const Container = styled.div`
	--duration: ${({ duration }) => `${duration}s`};
	position: relative;
	height: 100%;
	width: 100%;
`;

const Navigation = styled.div`
	position: relative;
	float: right;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 12vw;
`;

const Player = styled.div`
	width: 3vw;
	height: 3vw;
	min-width: 20px;
	min-height: 20px;
	border-radius: 50%;
	position: absolute;
	bottom: 2vw;
	opacity: 0.4;
	background-color: #042448;
	transition: all 0.3s ease-out;
	z-index: 2000;
	cursor: pointer;

	display: flex;
	justify-content: center;

	:hover {
		opacity: 1;
	}
`;

const Svg = styled.svg.attrs(() => ({
	viewBox: '0 0 60 60'
}))`
	fill: white;
	width: 40%;
	margin-left: 14%;
`;

const Dots = styled.div`
	z-index: 2000;
`;

const Dot = styled.div`
	--width: calc(6px + 0.5vw);
	width: var(--width);
	height: var(--width);
	border-radius: 50%;
	background-color: #fff;
	margin: calc(var(--width) + 0.8vw) 0;
	transition: all var(--duration, 1s);

	${({ active }) =>
		active === true
			? css`
					transform: scale(1.5);
					background-color: #042448;
			  `
			: null}
`;

export { Container, Navigation, Player, Svg, Dots, Dot };
