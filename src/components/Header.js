import React from 'react'
import logo from '../imgs/logo.png'
import viber from '../icons/viber.png'
import whatsap from '../icons/whatsap.png'
import phone from '../icons/phone.png'

function Header() {
	return (
		<header className='header'>
			<div className='logo-wrapper'>
				<img src={logo} alt='logo' className='logo' />
			</div>

			<div className='info-wrapper'>
				<div className='info'>
					<a href='#' className='info__icon'>
						<img src={viber} alt='viber' />
					</a>
					<a href='#' className='info__icon'>
						<img src={whatsap} alt='whatsap' />
					</a>
					<a href='#' className='info__icon'>
						<img src={phone} alt='phone' />
					</a>
					<div className='info__tel'>
						<p className='name'>наш номер</p>
						<p className='tel'>+7 900 642 53 07</p>
					</div>
				</div>
			</div>

			<div className='search-wrapper'>
				<input type='text' placeholder='поиск' className='search' />
			</div>

			<div className='registration-wrapper'>
				<button className='registration'>РЕГИСТРАЦИЯ</button>
			</div>

			<div className='sign-in-wrapper'>
				<div className='sign-in'>
					<a href='#' className='link' aria-label='ВОЙТИ'>
						ВОЙТИ
					</a>
				</div>
			</div>
			<div className='menu-button' />
		</header>
	)
}

export default Header
