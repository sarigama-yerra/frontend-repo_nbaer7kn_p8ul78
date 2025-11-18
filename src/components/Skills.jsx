import React from 'react'
import { motion } from 'framer-motion'
import { Atom, Cpu, Server, Database, Code, Palette } from 'lucide-react'

const skills = [
  { name: 'React', icon: Atom, color: 'from-cyan-400 to-fuchsia-500' },
  { name: 'Node.js', icon: Cpu, color: 'from-emerald-400 to-lime-500' },
  { name: 'Express', icon: Server, color: 'from-blue-400 to-indigo-500' },
  { name: 'MongoDB', icon: Database, color: 'from-emerald-400 to-teal-500' },
  { name: 'JavaScript', icon: Code, color: 'from-yellow-400 to-orange-500' },
  { name: 'TailwindCSS', icon: Palette, color: 'from-sky-400 to-cyan-500' },
]

export default function Skills() {
  return (
    <div className="relative mx-auto max-w-6xl px-6 md:px-12 py-24">
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
            <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-30 transition`} />
            <div className="relative z-10 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 shadow-inner">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">{s.name}</div>
                <div className="text-slate-400 text-sm">Advanced</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
