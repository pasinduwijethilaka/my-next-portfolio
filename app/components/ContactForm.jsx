'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "74b4e94a-b912-4669-88c9-789d74937916"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setLoading(false);
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again!");
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-xl max-w-xl w-full mt-10">
      <h2 className="text-2xl font-bold text-sky-400 mb-2 text-center">
        📬 Let's Work Together
      </h2>
      <p className="text-slate-400 text-xs text-center mb-6">
        Drop a message and I'll get back to you as soon as possible!
      </p>

      {submitted ? (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-center text-sm font-medium">
          🎉 Thank you! Your message has been sent successfully to my inbox.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div>
            <label className="block text-slate-300 text-xs mb-1 font-medium">Your Name</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Ex: John Doe" 
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg p-3 focus:outline-none focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-xs mb-1 font-medium">Your Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Ex: john@example.com" 
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg p-3 focus:outline-none focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-xs mb-1 font-medium">Message</label>
            <textarea 
              name="message" 
              rows="4" 
              required 
              placeholder="Write your message here..." 
              className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-lg p-3 focus:outline-none focus:border-sky-500 transition resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 text-slate-900 font-bold text-sm py-3 rounded-lg transition duration-200 flex justify-center items-center gap-2 mt-2"
          >
            {loading ? 'Sending...' : 'Send Message 🚀'}
          </button>
        </form>
      )}
    </div>
  );
}