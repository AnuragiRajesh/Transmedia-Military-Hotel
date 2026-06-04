import type { JSX } from 'react'
import { GALLERY_ITEMS } from '../../data/galleryItems'

export default function ImageGallery(): JSX.Element {
    return (
        <section id="gallery" style={{ background: 'var(--charcoal)' }}>
            <div className="section-inner">
                <div className="section-label">Photo Essay</div>
                <h2 className="section-title">In Frame: The Military Hotel</h2>
                <div className="divider" />
            </div>

            {/* Masonry grid — full-width, no side padding */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridAutoRows: 220,
                gap: 3,
                paddingBottom: 80,
            }}>
                {GALLERY_ITEMS.map((g, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'relative', overflow: 'hidden',
                            cursor: 'pointer',
                            gridColumn: i % 3 === 0 ? 'span 2' : 'span 1',
                            gridRow: i % 5 === 1 ? 'span 2' : 'span 1',
                            transition: 'transform 0.3s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.01)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        {/* Image */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: `url(${g.img})`,
                            backgroundColor: g.color,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.5s',
                        }} />

                        {/* Gradient overlay */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, rgba(10,12,8,0.85) 0%, transparent 50%)',
                        }} />

                        {/* Caption */}
                        <div style={{
                            position: 'absolute', bottom: 16, left: 16,
                        }}>
                            <div style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: 12, letterSpacing: 2,
                                color: 'var(--cream)', opacity: 0.9,
                            }}>
                                {g.label}
                            </div>
                            <div style={{
                                fontSize: 11, color: 'var(--gold)',
                                opacity: 0.7, marginTop: 2,
                            }}>
                                {g.caption}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
