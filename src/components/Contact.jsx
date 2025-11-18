import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div id="contact" className="relative mx-auto max-w-5xl px-6 md:px-12 py-24">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <p className="mt-2 text-slate-300">Have a project in mind? Let’s build something remarkable.</p>
        <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid sm:grid-cols-2 gap-4">
          <input className="col-span-1 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Your name" />
          <input type="email" className="col-span-1 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Email" />
          <textarea rows={4} className="col-span-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" placeholder="Tell me about your project" />
          <button className="justify-self-start mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-medium shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition">Send Message</button>
        </form>
      </div>
    </div>
  )
}
