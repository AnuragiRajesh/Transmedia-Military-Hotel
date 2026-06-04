import { useState } from 'react'
import type { JSX } from 'react'
import { HOTELS } from '../../data/hotels'

const STARS = (n: number) => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n))

export default function HotelsGrid(): JSX.Element {
    const [active, setActive] = useState<number | null>(null)

    return (
        <section id="places" style={{
            background: 'var(--olive-dark)',
            borderTop: '1px solid rgba(200,168,75,0.1)',
        }}>
            <div className="section-inner">
                <div className="section-label">The Places</div>
                <h2 className="section-title">Six Institutions</h2>
                <div className="divider" />
                <p className="body-text">Select any hotel to read its full story.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 2, marginTop: 40,
                }}>
                    {HOTELS.map((h, i) => (
                        <div
                            key={h.id}
                            onClick={() => setActive(active === i ? null : i)}
                            style={{
                                background: active === i
                                    ? 'rgba(200,168,75,0.08)'
                                    : 'rgba(244,237,224,0.03)',
                                border: active === i
                                    ? '1px solid rgba(200,168,75,0.4)'
                                    : '1px solid rgba(200,168,75,0.1)',
                                padding: '32px 28px',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'background 0.3s, border-color 0.3s',
                            }}
                            onMouseEnter={e => {
                                if (active !== i) (e.currentTarget as HTMLElement).style.background = 'rgba(200,168,75,0.06)'
                            }}
                            onMouseLeave={e => {
                                if (active !== i) (e.currentTarget as HTMLElement).style.background = 'rgba(244,237,224,0.03)'
                            }}
                        >
                            {/* Gold top bar */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0,
                                height: 2, background: 'var(--gold)',
                                transform: active === i ? 'scaleX(1)' : 'scaleX(0)',
                                transformOrigin: 'left',
                                transition: 'transform 0.3s',
                            }} />

                            <div style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 48, color: 'rgba(200,168,75,0.2)',
                                lineHeight: 1, marginBottom: 12,
                            }}>
                                0{h.id}
                            </div>

                            <div style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 20, fontWeight: 700,
                                color: 'var(--cream)', marginBottom: 6, lineHeight: 1.2,
                            }}>
                                {h.name}
                            </div>

                            <div style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 10, letterSpacing: 2,
                                color: 'var(--gold)',
                                border: '1px solid rgba(200,168,75,0.4)',
                                padding: '3px 10px', marginBottom: 12,
                                display: 'inline-block',
                            }}>
                                {h.badge}
                            </div>

                            <div style={{
                                fontSize: 13, color: 'var(--gold)',
                                marginBottom: 10,
                            }}>
                                {STARS(h.rating)} {h.rating} · {h.reviews} reviews
                            </div>

                            <div style={{
                                fontSize: 14, lineHeight: 1.7,
                                color: 'var(--cream-dark)', opacity: 0.75,
                            }}>
                                {h.shortDesc}
                            </div>
                        </div>
                    ))}

                    {/* Detail panel */}
                    {active !== null && (
                        <div style={{
                            gridColumn: '1 / -1',
                            background: 'rgba(200,168,75,0.05)',
                            border: '1px solid rgba(200,168,75,0.2)',
                            padding: 40,
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 40,
                            animation: 'fadeInPanel 0.3s ease',
                        }}>
                            <div>
                                <div style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: 28, fontWeight: 700,
                                    color: 'var(--cream)', marginBottom: 8,
                                }}>
                                    {HOTELS[active].name}
                                </div>
                                <div style={{
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: 12, letterSpacing: 2,
                                    color: 'var(--olive-light)', marginBottom: 20,
                                }}>
                                    {HOTELS[active].location}
                                </div>
                                <p style={{
                                    fontSize: 15, lineHeight: 1.8,
                                    color: 'var(--cream-dark)', opacity: 0.85,
                                }}>
                                    {HOTELS[active].longDesc}
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {([
                                    ['Established', HOTELS[active].established],
                                    ['Access', HOTELS[active].access],
                                    ['Signature Dishes', HOTELS[active].amenities],
                                    ['Area', HOTELS[active].area],
                                    ['Rating', `${HOTELS[active].rating} ★ (${HOTELS[active].reviews} reviews)`],
                                ] as [string, string][]).map(([k, v]) => (
                                    <div key={k} style={{
                                        display: 'flex', justifyContent: 'space-between',
                                        borderBottom: '1px solid rgba(200,168,75,0.1)',
                                        paddingBottom: 12,
                                    }}>
                                        <span style={{
                                            fontFamily: "'Bebas Neue', sans-serif",
                                            letterSpacing: 2, fontSize: 11,
                                            color: 'var(--gold)', opacity: 0.7,
                                        }}>{k}</span>
                                        <span style={{ fontSize: 14, color: 'var(--cream)', textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        @keyframes fadeInPanel {
          from { opacity:0; transform:translateY(-8px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @media(max-width:768px){
          #places .section-inner > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    )
}
