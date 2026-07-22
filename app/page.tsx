import React from 'react';
import ProjectCard from './components/ProjectCard'; 
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      
      {/* 🚀 Hero Section */}
      <div className="max-w-2xl text-center bg-slate-800/50 border border-slate-700 p-8 rounded-2xl shadow-xl mb-10 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-sky-400 mb-2">
          ⚡ Welcome to My Next.js Portfolio
        </h1>
        <p className="text-slate-300 text-sm mb-6">
          Full-Stack Software Engineer building modern, fast & scalable web apps.
        </p>

        <button className="bg-sky-500 hover:bg-sky-600 text-slate-900 font-bold text-sm px-6 py-2.5 rounded-lg transition duration-200">
          Get in Touch
        </button>
      </div>

      {/* 📦 Reusable Project Cards Section */}
      <div className="max-w-4xl w-full">
        <h2 className="text-xl font-bold text-slate-200 mb-4">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard 
            title="Interactive HTML/JS Portfolio" 
            description="My first HTML, CSS, and Vanilla JS portfolio app deployed on GitHub Pages." 
            tags={['HTML', 'CSS', 'JavaScript', 'Git']} 
          />
          <ProjectCard 
            title="Modern Next.js Portfolio" 
            description="High performance React full-stack application built with Next.js and Tailwind CSS." 
            tags={['React', 'Next.js', 'Tailwind CSS']} 
          />
        </div>
      </div>

    </main>
  );
}