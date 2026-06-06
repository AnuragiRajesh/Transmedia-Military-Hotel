import type { JSX } from 'react'
import { TIMELINE } from '../../data/timeline'

export default function Timeline(): JSX.Element {
    return (
        <section id="timeline" style={{
            background: 'linear-gradient(180deg, var(--charcoal) 0%, #150d05 100%)',
            padding: '80px 60px',
        }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div className="section-label">History</div>
                <h2 className="section-title">225 years and counting</h2>
                <div className="divider" />
            </div>

            <div style={{
                maxWidth: 920,
                margin: '48px auto 0',
                position: 'relative',
                paddingLeft: 24,
            }}>
                {/* Vertical line */}
                <div style={{
                    position: 'absolute',
                    left: 140, top: 0, bottom: 0,
                    width: 1,
                    background: 'linear-gradient(to bottom, var(--gold), transparent)',
                    opacity: 0.35,
                }} />

                {TIMELINE.map((t, i) => (
                    <div key={t.year} style={{
                        display: 'flex', gap: 32,
                        marginBottom: i < TIMELINE.length - 1 ? 48 : 0,
                        position: 'relative',
                        opacity: 0,
                        animation: `fadeUp 0.5s ease ${i * 0.1}s forwards`,
                    }}>
                        <div style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: 18, color: 'var(--gold)',
                            width: 140, textAlign: 'right',
                            flexShrink: 0, paddingTop: 4,
                        }}>
                            {/* {t.year} */}
                        </div>

                        {/* Dot */}
                        <div style={{
                            width: 12, height: 12,
                            borderRadius: '50%',
                            border: '2px solid var(--gold)',
                            background: '#1e130a',
                            flexShrink: 0, marginTop: 6,
                        }} />

                        <div style={{ flex: 1, paddingLeft: 12 }}>
                            <div style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 20, fontWeight: 600,
                                color: 'var(--cream)', marginBottom: 10,
                            }}>
                                {t.event}: {t.year} 
                            </div>
                            <div style={{
                                fontSize: 15, lineHeight: 1.8,
                                color: 'var(--cream-dark)', opacity: 0.85,
                                maxWidth: 680,
                            }}>
                                {t.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
        </section>
    )
}
