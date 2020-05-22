import React, { useState, useEffect } from 'react'
import { imgs } from '../imgs/header_imgs'
import { menuData } from '../icons/menu'
import { useSlide } from '../hooks/slide.hook'

function MainHeader() {
	const refImgs = []
	const [index, setIndex] = useState(0)
	const { start } = useSlide(refImgs, 5000, setIndex)

	useEffect(() => {
		start()
	}, [])

	return (
		<section className='main-header'>
			<div className='slide'>
				{imgs.map((img, i) => (
					<img
						key={i}
						src={img}
						ref={ref => refImgs.push(ref)}
						alt='img'
						className='slide__img'
					/>
				))}
				<div className='navigation'>
					{imgs.map((_, i) => (
						<div
							key={i}
							className={`navigation__item ${index === i ? 'active' : ''}`}
						></div>
					))}
				</div>
			</div>

			<ul className='menu'>
				{menuData.map(({ icon, text, subMenu }, i) => (
					<li key={i} className='menu__item'>
						<img src={icon} alt='icon' className='icon' />
						<p className='text'>{text}</p>
						{subMenu && subMenu.length ? (
							<ul className='menu__submenu'>
								{subMenu.map(({ text, subMenu }, j) => (
									<li
										key={j}
										data-full={subMenu && subMenu.length ? true : false}
										className='menu__submenu__item'
									>
										{text}
										{subMenu && subMenu.length ? (
											<ul className='menu__submenu__submenu'>
												{subMenu.map(({ text }, l) => (
													<li key={l} className='menu__submenu__submenu__item'>
														{text}
													</li>
												))}
											</ul>
										) : null}
									</li>
								))}
							</ul>
						) : null}
					</li>
				))}
			</ul>
		</section>
	)
}

export default MainHeader
