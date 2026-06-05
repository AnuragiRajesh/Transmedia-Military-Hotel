import { useEffect, useState } from 'react'
import type { JSX } from 'react'

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import HotelsGrid from './components/Hotels/HotelsGrid'
import VideoReport from './components/VideoSection/VideoSection'
import sampleVideo from './assets/video/video.webm'
import AudioSection from './components/AudioPlayer/AudioPlayer'
import TextReveal from './components/ScrollStory/TextReveal'
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
        <section>
          <div className="section-inner" style={{ marginTop: -3 }}>
            <TextReveal direction="up" delay={0.1}>
              <p className="body-text" style={{ margin: '0 auto' }}>
                Shivaji Military Hotel — one of the oldest military hotels in Bangalore. While it was
                officially established in 1935, its roots date back to 1908. Founded by S. Manaji Rao,
                this iconic place has been a generational treasure for decades. According to food
                historian Suresh Jayaram, when the Maratha army occupied Bengaluru in the 1600s, it
                helped give rise to military hotels that met soldiers' high-protein needs. These
                restaurants became known for their predominantly non-vegetarian dishes and recipes
                passed down through generations, showcasing the ingenuity of their original chefs.
                This simple yet heartwarming place is steeped in history and tradition, and over the
                years it has remained true to its quality while adapting to modern demands.
              </p>
            </TextReveal>
          </div>
        </section>
        <VideoReport videoSrc={sampleVideo} title="Video Report: Inside the Kitchen" duration="08:45" caption="Field footage from Shivaji and neighbourhood kitchens." />
        <section>
          <div className="section-inner" style={{ marginTop: 0 }}>
            <TextReveal direction="up" delay={0.1}>
              <p className="body-text" style={{ marginTop: 0, margin: '0 auto' }}>
                Sri Balaji Military Hotel — located on the outskirts in Sarjapur, Bangalore, Sri
                Balaji is a small but beloved establishment. Founded in 1977 by Narayanappa, it is
                now run by his son. For the past 50 years the place has preserved its legacy of
                serving flavorful food while resisting the push to become a luxury eatery. The
                owners prioritise customers over profit and have chosen not to partner with delivery
                platforms in order to avoid commission fees and remain loyal to their patrons. The
                name "military hotel" reflects its all–non-vegetarian menu, a culture that traces
                back to military barracks and canteens.
              </p>
            </TextReveal>
          </div>
        </section>
        <AudioSection />
        <ImageGallery />
        <MapSection />
        <Timeline />
      </main>

      <Footer />
    </>
  )
}