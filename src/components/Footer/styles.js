import styled from 'styled-components';

const Wrapper = styled.footer`
	padding: 3em 9vw 4em 9vw;
	background-color: #306cbe;
	color: white;
	font-size: 13px;
	text-transform: uppercase;
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const FlexCenter = styled.section`
	flex: 1;
	display: flex;
	justify-content: center;
  min-width: 300px;
  margin-bottom: 3em;
`;

const Subscribe = styled.section`
	flex: 1;
  justify-self: center;
  margin-bottom: 3em;

	form {
		width: 100%;
		display: flex;

		input {
			flex: 1;
			border: none;
			border-bottom: 1px solid white;
			background-color: transparent;
			padding-bottom: 0.5em;
			color: white;

			::placeholder {
				color: inherit;
				text-transform: uppercase;
				font-size: 0.7em;
				letter-spacing: 1px;
			}
		}

		button {
			border: none;
			padding: 0 1em;
			background-color: white;
			color: #306cbe;
			font-size: 0.7em;
			font-weight: 700;
			letter-spacing: 1px;
			text-transform: uppercase;
			cursor: pointer;
		}
	}
`;

const Menu = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	margin-top: 3em;
`;

Menu.Item = styled.li`
	font-weight: 700;
	letter-spacing: 1px;
	cursor: pointer;
`;

const Contacts = styled.div`
	p {
		white-space: pre-wrap;
		margin-bottom: 1em;
	}
`;

const Confidential = styled.div`
	text-align: center;

	p {
		white-space: pre-wrap;
	}
`;

const Copyright = styled.p`
	white-space: pre-wrap;
`;

const Title = styled.h3`
	font-size: 1.4em;
	font-weight: 500;
	white-space: pre-wrap;
	margin-bottom: 1em;
`;

export {
	Wrapper,
  Flex,
  FlexCenter,
	Subscribe,
	Menu,
	Contacts,
	Confidential,
	Copyright,
	Title
};
