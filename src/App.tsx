import { useEffect, useState } from 'react'
import type { JSX } from 'react'

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import HotelsGrid from './components/Hotels/HotelsGrid'
import VideoReport from './components/VideoSection/VideoSection'
import sampleVideo from './assets/video/video.mp4'
import AudioSection from './components/AudioPlayer/AudioPlayer'
import ImageGallery from './components/ImageGallery/ImageGallery'
import MapSection from './components/Map/MapSection'
import Timeline from './components/Timeline/Timeline'
import Footer from './components/Footer/Footer'
import article from './data/article'

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
        {/* <Intro /> */}
            
        <HotelsGrid />
        {/* Render article in two parts so the video can live in its own section */}
        {(() => {
          const hinduIdx = article.findIndex(p => p.includes('Hindu') && p.includes('Military hotels'))
          const splitIndex = hinduIdx >= 0 ? hinduIdx : article.length
          const firstPart = article.slice(0, splitIndex)
          const secondPart = article.slice(splitIndex)

          const renderParagraph = (p: string, idx: number) => {
            const bigHeadings = new Set([
              "Restaurants that preserve Bengaluru's non vegetarian food culture",
              'Why are they called \u201cmilitary hotels?\u201d',
              "What's so different about these eateries?",
              '\u2018Hindu\u2019 Military hotels?',
              'Why do Military Hotels still matter?',
            ])
            const isBig = bigHeadings.has(p)
            return isBig ? (
              <p key={idx} className="body-text" style={{ margin: '0 auto', marginTop: 24, fontSize: '1.6rem', fontWeight: 700 }}>
                {p}
              </p>
            ) : (
              <p key={idx} className="body-text" style={{ margin: '0 auto', marginTop: 16 }}>
                {p}
              </p>
            )
          }

          return (
            <>
              <section>
                <div className="section-inner" style={{ marginTop: -3 }}>
                  {firstPart.map((p, i) => renderParagraph(p, i))}
                </div>
              </section>

              {/* Video in its own section to ensure spacing and full styling */}
              <VideoReport videoSrc={sampleVideo} title="Video Report: Inside the Kitchen" duration="08:45" caption="Field footage from Shivaji and neighbourhood kitchens." />

              <section>
                <div className="section-inner" style={{ marginTop: 0 }}>
                  {secondPart.map((p, i) => {
                    const globalIdx = splitIndex + i
                    // Insert Audio above the 'Why do Military Hotels still matter?' heading
                    if (p === 'Why do Military Hotels still matter?') {
                      return (
                          <div key={globalIdx}>
                            <div style={{ marginTop: 48, marginBottom: 24 }}><AudioSection /></div>
                            {renderParagraph(p, globalIdx)}
                          </div>
                        )
                    }
                    return renderParagraph(p, globalIdx)
                  })}
                </div>
              </section>
            </>
          )
        })()}
        <ImageGallery />
        <MapSection />
        <Timeline />
      </main>

      <Footer />
    </>
  )
}