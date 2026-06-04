import { useEffect, useState } from 'react'
import type { JSX } from 'react'

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import HotelsGrid from './components/Hotels/HotelsGrid'
import VideoReport from './components/VideoSection/VideoSection'
import AudioSection from './components/AudioPlayer/AudioPlayer'
import ImageGallery from './components/ImageGallery/ImageGallery'
import MapSection from './components/Map/MapSection'
import Timeline from './components/Timeline/Timeline'
import Footer from './components/Footer/Footer'

export default function App(): JSX.Element {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      setScrollProgress((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Nav scrollProgress={scrollProgress} onNav={scrollTo} />

      <main>
        <Hero />
        <Intro />
        <HotelsGrid />
        <VideoReport />
        <AudioSection />
        <ImageGallery />
        <MapSection />
        <Timeline />
      </main>

      <Footer />
    </>
  )
}