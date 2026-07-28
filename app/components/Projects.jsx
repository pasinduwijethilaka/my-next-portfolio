'use client' 
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient' 

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      // Supabase 'projects' table eken data gannawa
      const { data, error } = await supabase.from('projects').select('*')

      if (error) {
        console.error('Error fetching projects:', error.message)
      } else {
        setProjects(data)
      }
      setLoading(false)
    }

    fetchProjects()
  }, [])

  if (loading) {
    return <p className="text-center py-10">Projects Loading...</p>
  }

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <div 
              key={project.id} 
              className="border border-gray-200 dark:border-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              
              {project.tags && (
                <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium">
                  {project.tags}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  )
}