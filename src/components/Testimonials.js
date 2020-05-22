import React from 'react'

function Testimonials() {
	return (
		<section className='testimonials' aria-label='Отзывы наших клиентов'>
			<header className='testimonials__header'>
				<h1 className='testimonials__header__text'>отзывы наших клиентов</h1>
			</header>
			<div className='testimonials__content'>
				<div className='testimonials__content__imgs'></div>
				<div className='testimonials__content__desc'>
					<p>
						“Один из законов жизни гласит, что как только закрывается одна
						дверь,открывается другая. Но вся беда в том, что мы смотрим на
						запертую дверь и не обращаем внимания на открывшуюся.”
					</p>
					<h3>- Андре Жид -</h3>
				</div>
				<div className='testimonials__content__nav'></div>
			</div>
		</section>
	)
}

export default Testimonials
