import LanguageSwitcher from 'components/header/LanguageSwitcher'
import ThemeSwitcher from 'components/header/ThemeSwitcher'
import React from 'react'
import DigitalClock from './DigitalClock'
import Logo from './Logo'

const Header: React.FC = () => {
	return (
		<div className='header'>
			<Logo />
			<DigitalClock />
			<div className='header__settings'>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</div>
	)
}

export default Header
