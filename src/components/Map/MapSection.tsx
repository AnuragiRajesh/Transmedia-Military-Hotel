import { useState } from 'react'
import type { JSX } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { HOTELS } from '../../data/hotels'

/* ── Fix Leaflet default icon paths in Vite ─────────────────────────── */
// Cast prototype to unknown first to avoid an incorrect direct cast to Record
delete ((L.Icon.Default.prototype as unknown) as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

/* ── Hotel thumbnail images (one per hotel) ─────────────────────────── */
const THUMBS: Record<number, string> = {
    1: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=120&q=80',
    2: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=120&q=80',
    3: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=120&q=80',
    4: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=120&q=80',
    5: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=120&q=80',
    6: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=120&q=80',
}

/* ── Google-Maps-style rating pill as map label ─────────────────────── */
const makePill = (rating: number, active: boolean) =>
    L.divIcon({
        html: `
      <div style="
        display:inline-flex;align-items:center;gap:4px;
        background:${active ? '#c8a84b' : '#fff'};
        color:${active ? '#150d05' : '#333'};
        border:2px solid ${active ? '#c8a84b' : '#ddd'};
        border-radius:20px;
        padding:4px 10px 4px 8px;
        font-family:sans-serif;font-size:13px;font-weight:700;
        box-shadow:0 2px 8px rgba(0,0,0,0.25);
        white-space:nowrap;
        cursor:pointer;
        transition:all 0.2s;
      ">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="${active ? '#150d05' : '#c8a84b'}">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        ${rating}
      </div>
    `,
        className: '',
        iconSize: [64, 30],
        iconAnchor: [32, 15],
        popupAnchor: [0, -18],
    })

/* ── Fly-to helper ──────────────────────────────────────────────────── */
function FlyTo({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap()
    map.flyTo([lat, lng], 15, { duration: 1.0 })
    return null
}

/* ── Star renderer ──────────────────────────────────────────────────── */
function Stars({ n }: { n: number }): JSX.Element {
    return (
        <span style={{ color: '#c8a84b', fontSize: 13 }}>
            {'★'.repeat(Math.floor(n))}
            {n % 1 >= 0.5 ? '½' : ''}
        </span>
    )
}

export default function MapSection(): JSX.Element {
    const [activeId, setActiveId] = useState<number | null>(null)
    const centre: [number, number] = [12.942, 77.578]

    const active = HOTELS.find(h => h.id === activeId) ?? null

    return (
        <section id="map" style={{ background: '#261709' }}>

            {/* ── Section header ──────────────────────────────────────────── */}
            <div className="section-inner" style={{ paddingBottom: 32 }}>
                <div className="section-label">Locations</div>
                <h2 className="section-title">Find Them on the Map</h2>
                <div className="divider" />
                <p className="body-text">
                    All six military hotels plotted across Bengaluru. Click any pin to see details.
                </p>
            </div>

            {/* ── Map + floating panel ─────────────────────────────────────── */}
            <div style={{
                position: 'relative',
                width: '100%',
                height: 680,
                borderTop: '1px solid rgba(200,168,75,0.2)',
                borderBottom: '1px solid rgba(200,168,75,0.2)',
                overflow: 'hidden',
            }}>

                {/* MAP */}
                <MapContainer
                    center={centre}
                    zoom={12}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {active && <FlyTo lat={active.lat} lng={active.lng} />}

                    {HOTELS.map(h => (
                        <Marker
                            key={h.id}
                            position={[h.lat, h.lng]}
                            icon={makePill(h.rating, activeId === h.id)}
                            eventHandlers={{ click: () => setActiveId(p => p === h.id ? null : h.id) }}
                        >
                            <Popup>
                                <strong>{h.name}</strong><br />
                                <span style={{ fontSize: 12 }}>{h.location}</span>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>

                {/* ── FLOATING right panel (Google Maps style) ─────────────── */}
                <div style={{
                    position: 'absolute',
                    top: 12, right: 12, bottom: 12,
                    width: 300,
                    background: '#fff',
                    borderRadius: 8,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    zIndex: 999,
                }}>
                    {/* Panel header */}
                    <div style={{
                        padding: '14px 16px',
                        background: '#150d05',
                        borderBottom: '1px solid #e0e0e0',
                        flexShrink: 0,
                    }}>
                        <div style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: 16, letterSpacing: 2,
                            color: 'var(--gold)',
                        }}>
                            Military Hotels of Bengaluru
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--olive-light)', marginTop: 2 }}>
                            {HOTELS.length} locations · Click to locate
                        </div>
                    </div>

                    {/* Scrollable hotel list */}
                    <div style={{ overflowY: 'auto', flex: 1 }}>
                        {HOTELS.map(h => (
                            <div
                                key={h.id}
                                onClick={() => setActiveId(p => p === h.id ? null : h.id)}
                                style={{
                                    display: 'flex', gap: 12,
                                    padding: '12px 14px',
                                    borderBottom: '1px solid #f0f0f0',
                                    cursor: 'pointer',
                                    background: activeId === h.id ? '#fff8e8' : '#fff',
                                    transition: 'background 0.15s',
                                    borderLeft: activeId === h.id ? '3px solid #c8a84b' : '3px solid transparent',
                                }}
                                onMouseEnter={e => { if (activeId !== h.id) (e.currentTarget as HTMLElement).style.background = '#fafafa' }}
                                onMouseLeave={e => { if (activeId !== h.id) (e.currentTarget as HTMLElement).style.background = '#fff' }}
                            >
                                {/* Thumbnail */}
                                <div style={{
                                    width: 72, height: 72,
                                    borderRadius: 6,
                                    backgroundImage: `url(${THUMBS[h.id]})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    flexShrink: 0,
                                    border: '1px solid #e8e8e8',
                                }} />

                                {/* Info */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{
                                        fontWeight: 700, fontSize: 14,
                                        color: '#111', lineHeight: 1.2,
                                        marginBottom: 3,
                                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                                    }}>
                                        {h.name}
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 3 }}>
                                        <span style={{ fontWeight: 700, fontSize: 12, color: '#333' }}>{h.rating}</span>
                                        <Stars n={h.rating} />
                                        <span style={{ fontSize: 11, color: '#666' }}>({h.reviews})</span>
                                    </div>

                                    <div style={{
                                        fontSize: 11, color: '#555',
                                        marginBottom: 4,
                                        display: 'flex', alignItems: 'center', gap: 4,
                                    }}>
                                        <span style={{
                                            background: '#f5f5f5',
                                            padding: '1px 6px', borderRadius: 3,
                                            fontSize: 10, color: '#333',
                                            fontWeight: 600,
                                        }}>
                                            {h.badge}
                                        </span>
                                        · {h.area}
                                    </div>

                                    <div style={{
                                        fontSize: 12, color: '#666',
                                        lineHeight: 1.4,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                    }}>
                                        {h.shortDesc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style>{`
        /* Leaflet tile z-index fix */
        .leaflet-pane { z-index: 400 !important; }
        .leaflet-top, .leaflet-bottom { z-index: 401 !important; }
      `}</style>
        </section>
    )
}
