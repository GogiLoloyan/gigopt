import React from 'react';
import Proptypes from 'prop-types';

import { Section, Header } from './styles';


/**
 * Testimonials component
 * @param {Object} props - props
 * @returns {React.Node} - testimonials component
 */
const Testimonials = ({ title, testimonials }) => (
	<Section>
		<Header>
			<h1>{title}</h1>
		</Header>
		<div className="carousel">
			<div className="img"></div>
			<div className="desc">
				<p>{testimonials[0].description}</p>
				<h3>{testimonials[0].fullName}</h3>
			</div>
			<div className="nav"></div>
		</div>
	</Section>
);

Testimonials.propTypes = {
	title: Proptypes.string.isRequired,
	testimonials: Proptypes.array.isRequired
};

export default Testimonials;
