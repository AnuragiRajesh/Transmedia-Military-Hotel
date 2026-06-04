import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import type { TextRevealProps } from '../../types'

gsap.registerPlugin(ScrollTrigger)

const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
}

export default function TextReveal({
    children,
    delay = 0,
    direction = 'up'
}: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref.current) return

        gsap.fromTo(
            ref.current,
            { opacity: 0, ...directionMap[direction] },
            {
                opacity: 1, y: 0, x: 0,
                duration: 1,
                delay,
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 80%',
                    end: 'top 40%',
                    scrub: true,
                }
            }
        )
    }, [delay, direction])

    return <div ref={ref}>{children}</div>
}