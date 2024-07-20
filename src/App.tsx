import React, { useState } from 'react'
import Tile from './components/Tile'
// Определите тип данных плитки
interface TileData {
	title: string
	content: string
	scene?: boolean
	type: 'intro' | 'education' | 'skills' | 'projects' | 'contact' // или любой другой тип, который вам нужен
}

// Пример данных плиток
const tilesData: TileData[] = [
	{
		title: 'Обо мне',
		content:
			'Привет! Я веб-разработчик с опытом работы в создании интерактивных и функциональных веб-приложений.',
		scene: true,
		type: 'intro'
	},
	{
		title: 'Образование',
		content: 'Я окончил Университет X со степенью в области компьютерных наук.',
		scene: false,
		type: 'education'
	},
	{
		title: 'Навыки',
		content:
			'Мои навыки включают: React, Three.js, Node.js, Express, MongoDB и многое другое.',
		scene: false,
		type: 'skills'
	},
	{
		title: 'Проекты',
		content:
			'Проект 1: Приложение для управления задачами, Проект 2: Платформа для онлайн-курсов.',
		scene: false,
		type: 'projects'
	},
	{
		title: 'Контакты',
		content: 'Электронная почта: myemail@example.com, Телефон: +1234567890',
		scene: false,
		type: 'contact'
	}
]

const App: React.FC = () => {
	const [openTileIndex, setOpenTileIndex] = useState<number | null>(null)

	const handleTileClick = (index: number) => {
		setOpenTileIndex(openTileIndex === index ? null : index)
	}

	return (
		<div className='app'>
			<div className='tiles-grid'>
				{tilesData.map((tile, index) => (
					<Tile
						key={index}
						index={index}
						isOpen={openTileIndex === index}
						onClick={() => handleTileClick(index)}
						{...tile}
					/>
				))}
			</div>
		</div>
	)
}

export default App
