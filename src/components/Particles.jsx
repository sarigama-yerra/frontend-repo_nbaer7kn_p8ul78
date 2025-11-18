import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Particles({ count = 40 }) {
  const particles = useMemo(() => (
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 6,
      hue: 260 + Math.floor(Math.random() * 80),
      alpha: 0.2 + Math.random() * 0.5,
    }))
  ), [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <motion.span
          key={p.id}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-10, 10, -10], opacity: [0, p.alpha, 0] }}
          transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            borderRadius: '9999px',
            boxShadow: `0 0 8px hsla(${p.hue},100%,70%,${p.alpha})`,
            background: `hsla(${p.hue},100%,70%,${p.alpha})`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </div>
  )
}
