'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950/50 py-10 mt-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Copyright */}
        <div className="text-center md:text-left">
          <p className="text-base font-bold text-white tracking-tight">
            Pasindu<span className="text-sky-400">.dev</span>
          </p>
          <p className="text-xs text-slate-400 mt-1">
            © {new Date().getFullYear()} Pasindu. Built with Next.js, React & Supabase.
          </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
          <a
            href="https://github.com/pasinduwijethilaka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pasindu-wijethilaka-800529417/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pasinduwijethilaka25@gmail.com"
            className="hover:text-sky-400 transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}