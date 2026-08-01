'use client'

import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  // Scroll වෙද්දී Navbar එකේ background එක වැඩිපුර solid/blur වෙන්න
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          className="text-lg font-bold text-white tracking-tight hover:text-sky-400 transition"
        >
          Pasindu<span className="text-sky-400">.dev</span>
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#skills" className="hover:text-sky-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-sky-400 transition">
            Projects
          </a>
          <a
            href="#contact"
            className="bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 px-4 py-1.5 rounded-lg transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}