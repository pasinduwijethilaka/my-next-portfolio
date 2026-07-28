'use client'

import React, { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard'; 
import ContactForm from './components/ContactForm';
import { supabase } from './components/supabaseClient'

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

      {/* 📦 Dynamic Supabase Project Cards Section */}
      <div className="max-w-4xl w-full mb-10">
        <h2 className="text-xl font-bold text-slate-200 mb-4">Featured Projects</h2>
        
        {loading ? (
          <p className="text-slate-400 text-center py-6">Loading projects from Supabase...</p>
        ) : projects.length === 0 ? (
          <p className="text-slate-400 text-center py-6">No projects found in database.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => {
              // Tags එක Text (e.g. "React, Next.js") එකක් විදියට තිබ්බොත් Array එකක් කරගන්නවා
              const parsedTags = typeof project.tags === 'string' 
                ? project.tags.split(',').map(tag => tag.trim()) 
                : project.tags;

              return (
                <ProjectCard 
                  key={project.id}
                  title={project.title} 
                  description={project.description} 
                  tags={parsedTags || []} 
                />
              );
            })}
          </div>
        )}
      </div>

      {/* 📬 Contact Form Section */}
      <ContactForm />

    </main>
  );
}