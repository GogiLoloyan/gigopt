import React from 'react'

import Header from './components/Header'
import MainHeader from './components/MainHeader'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Slider from './components/Slider'
import Footer from './components/Footer'
import './App.css'

function App() {
	return (
		<div className='main'>
			<Header />
			<MainHeader />
			<About />
			<Testimonials />
			<Slider />
			<Footer />
		</div>
	)
}

export default App
