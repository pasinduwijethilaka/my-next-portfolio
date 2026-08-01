'use client'

import React, { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard'; 
import ContactForm from './components/ContactForm';
import { supabase } from './components/supabaseClient'
import FadeIn from './components/FadeIn'
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Supabase Data Type එක Define කරගමු (TypeScript එක සඳහා)
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string | string[]; // Array එකක් හෝ comma separated text එකක් ලෙස එන්න පුළුවන්
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 🔄 Supabase Table එකෙන් Projects Data ගන්නවා
  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from('projects').select('*');

      if (error) {
        console.error('Error fetching projects:', error.message);
      } else if (data) {
        setProjects(data as Project[]);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 pt-28">
      <Navbar />
      {/* ⚡ Hero Section */}
      <FadeIn delay={0.1} direction="up">
        <section className="py-20 text-center max-w-3xl mx-auto px-4">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for new projects & opportunities
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Crafting Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Web Experiences.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Hi, I&apos;m <span className="text-slate-200 font-semibold"> Pasindu </span> — a Full-Stack Engineer specializing in building modern, high-performance web/mobile applications.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition duration-200 text-sm shadow-lg shadow-sky-500/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl border border-slate-700 transition duration-200 text-sm"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </FadeIn>
{/* 🛠️ Skills Section */}
<Skills />

{/* 📦 Dynamic Supabase Project Cards Section */}
<div id="projects" className="max-w-4xl w-full mb-16">
  {/* Projects code... */}
</div>
      {/* 📦 Dynamic Supabase Project Cards Section */}
      <div id="projects" className="max-w-4xl w-full mb-16">
        <FadeIn delay={0.2} direction="up">
          <h2 className="text-xl font-bold text-slate-200 mb-6">Featured Projects</h2>
        </FadeIn>
        
        {loading ? (
          <p className="text-slate-400 text-center py-6">Loading projects from Supabase...</p>
        ) : projects.length === 0 ? (
          <p className="text-slate-400 text-center py-6">No projects found in database.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => {
              // Tags එක Text (e.g. "React, Next.js") එකක් විදියට තිබ්බොත් Array එකක් කරගන්නවා
              const parsedTags = typeof project.tags === 'string' 
                ? project.tags.split(',').map(tag => tag.trim()) 
                : project.tags;

              return (
                <FadeIn key={project.id} delay={0.1 + index * 0.1} direction="up">
                  <ProjectCard 
                    title={project.title} 
                    description={project.description} 
                    tags={parsedTags || []} 
                  />
                </FadeIn>
              );
            })}
          </div>
        )}
      </div>

      {/* 📬 Contact Form Section */}
      <div id="contact" className="w-full max-w-md mb-10">
        <FadeIn delay={0.3} direction="up">
          <ContactForm />
        </FadeIn>
      </div>
      {/* 🌐 Footer Section */}
      <Footer />
    </main>
  );
}