import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'styles/components/_languageSwitcher.scss'

const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation()
	const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
		const storedLanguage = localStorage.getItem('language')
		return storedLanguage || 'en'
	})

	useEffect(() => {
		i18n.changeLanguage(selectedLanguage)
		localStorage.setItem('language', selectedLanguage)
	}, [selectedLanguage, i18n])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedLanguage(event.target.value)
	}

	return (
		<div className='language-switcher'>
			<label>
				<input
					type='radio'
					value='en'
					checked={selectedLanguage === 'en'}
					onChange={handleChange}
				/>
				<span>EN</span>
			</label>
			<label>
				<input
					type='radio'
					value='ru'
					checked={selectedLanguage === 'ru'}
					onChange={handleChange}
				/>
				<span>RU</span>
			</label>
			<label>
				<input
					type='radio'
					value='uk'
					checked={selectedLanguage === 'uk'}
					onChange={handleChange}
				/>
				<span>UA</span>
			</label>
		</div>
	)
}

export default LanguageSwitcher
