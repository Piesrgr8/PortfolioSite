// Background.js
import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import waterVertexShader from '../assets/shaders/water/vertex.glsl'
import waterFragmentShader from '../assets/shaders/water/fragment.glsl'

const debugObject = {}

const Water = () => {
    const waterRef = useRef()

    const uniforms: THREE.ShaderMaterialParameters['uniforms'] = {
        uTime: { value: 0 },
        uBigWavesElevation: { value: 0.09 },
        uBigWavesFrequency: { value: new THREE.Vector2(0, 10) },
        uBigWavesSpeed: { value: 0 },
        uSmallWavesElevation: { value: 0.09 },
        uSmallWavesFrequency: { value: 1.061 },
        uSmallWavesSpeed: { value: 0.111 },
        uSmallIterations: { value: 3 },
        uDepthColor: { value: new THREE.Color(debugObject.depthColor) },
        uSurfaceColor: { value: new THREE.Color(debugObject.surfaceColor) },
        uColorOffset: { value: 0.067 },
        uColorMultiplier: { value: 8.392 },
    }

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()
        uniforms.uTime.value = elapsedTime
    })

    return (
        <mesh
            ref={waterRef}
            rotation={[-Math.PI * 0.5, 0, 0]}
            position={[0, 0, 0]}
        >
            <planeGeometry args={[6, 6, 600, 600]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={waterVertexShader}
                fragmentShader={waterFragmentShader}
            />
        </mesh>
    )
}

const Camera = () => {
    const { camera } = useThree()

    // Set camera position
    camera.position.set(0, 10, 10)
    camera.lookAt(0, 0, 0)

    return null // This component doesn't need to render anything
}

const Background = () => {
    return (
        <Canvas>
            <Camera />
            <ambientLight />
            <directionalLight />

            <Water />
        </Canvas>
    )
}

export default Background
