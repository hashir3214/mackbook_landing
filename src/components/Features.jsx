import { Canvas } from '@react-three/fiber'
import React from 'react'
import StudioLights from './three/StudioLights'
import { features } from '../constants'

const Features = () => {
  return (
    <section id="features">
     <h2>See it all in a new Light</h2>

     <Canvas id="f-canvas" camera={{}}>
      <StudioLights />
      <ambientLight intensity={0.5} />
     </Canvas>
     <div className="absolute inset-0">
      {features.map((features) => (
        <div className={clsx('box', `box${index + 1}`)}></div>
      ))}
     </div>
    </section>
  )
}

export default Features