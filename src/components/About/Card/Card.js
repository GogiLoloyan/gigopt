import React from 'react';
import PropTypes from 'prop-types';

import { use3dEffect } from '../../../hooks/3dEffect.hook';

import { Wrapper, Card, Image, Title, Description } from './styles';


/**
 * Card component
 * @param {Object} props - props
 * @returns {React.Node} - card component
 */
const AboutCard = ({ img, title, description }) => {
	const { ref: cardRef, handleMouseMove, handleMouseOut } = use3dEffect();

	return (
		<Wrapper>
			<Card
				ref={cardRef}
				onMouseMove={handleMouseMove}
				onMouseOut={handleMouseOut}
			>
				<Image src={img} />
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Card>
		</Wrapper>
	);
};

AboutCard.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default AboutCard;
