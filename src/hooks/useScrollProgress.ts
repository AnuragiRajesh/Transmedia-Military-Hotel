import { useEffect, useState } from 'react'

export function useScrollProgress(): number {
    const [progress, setProgress] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight
            setProgress(window.scrollY / total)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return progress  // 0 to 1
}