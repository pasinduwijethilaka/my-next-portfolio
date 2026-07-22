import React from 'react';

export default function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-slate-800 border border-slate-700 p-5 rounded-xl hover:border-sky-500/50 transition duration-300">
      <h3 className="text-lg font-semibold text-sky-300 mb-2">{title}</h3>
      <p className="text-slate-400 text-xs leading-relaxed mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-slate-700/50 text-slate-300 text-[10px] px-2.5 py-1 rounded-md border border-slate-600/50">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}