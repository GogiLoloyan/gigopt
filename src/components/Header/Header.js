import React from 'react';
import { motion } from 'framer-motion';

import logo from '../../imgs/logo.png';
import viber from '../../icons/viber.png';
import whatsap from '../../icons/whatsap.png';
import phone from '../../icons/phone.png';

import {
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
} from './styles';


/**
 * Header component
 * @returns {React.Node} - header component
 */
const Header = () => (
	<Grid>
		<Logo>
			<motion.img initial={{scale: 1}} animate={{scale: 1.1}} src={logo} alt="logo" />
		</Logo>

		<ContactsWrapper>
			<Contacts>
				<Link href="#">
					<img src={viber} alt="viber" />
				</Link>
				<Link href="#">
					<img src={whatsap} alt="whatsap" />
				</Link>
				<Link href="#">
					<img src={phone} alt="phone" />
				</Link>
				<Telephon>
					<Telephon.Label>наш номер</Telephon.Label>
					<Telephon.Number>+7 900 642 53 07</Telephon.Number>
				</Telephon>
			</Contacts>
		</ContactsWrapper>

		<Search>
			<input type="text" placeholder="поиск" />
		</Search>

		<SignUp>
			<button>РЕГИСТРАЦИЯ</button>
		</SignUp>

		<SignIn>
			<button>ВОЙТИ</button>
		</SignIn>

		<MenuHumburger />
	</Grid>
);

export default Header;
