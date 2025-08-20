import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"
import Scene from "./Scene"


gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)



const App = () => {
  // const split = new SplitText(".headline", { type: "words,chars" });
  useGSAP(() => {
    const splitText = new SplitText("#heading", { type: "chars" })
    const introTl = gsap.timeline()
    introTl.from(".home h1", {
      scale: 5,
      opacity: 0,
      stagger: .6,
      ease: "power4.in"
    })
      .from(".home h2", {
        y: 20,
        opacity: 0
      }, "+=.4")
      .from(".home p", {
        y: 20,
        opacity: 0
      }, "-=.3")
      .from(".home button", {
        y: 20,
        opacity: 0
      }, "-=.3")

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    })

    scrollTl.fromTo("body", {
      backgroundColor: "#FDE047"
    }, {
      backgroundColor: "#D9F99D"
    }, 1.5)
      .set(splitText.chars, { fontFamily: "fantasy" })
      .from(splitText.chars, {
        y: 20,
        opacity: 0,
        stagger: .1,
        ease: "back.out(5)",
        rotate: -29,
        scale: 1.3,
        duration: .5
      })
      .from(".page2 p", {
        y: 20,
        opacity: 0
      })

  })


  return (
    <main>
      <View style={{
        width: "100vw",
        height:"100vh",
        position: "fixed",
        top: 0,
        pointerEvents: "none",
        zIndex: 30,
        overflowX: "hidden",
      }}>
        <Scene />
      </View>
      <nav className="navbar">
        <h1>Fizzi</h1>
      </nav>
      <div className="home">
        <h1>Live</h1>
        <h1> gutsy</h1>
        <h2>Soda Perfected</h2>
        <p>3-5g sugar, 9g fiber, 5 delicious flavors</p>
        <button>shop now</button>
      </div>
      <section className="page2">
        <h1 id="heading">try all <br /> five flavors</h1>
        <p>Our soda is made with real fruit  juice and a touch a cane suger. We never use artificial sweetners or high fructose corn syrup. Try all five flavors and find your favorite!</p>
      </section>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 30,
          overflow: "hidden"
        }}
        camera={{
          fov: 30,
          near: 0.1,
          far: 100,
          position: [0, 0, 5]
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <View.Port />
      </Canvas>
    </main>
  )
}

export default App
