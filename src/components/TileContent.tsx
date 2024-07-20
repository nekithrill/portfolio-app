import React from 'react'
// import ThreeScene from './ThreeScene'

interface TileContentProps {
	content: string
	scene?: boolean
}

const TileContent: React.FC<TileContentProps> = ({ content, scene }) => {
	return (
		<div className='tile-content'>
			{/* {scene && <ThreeScene />} */}
			<p>{content}</p>
		</div>
	)
}

export default TileContent
