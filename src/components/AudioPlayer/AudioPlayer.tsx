import { useState, useEffect, useRef } from 'react'
import type { JSX } from 'react'
import { AUDIO_TRACKS } from '../../data/audioTracks'
import { AUDIO_TRACKS_LABEL } from '../../data/audioTracks'

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

function formatTime(s: number) {
    if (!isFinite(s) || s <= 0) return '0:00'
    const sec = Math.floor(s)
    const m = Math.floor(sec / 60)
    const ss = sec % 60
    return `${m}:${ss.toString().padStart(2, '0')}`
}

export default function AudioSection(): JSX.Element {
    const [activeTrack] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    // Sync play/pause with the actual audio element
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return
        if (isPlaying) {
            audio.play().catch(() => setIsPlaying(false))
        } else {
            audio.pause()
        }
    }, [isPlaying])

    // Update progress from audio element timeupdate and handle ended
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return
        const onTime = () => {
            const d = audio.duration || 1
            setCurrentTime(audio.currentTime)
            setProgress((audio.currentTime / d) * 100)
        }
        const onLoaded = () => {
            setDuration(audio.duration || 0)
        }
        const onEnded = () => setIsPlaying(false)
        audio.addEventListener('timeupdate', onTime)
        audio.addEventListener('loadedmetadata', onLoaded)
        audio.addEventListener('ended', onEnded)
        return () => {
            audio.removeEventListener('timeupdate', onTime)
            audio.removeEventListener('loadedmetadata', onLoaded)
            audio.removeEventListener('ended', onEnded)
        }
    }, [])

    const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v))

    const seekTo = (time: number) => {
        const audio = audioRef.current
        if (!audio) return
        audio.currentTime = clamp(time, 0, audio.duration || 0)
        setCurrentTime(audio.currentTime)
        setProgress(((audio.currentTime) / (audio.duration || 1)) * 100)
    }

    const seekBy = (offset: number) => {
        const audio = audioRef.current
        if (!audio) return
        seekTo(audio.currentTime + offset)
    }

    return (
        <section id="audio" style={{
            background: 'linear-gradient(135deg, #150d05 0%, #261709 50%, #2e1c0e 100%)',
            padding: '80px 60px',
        }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
                <div className="section-label">Audio Journalism</div>
                <h2 className="section-title">Voices from the Community</h2>
                <div className="divider" />
             

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
                        {AUDIO_TRACKS_LABEL[0].title}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--olive-light)', marginBottom: 24 }}>
                        {AUDIO_TRACKS_LABEL[0].sub}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                        {/* Skip Back 10s */}
                        <button
                            onClick={() => seekBy(-10)}
                            style={{
                                width: 44, height: 44, borderRadius: '50%',
                                border: '1px solid rgba(200,168,75,0.12)',
                                background: 'transparent', color: 'var(--gold)',
                                fontSize: 14, cursor: 'pointer'
                            }}
                            aria-label="Back 10s"
                        >
                            ⏪
                        </button>

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
                                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
                                const pct = clamp((e.clientX - rect.left) / rect.width, 0, 1)
                                const audio = audioRef.current
                                if (!audio) return
                                seekTo(pct * (audio.duration || 0))
                            }}
                        >
                            <WaveformBars isPlaying={isPlaying} progress={progress} />
                        </div>

                        {/* Skip Forward 10s */}
                        <button
                            onClick={() => seekBy(10)}
                            style={{
                                width: 44, height: 44, borderRadius: '50%',
                                border: '1px solid rgba(200,168,75,0.12)',
                                background: 'transparent', color: 'var(--gold)',
                                fontSize: 14, cursor: 'pointer'
                            }}
                            aria-label="Forward 10s"
                        >
                            ⏩
                        </button>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <div style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 16, letterSpacing: 2,
                                color: 'var(--olive-light)',
                            }}>
                                {formatTime(duration)}
                            </div>
                            <div style={{ fontSize: 11, color: 'var(--olive-light)', marginTop: 4 }}>
                                -{formatTime(Math.max(0, duration - currentTime))}
                            </div>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div
                        style={{
                            width: '100%', height: 8,
                            background: 'rgba(200,168,75,0.15)',
                            borderRadius: 4,
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
                            const pct = clamp((e.clientX - rect.left) / rect.width, 0, 1)
                            const audio = audioRef.current
                            if (!audio) return
                            seekTo(pct * (audio.duration || 0))
                        }}
                    >
                        <div style={{
                            height: '100%',
                            width: `${progress}%`,
                            background: 'var(--gold)',
                            transition: 'width 0.5s linear',
                        }} />
                    </div>
                    {/* Hidden native audio element that actually plays the file */}
                    <audio ref={audioRef} src={AUDIO_TRACKS_LABEL[0].src} preload="metadata" />
                </div>

                {/* Track list */}
                <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {AUDIO_TRACKS.map((t, i) => (
                        <div
                            key={t.id}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 16,
                                padding: '14px 16px',
                                border: activeTrack === i
                                    ? '1px solid rgba(200,168,75,0.25)'
                                    : '1px solid rgba(200,168,75,0.08)',
                                background: activeTrack === i
                                    ? 'rgba(200,168,75,0.08)'
                                    : 'transparent',
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