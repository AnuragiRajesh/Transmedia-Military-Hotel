import { useEffect, useState } from 'react'
import type { JSX } from 'react'

// Use import.meta.glob to get async import functions, then load them at runtime.
const modules = import.meta.glob('../../assets/photo/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}') as Record<string, () => Promise<{ default: string }>>

type ImgItem = { src: string; label: string; caption: string }


export default function ImageGallery(): JSX.Element {
    const [images, setImages] = useState<ImgItem[]>([])

    useEffect(() => {
        let mounted = true
        async function load() {
            const entries = await Promise.all(Object.entries(modules).map(async ([p, resolver]) => {
                try {
                    const mod = await resolver()
                    const src = mod && mod.default ? mod.default : ''
                    const name = p.split('/').pop() || p
                    const label = name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
                    return { src, label, caption: '' } as ImgItem
                } catch (e) {
                    return null
                }
            }))
            // filter out unwanted images (e.g., nalli soup) by filename/label
            const filtered = (entries.filter(Boolean) as ImgItem[])
                .filter(item => !item.label.toLowerCase().includes('nalli'))
            if (mounted) setImages(filtered)
        }
        load()
        return () => { mounted = false }
    }, [])
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
                {images.map((g, i) => (
                    <div
                        key={g.label + i}
                        style={{
                            position: 'relative', overflow: 'hidden',
                            cursor: 'pointer',
                            gridColumn: i % 3 === 0 ? 'span 2' : 'span 1',
                            gridRow: i % 5 === 1 ? 'span 2' : 'span 1',
                            transition: 'transform 0.25s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.03)'
                            const img = e.currentTarget.children[0] as HTMLElement | undefined
                            if (img) img.style.transform = 'scale(1.08)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)'
                            const img = e.currentTarget.children[0] as HTMLElement | undefined
                            if (img) img.style.transform = 'scale(1)'
                        }}
                    >
                            {/* Image */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: g.src ? `url(${g.src})` : undefined,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.6s ease',
                            transform: 'scale(1)',
                            willChange: 'transform',
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
