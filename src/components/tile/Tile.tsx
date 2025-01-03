import React from 'react'
import 'styles/components/_tile.scss'

interface TileProps {
	title: string
	icon?: string
	content: React.ReactNode
	scene: React.ReactNode
	isActive: boolean
	isHidden: boolean
	onClick: () => void
}

const Tile: React.FC<TileProps> = ({
	title,
	icon,
	content,
	scene,
	isActive,
	isHidden,
	onClick
}) => {
	return (
		<div
			className={`tile ${isActive ? 'open' : ''}${isHidden ? 'hidden' : ''}`}
			onClick={onClick}
		>
			{isActive && (
				<div className='tile__content'>
					<div className='tile__content_left'>
						<div className='tile__header'>
							{icon && (
								<img src={icon} alt='Icon' className='tile-header-icon' />
							)}
							<h3 className='tile__header_title'>{title}</h3>
						</div>
						{content}
						<button
							onClick={e => {
								e.stopPropagation()
								onClick()
							}}
							className='close-btn'
						>
							Close
						</button>
					</div>

					<div className='tile__content_right'>{scene}</div>
				</div>
			)}
		</div>
	)
}

export default Tile
