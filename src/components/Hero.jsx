import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] grid lg:grid-cols-2 gap-10 items-center px-6 md:px-12 lg:px-16 py-16">
      {/* 3D Spline scene */}
      <div className="relative h-[60vh] lg:h-[80vh] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_-20px_rgba(168,85,247,0.35)]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlay to blend with background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-900/10" />
      </div>

      {/* Textual content */}
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 border border-white/10 text-xs text-fuchsia-300 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            MERN Developer
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Building immersive web apps with next‑gen design
          </h1>
          <p className="mt-4 text-slate-300/90 text-lg leading-relaxed">
            I craft performant user experiences using MongoDB, Express, React, and Node — blending clean code with futuristic aesthetics.
          </p>
        </motion.div>

        {/* Floating code glass card */}
        <motion.pre initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 relative bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-sm text-slate-200 shadow-2xl shadow-fuchsia-500/10">
{`const stack = ["MongoDB", "Express", "React", "Node"]
const app = createApp(stack)
app.enable(\"motion\").enable(\"glassmorphism\")
app.deploy(\"to the stars\")`}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
        </motion.pre>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-medium shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 transition">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
