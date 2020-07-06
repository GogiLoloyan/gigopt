import React from 'react';

import Testimonials from './Testimonials';
import data from './data';

export default () => (
	<Testimonials title={data.title} testimonials={data.testimonials} />
);
