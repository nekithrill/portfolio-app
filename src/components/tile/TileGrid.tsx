import Tile from 'components/tile/Tile'
import React from 'react'

interface TileData {
	title: string
	content: React.ReactNode
	scene: React.ReactNode
}

interface TileGridProps {
	tilesData: TileData[]
	activeTileIndex: number | null
	onTileClick: (index: number) => void
}

const TileGrid: React.FC<TileGridProps> = ({
	tilesData,
	activeTileIndex,
	onTileClick
}) => {
	return (
		<div className='tile-grid'>
			{tilesData.map((tile, index) => (
				<Tile
					key={index}
					title={tile.title}
					content={tile.content}
					scene={tile.scene}
					isActive={activeTileIndex === index}
					onClick={() => onTileClick(index)}
					isHidden={activeTileIndex !== null && activeTileIndex !== index}
				/>
			))}
		</div>
	)
}

export default TileGrid
