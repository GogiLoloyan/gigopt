import styled from 'styled-components';

const Grid = styled.header`
	display: grid;
	grid-column-gap: 2.5vw;
	grid-template-rows: 80px;
	grid-template-columns: max-content 1fr repeat(3, max-content);
	grid-template-areas: 'logo info search signUp signIn';
	padding: 0 6vw;
	font-size: 12px;

	${({ theme }) => theme.device.tablet} {
		grid-template-columns: max-content 1fr repeat(2, max-content);
		grid-template-areas: 'logo info signUp signIn';
	}

	${({ theme }) => theme.device.mobile} {
		grid-template-columns: max-content 1fr;
		grid-template-areas: 'logo  menu';
		grid-template-rows: 50px;
	}
`;

const Logo = styled.div`
	grid-area: logo;
	display: flex;
	align-items: center;

	img {
		height: 65px;

		${({ theme }) => theme.device.mobile} {
			height: 35px;
		}
	}
`;

const Common = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-end;
	padding-bottom: 20px;
`;

const ContactsWrapper = styled(Common)`
	grid-area: info;
	justify-content: flex-end;

	${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;

const Contacts = styled.div`
	height: 28px;
	display: flex;
	align-items: center;
`;

const Link = styled.a`
	height: 100%;
	margin-right: 10px;
	transition: transform 0.2s ease-in;

	:last-of-type {
		height: 90%;
		align-self: flex-end;
	}

	:hover {
		transform: scale(1.1);
		transition: transform 0.2s ease-out;
	}

	img {
		height: 100%;
	}
`;

const Telephon = styled.div``;

Telephon.Label = styled.p`
	text-transform: uppercase;
	font-size: 1em;
	color: #0d2a50;
`;

Telephon.Number = styled.p`
	text-transform: uppercase;
	line-height: 110%;
	font-weight: bold;
	font-size: 1.25em;
	color: #159cd2;
`;

const Search = styled(Common)`
	grid-area: search;

	input {
		width: calc(80px + 4vw);
		height: 33px;
		padding: 0 1em;
		font-size: 0.9em;
		border-radius: 16px;
		border: 1px solid #084689;
		text-transform: uppercase;

		:focus {
			box-shadow: 0px 0px 10px 1px #0846892b;
		}
	}

	${({ theme }) => theme.device.tablet} {
		display: none;
	}
`;

const SignUp = styled(Common)`
	grid-area: signUp;

	button {
		height: 33px;
		width: calc(80px + 4vw);
		border: none;
		border-radius: 16px;
		color: white;
		font-size: 0.9em;
		font-weight: bold;
		text-align: center;
		text-transform: uppercase;
		background-image: linear-gradient(to right, #00adf1, #084184);
		transition: transform 0.2s ease-in;
		cursor: pointer;

		:focus,
		:hover {
			transform: scale(1.05);
			transition: transform 0.2s ease-out;
		}
	}

	${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;

const SignIn = styled(Common)`
	grid-area: signIn;

	button {
		border: none;
		height: 33px;
		font-size: 0.9em;
		font-weight: bold;
		color: rgba(0, 0, 0, 0.64);
		background: transparent;
		transition: all 0.3s ease-out;
		cursor: pointer;

		&:hover {
			color: black;
		}
	}

	${({ theme }) => theme.device.mobile} {
		display: none;
	}
`;

const MenuHumburger = styled.div`
	grid-area: menu;
	display: none;
	width: 25px;
	height: 20px;
	align-self: center;
	justify-self: end;
	background-image: repeating-linear-gradient(
		to bottom,
		#042448 0%,
		#042448 calc(100% / 5),
		transparent calc(100% / 5),
		transparent calc(100% / 2.5)
	);
	cursor: pointer;

	${({ theme }) => theme.device.mobile} {
		display: block;
	}
`;

export {
	Grid,
	Logo,
	ContactsWrapper,
	Contacts,
	Link,
	Telephon,
	Search,
	SignUp,
	SignIn,
	MenuHumburger
};
