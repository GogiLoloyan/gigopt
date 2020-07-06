import React from 'react';
import PropTypes from 'prop-types';

import { Section, Title, Cards } from './styles';
import Card from './Card';

/**
 * About component
 * @param {Object} props - props
 * @returns {React.Node} - about component
 */
const About = ({ cardsData }) => (
	<Section>
		<Title>О нас</Title>
		<Cards>
			{cardsData.map((data, i) => (
				<Card key={i} {...data} />
			))}
		</Cards>
	</Section>
);

About.propTypes = {
	cardsData: PropTypes.array.isRequired
};

export default About;
