import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Generic parallax section wrapper
// Props: id, className, height (min-h-screen by default), bgContent, fgContent
export default function ParallaxSection({ id, className = '', children, bgSpeed = -20, midSpeed = -10, fgSpeed = -5 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], [bgSpeed, -bgSpeed])
  const midY = useTransform(scrollYProgress, [0, 1], [midSpeed, -midSpeed])
  const fgY = useTransform(scrollYProgress, [0, 1], [fgSpeed, -fgSpeed])

  return (
    <section id={id} ref={ref} className={`relative w-full min-h-screen overflow-hidden ${className}`}>
      {/* Background layer */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-20%,rgba(99,102,241,0.15),transparent),radial-gradient(800px_400px_at_110%_30%,rgba(16,185,129,0.12),transparent)]" />
      </motion.div>

      {/* Mid layer for decorative shapes */}
      <motion.div style={{ y: midY }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </motion.div>

      {/* Foreground content */}
      <motion.div style={{ y: fgY }} className="relative">
        {children}
      </motion.div>
    </section>
  )
}
