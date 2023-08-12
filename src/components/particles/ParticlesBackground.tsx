import React from 'react'
import Particles from "react-particles";
import particleConfig from './particle-config';

const ParticlesBackGround:React.FC = () => {
  return (
    <Particles
        params={particleConfig}
        >
    </Particles>
  )
}

export default ParticlesBackGround