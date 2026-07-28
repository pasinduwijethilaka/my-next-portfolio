'use client'

import React, { useState } from 'react'
import { supabase } from './supabaseClient'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Supabase messages table එකට Insert කරනවා
    const { error } = await supabase.from('messages').insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ])

    if (error) {
      console.error('Error sending message:', error.message)
      setStatus('error')
    } else {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' }) // Form එක Clear කරනවා
    }
  }

  return (
    <div className="max-w-xl w-full bg-slate-800/50 border border-slate-700 p-6 rounded-2xl shadow-xl backdrop-blur-sm mt-10">
      <h2 className="text-xl font-bold text-sky-400 mb-4 text-center">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
            placeholder="name@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
          <textarea
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-sky-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-slate-700 text-slate-900 font-bold text-sm py-2.5 rounded-lg transition duration-200"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-emerald-400 text-xs text-center mt-2">
            ✅ Message sent successfully! I will get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-rose-400 text-xs text-center mt-2">
            ❌ Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  )
}