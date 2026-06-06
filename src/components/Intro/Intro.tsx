import type { JSX } from 'react'
import TextReveal from '../ScrollStory/TextReveal'

export default function Intro(): JSX.Element {
    const stats: [string, string][] = [
        ['6', 'Iconic Military Hotels'],
        ['100+', 'Years of History'],
        ['24K+', 'Combined Customer Reviews'],
        ['₹150–250', 'Typical Meal Cost'],
    ]

    return (
                <>
        <section id="intro" style={{ background: 'linear-gradient(180deg, #261709 0%, var(--charcoal) 100%)' }}>
            <div className="section-inner">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 80, alignItems: 'start',
                }}>
                    {/* Left — story opening */}
                    <div>
                        <div className="section-label">Introduction</div>
                        <h2 className="section-title">A City Within a City</h2>
                        <div className="divider" />

                        {/* Drop cap paragraph via TextReveal */}
                        <TextReveal direction="up">
                            <p style={{
                                fontSize: 17, lineHeight: 1.85,
                                color: 'var(--cream-dark)', opacity: 0.9,
                                maxWidth: 640,
                            }}>
                                <span style={{
                                    float: 'left', fontSize: 80,
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 900, lineHeight: 0.75,
                                    color: 'var(--gold)', marginRight: 12, marginTop: 8,
                                }}>I</span>
                                f you've ever found yourself in a BMTC bus, head lazily resting on the window, looking
                                out at the moving city, you might have come across banners titled 'military hotels'. And
                                maybe just for a second your brain goes "huh, I wonder what those are". You probably
                                assume it's some sort of eatery — but why is it called that? Is it different in some way,
                                or is it no more than a quirky, differentiable name?

                                Normally dozens of questions like these pass through our heads day to day, but writing
                                this article gave us the chance to dig into that apparently silly question. We asked
                                around for the best place in town and off we went to Shivaji Military Hotel — a place
                                often described as one of the oldest in the city, established in the early 1900s by
                                Manji Rao. The glamour of history and vintage of the establishment is not apparent at
                                first glance.

                                
                            </p>
                        </TextReveal>
  </div>



                    {/* Right — stats */}
                    <div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 24,
                        }}>
                            {stats.map(([num, label]) => (
                                <div key={label} style={{
                                    borderLeft: '2px solid var(--gold)',
                                    paddingLeft: 20,
                                }}>
                                    <div style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: 56, color: 'var(--gold)', lineHeight: 1,
                                    }}>{num}</div>
                                    <div style={{
                                        fontSize: 13, letterSpacing: 2,
                                        color: 'var(--olive-light)', marginTop: 4,
                                    }}>{label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Pull-quote inset */}
                        <div style={{
                            marginTop: 48,
                            background: 'rgba(200,168,75,0.05)',
                            border: '1px solid rgba(200,168,75,0.2)',
                            padding: '28px 32px',
                            borderLeft: '3px solid var(--gold)',
                        }}>
                            <span style={{
                                fontFamily: "'Playfair Display', serif",
                                fontStyle: 'italic',
                                fontSize: 18, lineHeight: 1.6,
                                color: 'var(--cream)',
                            }}>
                                Military hotels are remembered not only for their food, but for the generations of cooks, workers, and customers who have shaped Bengaluru's culinary culture.
                            </span>
                            {/* <div style={{
                                marginTop: 16,
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 11, letterSpacing: 3,
                                color: 'var(--gold)', opacity: 0.7,
                            }}>
                                — Food critic Vikram Doctor, 2023
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
