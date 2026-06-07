import { useState } from 'react'
import type { JSX } from 'react'

interface VideoReportProps {
    /** YouTube video ID, e.g. "dQw4w9WgXcQ" */
    videoId?: string
    /** Local or external video source URL */
    videoSrc?: string
    title?: string
    caption?: string
    duration?: string
}

export default function VideoReport({
    videoId,
    videoSrc,
    title = 'Video Report: Inside the Kitchen',
    caption = 'A morning at Shivaji Military Hotel — from 5 AM prep to the breakfast rush. Field reporting by the Convergent Journalism team.',
    duration = '08:45',
}: VideoReportProps): JSX.Element {
    const [hovered, setHovered] = useState(false)

    /* YouTube thumbnail — falls back to a gradient if no videoId */
    const thumbUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null

    const handlePlay = () => {
        if (videoId) {
            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <section id="video" style={{
            background: '#261709',
            borderTop: '1px solid rgba(200,168,75,0.15)',
            borderBottom: '1px solid rgba(200,168,75,0.15)',
            paddingTop: 120,
            paddingBottom: 72,
        }}>
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 60px' }}>
                <div className="section-label">Video Report</div>
                <h2 className="section-title">{title}</h2>

                {/* If a local or external video source is provided, render an HTML5 player */}
                {/** videoSrc takes precedence over videoId */}
                {/** Render inline video when `videoSrc` is provided */}
                {videoSrc ? (
                    <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(200,168,75,0.25)' }}>
                        <video
                            controls
                            src={videoSrc}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                ) : (
                    /* Clickable player thumbnail for YouTube */
                    <div
                        onClick={handlePlay}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: 2,
                            cursor: videoId ? 'pointer' : 'default',
                            border: '1px solid rgba(200,168,75,0.25)',
                        }}
                    >
                        {/* Background: YouTube thumb or gradient */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: thumbUrl
                                ? `url(${thumbUrl}) center/cover no-repeat`
                                : 'linear-gradient(135deg, #2a1e0c 0%, #2c3020 50%, #261709 100%)',
                            transform: hovered ? 'scale(1.03)' : 'scale(1)',
                            transition: 'transform 0.5s ease',
                        }} />

                        {/* Dark overlay — lightens on hover */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: hovered
                                ? 'rgba(21,13,5,0.35)'
                                : 'rgba(21,13,5,0.55)',
                            transition: 'background 0.3s',
                        }} />

                        {/* Centre content */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                            gap: 16,
                        }}>
                            {/* Play button */}
                            <div style={{
                                width: 80, height: 80,
                                borderRadius: '50%',
                                background: hovered ? 'var(--gold)' : 'rgba(200,168,75,0.15)',
                                border: `2px solid ${hovered ? 'var(--gold)' : 'rgba(200,168,75,0.7)'}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transform: hovered ? 'scale(1.12)' : 'scale(1)',
                                transition: 'all 0.25s',
                            }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill={hovered ? '#150d05' : '#c8a84b'}>
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>

                            <div style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 13, letterSpacing: 3,
                                color: hovered ? 'var(--cream)' : 'var(--gold)',
                                opacity: hovered ? 1 : 0.75,
                                transition: 'all 0.2s',
                            }}>
                                {videoId ? `Watch on YouTube · ${duration}` : `Add your YouTube video ID · ${duration}`}
                            </div>
                        </div>

                        {/* Duration badge — bottom right */}
                        <div style={{
                            position: 'absolute', bottom: 14, right: 16,
                            background: 'rgba(21,13,5,0.85)',
                            border: '1px solid rgba(200,168,75,0.3)',
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: 12, letterSpacing: 2,
                            color: 'var(--cream)',
                            padding: '3px 10px',
                        }}>
                            {duration}
                        </div>

                        {/* YouTube logo badge — bottom left, shows only if videoId set */}
                        {videoId && (
                            <div style={{
                                position: 'absolute', bottom: 14, left: 16,
                                display: 'flex', alignItems: 'center', gap: 6,
                                background: 'rgba(21,13,5,0.85)',
                                padding: '3px 10px',
                                border: '1px solid rgba(200,168,75,0.2)',
                            }}>
                                <svg width="14" height="10" viewBox="0 0 159.1 111.1" fill="#FF0000">
                                    <path d="M154.5 17.5a20 20 0 0 0-14.1-14.1C127.9 0 79.6 0 79.6 0S31.3 0 18.7 3.4A20 20 0 0 0 4.6 17.5C1.2 30.1 1.2 55.5 1.2 55.5s0 25.4 3.4 38a20 20 0 0 0 14.1 14.1C31.3 111 79.6 111 79.6 111s48.3 0 60.9-3.4a20 20 0 0 0 14.1-14.1c3.4-12.6 3.4-38 3.4-38s0-25.4-3.5-38z" />
                                    <path fill="#fff" d="M63.8 79.3l40.3-23.8-40.3-23.8z" />
                                </svg>
                                <span style={{ fontSize: 10, color: 'var(--cream)', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 1 }}>
                                    Opens on YouTube
                                </span>
                            </div>
                        )}
                    </div>
                )}

                <p style={{
                    marginTop: 14, fontSize: 13,
                    fontStyle: 'italic', color: 'var(--olive-light)',
                }}>
                    {caption}
                </p>

                {/* Helper note for dev */}
                {/* {!videoId && (
                    <div style={{
                        marginTop: 12,
                        padding: '10px 16px',
                        background: 'rgba(200,168,75,0.06)',
                        border: '1px solid rgba(200,168,75,0.2)',
                        fontSize: 12, color: 'var(--olive-light)',
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: 1,
                    }}>
                        ▸ Pass your YouTube video ID via the <code style={{ color: 'var(--gold)' }}>videoId</code> prop in App.tsx to activate the player.
                    </div>
                )} */}
            </div>
        </section>
    )
}