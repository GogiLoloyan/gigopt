import React from 'react'
import { menuData } from '../../icons/menu'

const Menu = () => {
	return (
		<nav className='site-menu'>
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
		</nav>
	)
}

export default Menu
