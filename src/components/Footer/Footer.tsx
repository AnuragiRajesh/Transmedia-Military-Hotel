import type { JSX } from 'react'

export default function Footer(): JSX.Element {
    return (
        <footer style={{
            background: '#150d05',
            padding: '48px 60px',
            borderTop: '1px solid rgba(200,168,75,0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 24,
        }}>
            <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 28, color: 'var(--gold)',
                letterSpacing: 4, lineHeight: 1.2,
            }}>
                Military<br />Hotels
            </div>

            <div style={{ fontSize: 13, color: 'var(--olive-light)', opacity: 0.6, textAlign: 'center', lineHeight: 1.6 }}>
                A convergent journalism project · May 2026<br />
                Produced by the Group 10 at the Azim Premji University, Bengaluru<br />
                Built with React + TypeScript + Three.js + Leaflet
            </div>

            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                {['About', 'Credits', 'Sources', 'Contact'].map(link => (
                    <a key={link} href="#" style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 11, letterSpacing: 2,
                        color: 'var(--cream)', opacity: 0.4,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s, color 0.2s',
                    }}
                        onMouseEnter={e => { (e.target as HTMLElement).style.opacity = '0.9'; (e.target as HTMLElement).style.color = 'var(--gold)' }}
                        onMouseLeave={e => { (e.target as HTMLElement).style.opacity = '0.4'; (e.target as HTMLElement).style.color = 'var(--cream)' }}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </footer>
    )
}
