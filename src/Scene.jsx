import React, { useRef } from 'react'
import FloatingCan from './FloatingCan'
import { Environment, OrbitControls } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(useGSAP)
const Scene = () => {
    const groupRef = useRef(null)
    const can1ref = useRef(null)
    const can2ref = useRef(null)
    const can3ref = useRef(null)
    const can4ref = useRef(null)
    const can5ref = useRef(null)
    
    const can1groupRef = useRef(null)
    const can2groupRef = useRef(null)
    const can3groupRef = useRef(null)
    const can4groupRef = useRef(null)
    const can5groupRef = useRef(null)
    function animation() {
        const introTl = gsap.timeline()
        introTl.from(groupRef.current.position, {
            y: 4,
            duration: 1,
            ease: "power4.in",
            delay:1
        })
        .from(groupRef.current.rotation, {
            z: .6,
            // delay: .7,
            ease: "power2.inOut"
        },"-=.3")

        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        })

        scrollTl.to(groupRef.current.rotation, {
            y: 3
        }, "anim")
        scrollTl.to(groupRef.current.position, {
            y: -.1
        }, "anim")
        scrollTl
            .to(can1groupRef.current.position, {
                x: -.7,
                z: .1
            }, "anim")
        scrollTl
            .to(can1groupRef.current.rotation, {
                y: Math.PI,
                z: .1
            }, "anim")
        scrollTl
            .to(can2groupRef.current.position, {
                x: 2.6,
                z: -.6
            }, "anim")
        scrollTl
            .to(can2groupRef.current.rotation, {
                y: Math.PI,
                z: -.1
            }, "anim")

        scrollTl
            .to(can3groupRef.current.position, {
                x: 1.7,
                y: -1.5,
                z: 2.1
            }, "anim")
        scrollTl
            .to(can3groupRef.current.rotation, {
                y: Math.PI,
                z: -.3
            }, "anim")
        scrollTl
            .to(can3groupRef.current.position, {
                x: 1.7,
                y: -1.5,
                z: 2.1
            }, "anim")
        scrollTl
            .to(can3groupRef.current.rotation, {
                y: Math.PI,
                z: -.3
            }, "anim")
        scrollTl
            .to(can4groupRef.current.position, {
                x: -.4,
                y: -4.2,
                z: -.6
            }, "anim")
        scrollTl
            .to(can4groupRef.current.rotation, {
                y: Math.PI,
            }, "anim")
        scrollTl
            .to(can5groupRef.current.position, {
                y: 5.4,
                z: .3
            }, "anim")
        scrollTl.to(can5ref.current.position, {
            x: -2.3
        }, "anim")
        scrollTl.to(can5ref.current.rotation, {
            y: 0
        }, "anim")

        scrollTl.to(groupRef.current.position, {
            x: 1.5
        }, "anim")
    }

    useGSAP(() => {
        if (!groupRef || !can1ref || !can2ref || !can3ref || !can4ref || !can5ref || !can1groupRef || !can2groupRef || !can3groupRef || !can4groupRef || !can5groupRef) return
        animation()

    })
    

    return (
        <group ref={groupRef}>
            <group ref={can1groupRef}>
                <FloatingCan ref={can1ref} position={[-2, 0, 0]} />
            </group>
            <group ref={can2groupRef}> 
            <FloatingCan ref={can2ref} position={[2, 0, 0]} flavor='grape' />
            </group>
            <group ref={can3groupRef}>
            <FloatingCan ref={can3ref} position={[1, 2, 2]} flavor='lemonLime' />
            </group>
            <group ref={can4groupRef}>
            <FloatingCan ref={can4ref} position={[-2, 5, -3]} flavor='strawberryLemonade' />
            </group>
            <group ref={can5groupRef}>

            <FloatingCan ref={can5ref} position={[3, -5, 0]} flavor='watermelon' />
            </group>
            <Environment files="/hdrs/lobby.hdr" environmentIntensity={1.5} />
        </group>
    )
}

export default Scene
