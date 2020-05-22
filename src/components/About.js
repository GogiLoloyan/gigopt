import React from 'react'

import truck from '../icons/about/truck.png'
import shield from '../icons/about/shield.png'
import brain from '../icons/about/brain.png'

function About() {
	return (
		<section className='about' aria-label='О нас'>
			<h1 className='about__header'>О нас</h1>
			<div className='about__content'>
				<section className='about__card'>
					<div className='about__card__img--wrapper'>
						<img className='about__card__img' src={truck} alt='truck' />
					</div>
					<h2 className='about__card__header'>Перевозка и<br /> доставка</h2>
					<p className='about__card__description'>
						Перевозка и доставка. По суше,<br /> по морю и по воздуху,<br /> мы предлагаем
						любой<br /> вид перевозки, в стране<br /> и за рубежом.
					</p>
				</section>

				<section className='about__card'>
					<div className='about__card__img--wrapper'>
						<img className='about__card__img' src={shield} alt='shield' />
					</div>
					<h2 className='about__card__header'>
						качественная работа<br /> гарантировано
					</h2>
					<p className='about__card__description'>
						Главное — это качественная<br /> работа за короткое время.<br /> Оперативная и
						качественная<br /> работа гарантирована!
					</p>
				</section>

				<section className='about__card'>
					<div className='about__card__img--wrapper'>
						<img className='about__card__img' src={brain} alt='brain' />
					</div>
					<h2 className='about__card__header'>профессиональные<br /> работники</h2>
					<p className='about__card__description'>
						Умение максимально использо-<br /> вать потенциал работников.<br />
						Воодушевляет, заинтересо-<br />	 вывает и направляет других<br /> на достижение
						целей.
					</p>
				</section>
			</div>
		</section>
	)
}

export default About
