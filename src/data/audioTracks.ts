export interface AudioTrack {
    id: number
    title: string
    sub: string
    dur: string
}

export const AUDIO_TRACKS: AudioTrack[] = [
    { id: 1, title: 'Voices of the Kitchen — Owner Interviews', sub: 'Interviews with owners & chefs · 8 min', dur: '8:02' },
    { id: 2, title: 'The Morning Rush — Ambient Soundscape', sub: 'Field recording, Shivaji Hotel 6:30 AM', dur: '2:45' },
    { id: 3, title: 'Oral Histories: From Soldier Mess to Street Food', sub: 'Military historian Dr. K. Venkataramaiah', dur: '11:18' },
    { id: 4, title: 'Language of the Ladle — Kannada Food Terms', sub: 'Linguist Prof. Roopa Srinivasan', dur: '5:50' },
]
