import styled from 'styled-components';

const Wrapper = styled.section`
	margin: calc(10px + 0.8vw);
	width: 310px;
	max-width: 340px;
	cursor: pointer;

	perspective: 1200px;
	transform-style: preserve-3d;
	transition: transform 150ms ease-in-out;

	:hover {
		transform: scale(1.07);
		transition: transform 0.1s ease-in-out;

	}
`;

const Card = styled.div`
	height: 100%;
	padding: 50px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: -1px -1px 10px #00000015;
	transition: all 0.2s ease-out;

	:hover {
		color: white;
		background-color: #151515;
	}
`;

const Image = styled.img`
	height: 80px;

	${Card}:hover & {
		filter: invert(1) brightness(2);
		mix-blend-mode: luminosity;
	}
`;

const Title = styled.h2`
	font-weight: 400;
	font-size: 1.4em;
	line-height: 110%;
	color: #043c81;
	text-transform: uppercase;
	white-space: pre-wrap;
	text-align: center;
	margin: 0.9em 0 0.6em 0;

	${Card}:hover & {
		color: inherit;
	}
`;

const Description = styled.p`
	font-weight: 400;
	font-size: 0.875em;
	text-align: center;
	white-space: pre-wrap;
	text-transform: uppercase;
`;

export { Wrapper, Card, Image, Title, Description };
