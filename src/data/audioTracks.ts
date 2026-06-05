import sampleAudio from '../assets/audio/audio.mp3'

export interface AudioTrack {
    id: number | string
    title: string
    sub: string
    dur: string
    src?: string
}

export const AUDIO_TRACKS: AudioTrack[] = [
    { id: 1, title: 'Origins of Military Hotels — Historical Overview', sub: 'Mysore, Tipu Sultan & Shivaji; cantonment-era cooks and early regimental messes · 4:00', dur: '4:00' },
    { id: 2, title: 'Cooks & Kitchens — From Regimental Mess to Home Restaurants', sub: 'How cooks set up home-run hotels, 4:00 AM routines, and passing recipes through generations · 3:30', dur: '3:30' },
    { id: 3, title: 'Signature Dishes — Nalli, Boti & Donne Biryani', sub: 'Nalli (bone broth), boti (organ meats) and donne biryani: preparation, benefits, and flavours · 4:30', dur: '4:30' },
    { id: 4, title: 'Cultural Memory — Families, Begru Oota & Preservation', sub: 'Military hotels as cultural repositories; family stories, wedding meals (Begru Oota) and modern changes · 3:00', dur: '3:00' },
]

export const AUDIO_TRACKS_LABEL: AudioTrack[] = [

    { id: 5, title: 'A native resident voice', sub: 'Interview with a longtime resident of the area', dur: '15:00', src: sampleAudio },
]