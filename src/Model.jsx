import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three";

useGLTF.preload('/Soda-can.gltf')

const flavorTextures = {
    lemonLime: "/labels/lemon-lime.png",
    grape: "/labels/grape.png",
    blackCherry: "/labels/cherry.png",
    strawberryLemonade: "/labels/strawberry.png",
    watermelon: "/labels/watermelon.png",
}

const metalMaterial = new THREE.MeshStandardMaterial({
    roughness: 0.3,
    metalness: 1,
    color: "#bbbbbb"
})

export function Model({ flavor = "blackCherry", scale = 2, rotation = [0, -Math.PI, 0], ...props }) {
    const { nodes } = useGLTF("/Soda-can.gltf");

    const labels = useTexture(flavorTextures)

    labels.strawberryLemonade.flipY = false;
    labels.blackCherry.flipY = false;
    labels.watermelon.flipY = false;
    labels.grape.flipY = false;
    labels.lemonLime.flipY = false;

    const label = labels[flavor]

    return (
        <group {...props} dispose={null} scale={scale} rotation={rotation}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cylinder.geometry}
                material={metalMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cylinder_1.geometry}
            >
                <meshStandardMaterial roughness={0.15} metalness={1} map={label} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tab.geometry}
                material={metalMaterial}
            />
        </group>
    )
}
