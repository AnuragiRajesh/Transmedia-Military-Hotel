import type { JSX } from 'react'

export default function Hero(): JSX.Element {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            minHeight: 640,
            overflow: 'hidden',
        }}>

            {/* ── Background photo ── */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url(/hero-shivaji.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundRepeat: 'no-repeat',
                /* subtle zoom-in on load */
                animation: 'heroZoom 12s ease-out forwards',
            }} />

            {/* ── Cinematic dark gradient overlay ── */}
            <div style={{
                position: 'absolute', inset: 0,
                background:
                    'linear-gradient(to top, rgba(21,13,5,0.97) 0%, rgba(21,13,5,0.7) 40%, rgba(21,13,5,0.2) 80%, rgba(21,13,5,0.05) 100%)',
            }} />

            {/* ── Gold grid texture overlay ── */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage:
                    'repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(200,168,75,0.04) 80px),' +
                    'repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(200,168,75,0.04) 80px)',
                pointerEvents: 'none',
            }} />

            {/* ── Hero text: bottom-left ── */}
            <div style={{
                position: 'absolute', bottom: 64, left: 60,
                zIndex: 10, maxWidth: 760,
            }}>
                {/* Eyebrow badge */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 11, letterSpacing: 4,
                    color: 'var(--gold)',
                    border: '1px solid var(--gold)',
                    padding: '6px 16px', marginBottom: 24,
                }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
                    Convergent Journalism · Bengaluru · May 2026
                </div>

                {/* Main title */}
                <h1 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(60px, 10vw, 128px)',
                    lineHeight: 0.88,
                    color: 'var(--cream)',
                    letterSpacing: -1,
                    textShadow: '0 4px 32px rgba(0,0,0,0.6)',
                }}>
                    The<br />
                    <span style={{ color: 'var(--gold)' }}>Military</span><br />
                    Hotels of<br />
                    Bengaluru
                </h1>

                {/* Deck */}
                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    fontSize: 'clamp(15px, 2vw, 20px)',
                    color: 'var(--cream-dark)',
                    marginTop: 20,
                    maxWidth: 500,
                    lineHeight: 1.55,
                    opacity: 0.85,
                    textShadow: '0 2px 12px rgba(0,0,0,0.5)',
                }}>
                    A story of soldiers, spice, and survival in the Garden City.
                </p>

                <div style={{
                    marginTop: 12,
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 12, letterSpacing: 3,
                    color: 'var(--gold)', opacity: 0.55,
                }}>
                    By [Your Name] · May 2026
                </div>
            </div>

            {/* ── Photo credit: bottom-right ── */}
            <div style={{
                position: 'absolute', bottom: 20, right: 32,
                fontSize: 11, color: 'var(--cream)',
                opacity: 0.35,
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: 2, zIndex: 10,
            }}>
                Photo: Shivaji Military Hotel, Jayanagar
            </div>

            {/* ── Scroll indicator ── */}
            <div style={{
                position: 'absolute', right: 48, bottom: 64,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 11, letterSpacing: 3,
                color: 'var(--gold)', opacity: 0.6, zIndex: 10,
            }}>
                <div style={{
                    width: 1, height: 60,
                    background: 'linear-gradient(to bottom, var(--gold), transparent)',
                    animation: 'scrollPulse 2s ease-in-out infinite',
                }} />
                <span>Scroll</span>
            </div>

            <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.06); }
          to   { transform: scale(1); }
        }
        @keyframes scrollPulse {
          0%,100% { opacity:0.4; transform:scaleY(1); }
          50%      { opacity:1;   transform:scaleY(1.1); }
        }
        @media (max-width:768px) {
          section > div:nth-child(4) { left:24px !important; bottom:48px !important; }
        }
      `}</style>
        </section>
    )
}
