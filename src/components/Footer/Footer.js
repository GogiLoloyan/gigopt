import React from 'react';
import PropTypes from 'prop-types';

import {
	Wrapper,
	Flex,
	FlexCenter,
	Subscribe,
	Menu,
	Contacts,
	Confidential,
	Copyright,
	Title
} from './styles';

/**
 * Footer component
 * @param {Object} props - props
 * @returns {React.Node} - footer component
 */
const Footer = ({ subscribe, contacts, confidential, copyright }) => (
	<Wrapper>
		<Flex>
			<Subscribe>
				<Title>{subscribe.title}</Title>
				<form>
					<input type="text" placeholder={subscribe.placeholder} />
					<button type="submit">{subscribe.send}</button>
				</form>
				<Menu>
					{subscribe.menu.map((text, i) => (
						<Menu.Item key={i}>{text}</Menu.Item>
					))}
				</Menu>
			</Subscribe>
			<FlexCenter>
				<Contacts>
					<Title>{contacts.title}</Title>
					<p>{contacts.info.faq}</p>
					<p>{contacts.info.telephone}</p>
					<p>{contacts.info.workingTime}</p>
				</Contacts>
			</FlexCenter>
			<FlexCenter>
				<Confidential>
					<Title>{confidential.title}</Title>
					<p>{confidential.description}</p>
				</Confidential>
			</FlexCenter>
		</Flex>
		<Copyright>{copyright}</Copyright>
	</Wrapper>
);

Footer.propTypes = {
	subscribe: PropTypes.object.isRequired,
	contacts: PropTypes.object.isRequired,
	confidential: PropTypes.object.isRequired,
	copyright: PropTypes.object.isRequired
};

export default Footer;
