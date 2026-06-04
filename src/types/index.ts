export interface VideoSectionProps {
    src: string
    poster?: string
    caption?: string
}

export interface AudioPlayerProps {
    src: string
    label: string
    autoPlay?: boolean
}

export interface ParallaxImageProps {
    src: string
    alt: string
    speed?: number         // parallax intensity
}

export interface TextRevealProps {
    children: React.ReactNode
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
}

export interface StorySection {
    id: string
    type: 'text' | 'video' | 'image' | 'audio' | '3d'
    content: string
    caption?: string
}