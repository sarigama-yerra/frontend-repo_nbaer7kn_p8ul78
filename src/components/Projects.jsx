import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'CyberShop — E‑commerce UI',
    desc: 'Next-level storefront with 3D product previews and headless checkout.',
    tags: ['React', 'Tailwind', 'Stripe'],
  },
  {
    title: 'Nebula Notes — Real-time collab',
    desc: 'Socket-powered markdown editor with CRDT syncing and presence.',
    tags: ['Node', 'Express', 'WebSockets'],
  },
  {
    title: 'Orbit CMS — Content platform',
    desc: 'Role-based CMS with dynamic schemas and blazing fast API.',
    tags: ['MongoDB', 'Express', 'React'],
  },
]

export default function Projects() {
  return (
    <div id="projects" className="relative mx-auto max-w-6xl px-6 md:px-12 py-24">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <a href="#contact" className="text-fuchsia-300 hover:text-fuchsia-200">Get in touch →</a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <motion.article key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_0%_0%,rgba(217,70,239,0.12),transparent),radial-gradient(400px_200px_at_100%_100%,rgba(34,211,238,0.12),transparent)]" />
            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-slate-200">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
