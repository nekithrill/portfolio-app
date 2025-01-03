import React, { useEffect, useState } from 'react'
import 'styles/components/_themeSwitcher.scss'

const ThemeSwitcher: React.FC = () => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
		const storedTheme = localStorage.getItem('theme')
		return storedTheme === 'dark'
	})

	useEffect(() => {
		if (isDarkTheme) {
			document.body.classList.add('dark-theme')
			document.body.classList.remove('light-theme')
		} else {
			document.body.classList.add('light-theme')
			document.body.classList.remove('dark-theme')
		}
		localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')
	}, [isDarkTheme])

	const handleChange = () => {
		setIsDarkTheme(prevTheme => !prevTheme)
	}

	return (
		<div className='theme-switcher'>
			<label>
				<input type='checkbox' checked={isDarkTheme} onChange={handleChange} />
				<span className='slider'></span>
				<span className='theme-label'>{isDarkTheme ? 'Dark' : 'Light'}</span>
			</label>
		</div>
	)
}

export default ThemeSwitcher
