import React from 'react';

import Menu from './components/Menu';
import About from './components/About';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import HeaderCarousel from './components/HeaderCarousel';

import Layout from './Layout';

import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

import './App.scss';


/**
 * App component
 * @returns {React.Node} - App component
 */
const App = () => (
	<ThemeProvider theme={theme}>
		<Layout>
			<Header />
			<HeaderCarousel />
			<Menu />
			<About />
			<Testimonials />
			<Slider />
			<Footer />
		</Layout>
	</ThemeProvider>
);

export default App;
