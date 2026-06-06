import { useEffect, useState } from 'react'
import type { JSX } from 'react'

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import HotelsGrid from './components/Hotels/HotelsGrid'
import VideoReport from './components/VideoSection/VideoSection'
import sampleVideo from './assets/video/video.mp4'
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
        <section>
         <div className="section-inner" style={{ marginTop: -3,  }}>
              <p className="body-text" style={{ margin: '0 auto' }}>
                The first thing you experience is the weight of having signed yourself up for a
                                                half-hour wait at minimum. You watch flocks of people — office workers, families,
                                                groups of teenagers — buzzing in and out of this dingy place like bees to a
                                                honeycomb. Your wait is made to seem interminable by the aromas of large vessels of
                                                mutton curries simmering in the kitchen.
                
                                                For many Bengaluru residents, military hotels are simply places to find good
                                                non-vegetarian food. But dig a little deeper and they tell a story about the city's
                                                food history, social makeup and culture. The term "military hotel" is mostly unique to
                                                southern India — particularly Karnataka, Tamil Nadu and Andhra Pradesh. Despite the
                                                word "hotel" in the name, it refers to a type of eatery rather than accommodation — a
                                                linguistic remnant of how hotels and restaurants were used interchangeably in
                                                regional English.
                
                                                When we speak about Bengaluru's food culture today, we discuss global cuisines,
                                                cafes, breweries and fine dining — but it's easy to overlook military hotels, an
                                                important remnant of the city's older food traditions. They preserve dishes and
                                                techniques that might otherwise disappear: nalli soup, boti fry and other offal-based
                                                preparations that remain relatively rare elsewhere.
                
                                                Many outsiders associate South Indian cuisine primarily with vegetarian food. Partly
                                                this is due to historical social dynamics and sampling bias: in some communities,
                                                vegetarian meals are emphasized on religious occasions, while meat remains part of
                                                everyday diets. Military hotels helped maintain the availability of hearty, meat-based
                                                meals for workers and soldiers, often preparing items that are time-consuming or
                                                malodorous to cook at home.
                
                                                Military hotels are therefore bastions of culinary continuity. Dishes like nalli soup — a
                                                collagen-rich bone broth that requires long cooking — or offal preparations were
                                                impractical for most households. By offering them at scale, military hotels made these
                                                nutrient-dense foods accessible to many.
              </p>
          </div>
        </section>
        <section>
          <div className="section-inner" style={{ marginTop: -3 }}>
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
          </div>
        </section>
        <VideoReport videoSrc={sampleVideo} title="Video Report: Inside the Kitchen" duration="08:45" caption="Field footage from Shivaji and neighbourhood kitchens." />
        <section>
          <div className="section-inner" style={{ marginTop: 0 }}>
              <p className="body-text" style={{ marginTop: 0, margin: '0 auto' }}>
                Sri Balaji Military Hotel — Located on the outskirts of Sarjapur, Bangalore, is the small yet beloved Sri Balaji Military Hotel. Established in 1977 and founded by Narayanappa, it is now being run by his son. For the past 50 years, this place has maintained its legacy of serving food with immense taste while, at the same time, refusing to make it into a luxury.
The main focus of this eatery is prioritizing customers over profits. Abiding by this principle is why they strictly refuse to cooperate with delivery partners, avoiding commissions to these platforms and staying true to the faith and loyalty of consumers.
Another significant part is that they still use wood fire instead of gas to cook their food. This gives their dishes a taste that is quite unique yet authentic.
According to the owner of the place, the name "military hotel" was determined due to the fact that it’s an all-non-vegetarian menu. The culture of consuming meat in daily diets comes forth from the military barracks and canteens.
              </p>
          </div>
        </section>
        <AudioSection />
        <section>
          <div className="section-inner" style={{ marginTop: 0 }}>
                <p className="body-text" style={{ fontWeight: '700', marginBottom: 12 }}>The Hindu Prefix</p>
                <p className="body-text" style={{ marginTop: 0 }}>
                  Many military hotels in Bengaluru have the prefix "Hindu" in their names, for example
                  Rajanna Hindu Military Hotel. This isn’t solely a declaration of religion but a
                  practical statement about the menu — a reassurance that the establishment does not
                  serve beef or pork. In Hindu communities cows are sacred, while in some other
                  communities pork is avoided; the prefix signalled an intention to be acceptable to a
                  broad range of customers.
                </p>

                <p className="body-text" style={{ marginTop: 12 }}>
                  Food as documentation: the food served in these restaurants is more than a set of
                  ingredients. From plating to spice blends, each dish carries a history. The traditional
                  signature, Donne Biryani — served in dried areca leaves called "donne" — grew from a
                  practical need to serve large groups (soldiers and labourers) and became a cultural
                  signifier. Its subtler spices and characteristic presentation distinguish it from other
                  biryanis in India.
                </p>

                <p className="body-text" style={{ marginTop: 12 }}>
                  Ragi Mudde is another staple: a dense millet ball made from finger millet that was
                  historically valued for its nutrition and resilience in dry conditions. Paired with a
                  robust meat curry, it offered affordable, sustaining meals for workers and soldiers.
                </p>

                <p className="body-text" style={{ marginTop: 12 }}>
                  Offal dishes — bheja fry (brain), kaleji (liver), paya (trotter), and boti (intestines)
                  — were common because they were inexpensive and abundant. Over time they became
                  distinctive flavours of the military-hotel experience and remain prized by many
                  patrons today.
                </p>

                <p className="body-text" style={{ marginTop: 12 }}>
                  These restaurants evolved from pragmatic mess-style kitchens into social institutions.
                  As Bangalore transformed into an information and technology hub, new eateries and
                  lifestyle venues appeared, but military hotels adapted — and in many cases grew in
                  popularity. They continue to serve as sites of memory and continuity for long-time
                  residents while offering new generations a taste of the city's culinary past.
                </p>

                <p className="body-text" style={{ marginTop: 12 }}>
                  For many people, a visit to a military hotel is a portal to memories: childhood meals,
                  neighbourhood rituals, and communal dining on banana leaves. For others it's the
                  discovery of a living culinary tradition — one that continues to shape Bengaluru's
                  food culture.
                </p>
              </div>
        </section>
        <ImageGallery />
        <MapSection />
        <Timeline />
      </main>

      <Footer />
    </>
  )
}