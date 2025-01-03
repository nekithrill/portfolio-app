// // src/components/ThreeScene.tsx
// import { Canvas, useFrame } from '@react-three/fiber'
// import { useRef } from 'react'
// import * as THREE from 'three'

// const BusinessCard = () => {
// 	const ref = useRef<THREE.Mesh>(null)

// 	useFrame(() => {
// 		if (ref.current) {
// 			ref.current.rotation.y += 0.01
// 		}
// 	})

// 	return (
// 		<mesh ref={ref}>
// 			<boxGeometry args={[3, 2, 0.1]} /> <meshStandardMaterial color='blue' />
// 		</mesh>
// 	)
// }

// const ThreeScene = () => {
// 	return (
// 		<Canvas style={{ height: 200 }}>
// 			<ambientLight />
// 			<pointLight position={[10, 10, 10]} />
// 			<BusinessCard />
// 		</Canvas>
// 	)
// }

// export default ThreeScene
