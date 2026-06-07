import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import type { ParallaxImageProps } from '../../types'

export default function ParallaxImage({ src, alt, speed = 100 }: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({ target: ref })
    const y: MotionValue<number> = useTransform(
        scrollYProgress,
        [0, 1],
        [-speed, speed]
    )

    return (
        <div ref={ref} style={{ overflow: 'hidden', borderRadius: '16px' }}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y, width: '100%', scale: 1.2 }}
            />
        </div>
    )
}
