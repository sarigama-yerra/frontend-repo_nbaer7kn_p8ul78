import React from 'react'
import { motion } from 'framer-motion'
import ParallaxSection from './components/ParallaxSection'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Particles from './components/Particles'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Global decorative background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.12),transparent),radial-gradient(600px_300px_at_90%_10%,rgba(34,211,238,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.6),rgba(2,6,23,0.9))]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500 shadow-lg shadow-fuchsia-500/30" />
            <span className="font-semibold tracking-wide">MERN Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero with parallax, particles, and Spline */}
      <ParallaxSection id="hero" className="pt-8">
        <Particles count={60} />
        <Hero />
      </ParallaxSection>

      {/* About */}
      <ParallaxSection id="about" className="">
        <About />
      </ParallaxSection>

      {/* Skills */}
      <ParallaxSection id="skills">
        <Skills />
      </ParallaxSection>

      {/* Projects */}
      <ParallaxSection id="projects">
        <Projects />
      </ParallaxSection>

      {/* Contact */}
      <ParallaxSection id="contact">
        <Contact />
      </ParallaxSection>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p>© {new Date().getFullYear()} MERN Developer — Crafted with motion and glass.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
