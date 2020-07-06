const breakpoints = {
	sm: '768px',
	md: '1024px'
};

export const theme = {
	device: {
		mobile: `@media (max-width: ${breakpoints.sm})`,
		tablet: `@media (max-width: ${breakpoints.md})`
	}
};
