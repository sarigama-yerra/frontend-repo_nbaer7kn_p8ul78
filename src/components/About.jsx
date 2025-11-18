import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 md:px-12 py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl shadow-fuchsia-500/10">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m a MERN stack developer focused on building immersive interfaces and robust APIs. I love combining performance, accessibility, and motion to deliver delightful user experiences.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            My toolkit includes React, Node.js, Express, MongoDB, and Tailwind CSS — with a passion for design systems, micro-interactions, and smooth scrolling.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: 'Experience', value: '5+ years' },
            { title: 'Projects', value: '30+ shipped' },
            { title: 'Performance', value: 'Lighthouse 95+' },
            { title: 'Freelance', value: 'Available' },
          ].map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center text-white/90 shadow-lg">
              <div className="text-sm text-slate-300/80">{card.title}</div>
              <div className="mt-2 text-2xl font-semibold">{card.value}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
