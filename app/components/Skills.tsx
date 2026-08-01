'use client'

import React from 'react'
import FadeIn from './FadeIn'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git & GitHub', 'Vercel', 'VS Code', 'Postman', 'NPM/PNPM'],
  },
]

export default function Skills() {
  return (
    <div id="skills" className="max-w-4xl w-full mb-16">
      <FadeIn delay={0.1} direction="up">
        <h2 className="text-xl font-bold text-slate-200 mb-6">Technologies & Skills</h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => (
          <FadeIn key={category.title} delay={0.15 + catIndex * 0.1} direction="up">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 h-full">
              <h3 className="text-base font-semibold text-sky-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 text-xs font-medium hover:border-slate-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}