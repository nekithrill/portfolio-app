import React from 'react'
import '../styles/components/_tile.scss'
import TileContent from './TileContent'

interface TileProps {
	title: string
	content: string
	scene?: boolean
	index: number
	isOpen: boolean
	onClick: () => void
}

const Tile: React.FC<TileProps> = ({
	title,
	content,
	scene,
	index,
	isOpen,
	onClick
}) => {
	return (
		<div className={`tile ${isOpen ? 'open' : ''}`} onClick={onClick}>
			<h3>{title}</h3>
			{isOpen && <TileContent content={content} scene={scene} />}
			{isOpen && (
				<button
					className='close-btn'
					onClick={e => {
						e.stopPropagation()
						onClick()
					}}
				>
					Закрыть
				</button>
			)}
		</div>
	)
}

export default Tile
