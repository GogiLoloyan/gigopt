import React from 'react';

import { Container } from './styles';


/**
 * Layout component
 * @param {React.Node} children - children component
 * @returns {React.Node} - layout component
 */
const Layout = ({ children }) => <Container>{children}</Container>;

export default Layout;
