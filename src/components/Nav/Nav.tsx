import type { JSX } from 'react'

interface NavProps {
    scrollProgress: number
    onNav: (id: string) => void
}

const NAV_LINKS: [string, string][] = [
    ['intro', 'About'],
    ['places', 'Places'],
    ['video', 'Video'],
    ['audio', 'Audio'],
    ['gallery', 'Gallery'],
    ['map', 'Map'],
    ['timeline', 'History'],
]

export default function Nav({ scrollProgress, onNav }: NavProps): JSX.Element {
    return (
        <>
            {/* Scroll progress bar */}
            <div style={{
                position: 'fixed', top: 0, left: 0, zIndex: 999,
                height: '3px', width: `${scrollProgress}%`,
                background: 'linear-gradient(90deg, #c8a84b, #e8c96a)',
                transition: 'width 0.1s linear',
            }} />

            <nav style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '20px 48px',
                background: 'linear-gradient(to bottom, rgba(14,16,10,0.95), transparent)',
                backdropFilter: 'blur(4px)',
            }}>
                <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 22, letterSpacing: 4,
                    color: 'var(--gold)',
                }}>
                    Military Hotels
                </div>
                <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }}>
                    {NAV_LINKS.map(([id, label]) => (
                        <li key={id}>
                            <a
                                onClick={() => onNav(id)}
                                style={{
                                    fontFamily: "'Bebas Neue', sans-serif",
                                    fontSize: 13, letterSpacing: 2,
                                    color: 'var(--cream)', textDecoration: 'none',
                                    opacity: 0.7, cursor: 'pointer',
                                    transition: 'opacity 0.2s, color 0.2s',
                                }}
                                onMouseEnter={e => { (e.target as HTMLElement).style.opacity = '1'; (e.target as HTMLElement).style.color = 'var(--gold)' }}
                                onMouseLeave={e => { (e.target as HTMLElement).style.opacity = '0.7'; (e.target as HTMLElement).style.color = 'var(--cream)' }}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
