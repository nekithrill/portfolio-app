import Footer from 'components/footer/Footer'
import Header from 'components/header/Header'
import TileGrid from 'components/tile/TileGrid'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'styles/main.scss'
import './i18n'

const App: React.FC = () => {
	const { t } = useTranslation()
	const [activeTileIndex, setActiveTileIndex] = useState<number | null>(null)

	const tilesData = [
		{
			title: t('tiles.about.title'),
			content: (
				<>
					<p>{t('tiles.about.content.heading')}</p>
					<ul>
						<li>Feature 1</li>
						<li>Feature 2</li>
						<li>Feature 3</li>
					</ul>
				</>
			),
			scene: <div className='scene'>Scene Obj</div>
		},
		{
			title: t('tiles.education.title'),
			content: (
				<>
					<p>{t('tiles.education.content.heading')}</p>
				</>
			),
			scene: <div className='scene'>Scene Obj</div>
		},
		{
			title: t('tiles.contacts.title'),
			content: (
				<>
					<p>{t('tiles.contacts.content.heading')}</p>
					<div>
						<h4>Additional Info</h4>
						<p>Some extra details about this tile.</p>
					</div>
				</>
			),
			scene: <div className='scene'>Scene Obj</div>
		},
		{
			title: t('tiles.skills.title'),
			content: (
				<>
					<p>{t('tiles.skills.content.heading')}</p>
					<div>
						<h4>Additional Info</h4>
						<p>Some extra details about this tile.</p>
					</div>
				</>
			),
			scene: <div className='scene'>Scene Obj</div>
		},
		{
			title: t('tiles.projects.title'),
			content: (
				<>
					<p>{t('tiles.projects.contentLeft.heading')}</p>
					<div>
						<h4>Additional Info</h4>
						<p>Some extra details about this tile.</p>
					</div>
				</>
			),
			scene: <div className='scene'>Scene Obj</div>
		}
	]

	const handleTileClick = (index: number) => {
		setActiveTileIndex(activeTileIndex === index ? null : index)
	}

	return (
		<div className='app'>
			<Header />
			<TileGrid
				tilesData={tilesData}
				activeTileIndex={activeTileIndex}
				onTileClick={handleTileClick}
			/>
			<Footer />
		</div>
	)
}

export default App
