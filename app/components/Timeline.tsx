'use client'

import React from 'react'
import FadeIn from './FadeIn'

interface TimelineItem {
  year: string
  title: string
  subtitle: string
  description: string
  tags: string[]
}

const timelineData: TimelineItem[] = [
  {
    year: 'Present',
    title: 'Full-Stack Web Development',
    subtitle: 'Self-Directed & Practical Projects',
    description: 'Building high-performance, full-stack web applications using Next.js, React, Tailwind CSS, and Supabase. Focused on modern UI/UX and database integration.',
    tags: ['Next.js', 'React', 'Supabase', 'TypeScript'],
  },
  {
    year: '2021 - 2025', 
    title: 'BSc (Hons) in Software Engineering',
    subtitle: 'Undergraduate Degree',
    description: 'Specialized in Software Architecture, Object-Oriented Programming, Database Management Systems, and Web Technologies. Focused on core Computer Science fundamentals and practical application development.',
    tags: ['Software Engineering', 'OOP', 'DBMS', 'Web Tech'],
  },
];

export default function Timeline() {
  return (
    <div id="education" className="max-w-4xl w-full mb-16">
      <FadeIn delay={0.1} direction="up">
        <h2 className="text-xl font-bold text-slate-200 mb-6">Education & Journey</h2>
      </FadeIn>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-8">
        {timelineData.map((item, index) => (
          <FadeIn key={item.title} delay={0.1 + index * 0.1} direction="up">
            <div className="relative pl-6 md:pl-8 group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors duration-300"></div>

              {/* Date Badge */}
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold mb-2 border border-sky-500/20">
                {item.year}
              </span>

              {/* Content Card */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 transition duration-300">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm font-medium text-slate-400 mb-2">{item.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-900/60 text-slate-400 text-xs border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}