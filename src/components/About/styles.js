import styled from 'styled-components';

const Section = styled.section.attrs(() => ({
	'aria-label': 'О нас'
}))`
	margin: 60px 9vw 40px 9vw;
`;

const Title = styled.h1`
	color: #043c81;
	text-align: center;
	text-transform: uppercase;
	margin: 1em 0;
	letter-spacing: 3px;
`;

const Cards = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
`;

export { Section, Title, Cards };
