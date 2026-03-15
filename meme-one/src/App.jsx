import { useEffect } from 'react'
import Lenis from 'lenis'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { FeaturesSection } from './components/FeaturesSection'
import { HowToJoinSection } from './components/HowToJoinSection'
import { RoadmapSection } from './components/RoadmapSection'
import { GetInTouchSection } from './components/GetInTouchSection'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    })

    window.__lenis = lenis

    let frameId = 0

    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  return (
    <div className="overflow-x-clip bg-[#f9f9ef] text-[#111111] max-w-600 mx-auto">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowToJoinSection />
      <RoadmapSection />
      <GetInTouchSection />
    </div>
  )
}

export default App
