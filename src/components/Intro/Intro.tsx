import type { JSX } from 'react'
import TextReveal from '../ScrollStory/TextReveal'

export default function Intro(): JSX.Element {
    const stats: [string, string][] = [
        ['6', 'Iconic Military Hotels'],
        ['90+', 'Years of History'],
        ['24K+', 'Google Reviews'],
        ['₹80', 'Average Plate Cost'],
    ]

    return (
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
                                }}>L</span>
                                ong before Bengaluru became Silicon Valley, it was a garrison town. When the British East India Company established the cantonment in 1799, an entire economy of mess kitchens, supply chains, and cooks grew up around it. The soldiers' canteen — rough, meaty, abundant — became the template for what Bengalurians would one day call a <em>Military Hotel</em>.
                            </p>
                        </TextReveal>

                        <TextReveal direction="up" delay={0.1}>
                            <p className="body-text" style={{ marginTop: 20 }}>
                                Today, military hotels are civilian restaurants — but the lineage runs deep. The banana-leaf biryani, the steel plates, the kaal soup before 9 AM, the complete absence of a printed menu — these are not aesthetic choices. They are the fossilised rituals of an army mess, preserved by cooks whose grandfathers fed soldiers in the barracks.
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
                                "The word 'military' tells you everything: it means the meat is fresh, the fire is high, and there are no pretensions."
                            </span>
                            <div style={{
                                marginTop: 16,
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 11, letterSpacing: 3,
                                color: 'var(--gold)', opacity: 0.7,
                            }}>
                                — Food critic Vikram Doctor, 2023
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
