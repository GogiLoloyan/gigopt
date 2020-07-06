import styled from 'styled-components';

const Section = styled.section.attrs(() => ({
	'aria-label': 'Отзывы наших клиентов'
}))`
	height: 500px;
	display: flex;
	align-items: center;
	flex-direction: column;
	color: white;
	text-align: center;
	background-color: rgba(33, 148, 194, 0.7);
`;

const Header = styled.header`
  margin-top: 4em;
  
	h1 {
		text-transform: uppercase;
	}
`;

export { Section, Header };
