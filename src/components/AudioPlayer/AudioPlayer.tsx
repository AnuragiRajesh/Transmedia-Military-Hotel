import { useState, useEffect, useRef } from 'react'
import type { JSX } from 'react'
import { AUDIO_TRACKS } from '../../data/audioTracks'

function WaveformBars({ isPlaying, progress }: { isPlaying: boolean; progress: number }): JSX.Element {
    const heights = [30, 60, 45, 80, 55, 70, 40, 90, 65, 75, 35, 85, 50, 70, 60, 45, 80, 55, 65, 40, 75, 90, 60, 50, 70, 45, 85, 55, 65, 30, 80, 70, 45, 60, 90, 75, 55, 40, 65, 80]
    return (
        <>
            {heights.map((h, i) => {
                const pct = (i / heights.length) * 100
                const played = pct < progress
                const active = isPlaying && pct < progress + 2 && pct >= progress
                return (
                    <div key={i} style={{
                        flex: 1, height: `${h}%`,
                        borderRadius: 1,
                        background: active
                            ? 'var(--gold)'
                            : played
                                ? 'rgba(200,168,75,0.6)'
                                : 'rgba(200,168,75,0.3)',
                        transition: 'background 0.1s',
                    }} />
                )
            })}
        </>
    )
}

export default function AudioSection(): JSX.Element {
    const [activeTrack, setActiveTrack] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const timer = useRef<ReturnType<typeof setInterval> | null>(null)

    useEffect(() => {
        if (isPlaying) {
            timer.current = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) { setIsPlaying(false); return 0 }
                    return p + 0.3
                })
            }, 100)
        } else {
            if (timer.current) clearInterval(timer.current)
        }
        return () => { if (timer.current) clearInterval(timer.current) }
    }, [isPlaying])

    const selectTrack = (i: number) => {
        setActiveTrack(i); setProgress(0); setIsPlaying(false)
    }

    return (
        <section id="audio" style={{
            background: 'linear-gradient(135deg, #150d05 0%, #261709 50%, #2e1c0e 100%)',
            padding: '80px 60px',
        }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
                <div className="section-label">Audio Journalism</div>
                <h2 className="section-title">Voices from the Kitchen</h2>
                <div className="divider" />
                <p className="body-text" style={{ maxWidth: 600 }}>
                    Oral histories, field recordings, and interviews with owners and veterans.
                </p>

                {/* Player */}
                <div style={{
                    background: 'rgba(244,237,224,0.03)',
                    border: '1px solid rgba(200,168,75,0.2)',
                    padding: '32px 36px',
                    marginTop: 32, borderRadius: 2,
                }}>
                    <div style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22, color: 'var(--cream)', marginBottom: 6,
                    }}>
                        {AUDIO_TRACKS[activeTrack].title}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--olive-light)', marginBottom: 24 }}>
                        {AUDIO_TRACKS[activeTrack].sub}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                        {/* Play / Pause */}
                        <button
                            onClick={() => setIsPlaying(p => !p)}
                            style={{
                                width: 52, height: 52, borderRadius: '50%',
                                border: '2px solid var(--gold)',
                                background: isPlaying ? 'var(--gold)' : 'transparent',
                                color: isPlaying ? 'var(--charcoal)' : 'var(--gold)',
                                fontSize: 18, cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'background 0.2s',
                            }}
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? '⏸' : '▶'}
                        </button>

                        {/* Waveform */}
                        <div
                            style={{ flex: 1, height: 48, display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect()
                                setProgress(((e.clientX - rect.left) / rect.width) * 100)
                            }}
                        >
                            <WaveformBars isPlaying={isPlaying} progress={progress} />
                        </div>

                        <div style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: 16, letterSpacing: 2,
                            color: 'var(--olive-light)',
                        }}>
                            {AUDIO_TRACKS[activeTrack].dur}
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div style={{
                        width: '100%', height: 2,
                        background: 'rgba(200,168,75,0.15)',
                        cursor: 'pointer',
                    }}>
                        <div style={{
                            height: '100%',
                            width: `${progress}%`,
                            background: 'var(--gold)',
                            transition: 'width 0.5s linear',
                        }} />
                    </div>
                </div>

                {/* Track list */}
                <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {AUDIO_TRACKS.map((t, i) => (
                        <div
                            key={t.id}
                            onClick={() => selectTrack(i)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 16,
                                padding: '14px 16px',
                                border: activeTrack === i
                                    ? '1px solid rgba(200,168,75,0.25)'
                                    : '1px solid rgba(200,168,75,0.08)',
                                background: activeTrack === i
                                    ? 'rgba(200,168,75,0.08)'
                                    : 'transparent',
                                cursor: 'pointer',
                                transition: 'background 0.2s',
                            }}
                        >
                            <div style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 18,
                                color: activeTrack === i ? 'var(--gold)' : 'rgba(200,168,75,0.4)',
                                width: 28,
                            }}>
                                {i + 1}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 15, color: 'var(--cream)' }}>{t.title}</div>
                                <div style={{ fontSize: 12, color: 'var(--olive-light)', marginTop: 2 }}>{t.sub}</div>
                            </div>
                            <div style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 13, letterSpacing: 1,
                                color: 'var(--olive-light)',
                            }}>
                                {t.dur}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}