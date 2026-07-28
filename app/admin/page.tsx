'use client'

import React, { useEffect, useState } from 'react'
import { supabase } from '../components/supabaseClient'

interface Message {
  id: number
  created_at: string
  name: string
  email: string
  message: string
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  // Database එකෙන් Messages Fetch කරගන්නා Function එක
  const fetchMessages = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching messages:', error.message)
    } else {
      setMessages(data || [])
    }
    setLoading(false)
  }

  // Message එකක් Delete කිරීමට
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm('Are you sure you want to delete this message?')
    if (!confirmDelete) return

    const { error } = await supabase.from('messages').delete().eq('id', id)

    if (error) {
      alert('Failed to delete message')
    } else {
      setMessages(messages.filter((msg) => msg.id !== id))
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-sky-400">Admin Inbox</h1>
            <p className="text-xs text-slate-400 mt-1">
              Contact Form එකෙන් ආපු Messages ටික මෙතැනින් බලන්න.
            </p>
          </div>
          <button
            onClick={fetchMessages}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-3 py-2 rounded-lg border border-slate-700 transition"
          >
            🔄 Refresh
          </button>
        </div>

        {loading ? (
          <p className="text-slate-400 text-sm">Messages load වෙනවා...</p>
        ) : messages.length === 0 ? (
          <div className="bg-slate-800/40 border border-slate-800 rounded-xl p-8 text-center text-slate-400">
            තවම එක Message එකක්වත් ඇවිත් නෑ මචං! 👍
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5 shadow-lg relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-sky-300 text-base">{msg.name}</h3>
                      <a
                        href={`mailto:${msg.email}`}
                        className="text-xs text-slate-400 hover:underline"
                      >
                        {msg.email}
                      </a>
                    </div>
                    <span className="text-[10px] text-slate-500">
                      {new Date(msg.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 mt-3 whitespace-pre-wrap bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    {msg.message}
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 px-3 py-1.5 rounded-md border border-rose-900/50 transition"
                  >
                    🗑️ Delete Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}