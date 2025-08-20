import { Float } from '@react-three/drei'
import { Model } from './Model'

const FloatingCan = ({ flavor = "blackCherry", floatingSpeed = 1, floatingRange = [-0.1, 0.1], rotationIntensity = 1, floatIntensity = 1, children,...props}) => {
    return (
        <group>
            <Float floatingRange={floatingRange} floatingSpeed={floatingSpeed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity} {...props}>
                {children}
                <Model flavor={flavor} />
            </Float>
        </group>
    )
}

export default FloatingCan;
