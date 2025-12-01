"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="mt-32">
      <h3 className="text-4xl font-bold mb-10">Proyectos Destacados</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="
              group relative
              bg-card 
              rounded-2xl 
              shadow-lg 
              hover:shadow-2xl 
              transition-all duration-300 
              border border-gray-200 dark:border-gray-800
              hover:border-primary/30
              overflow-hidden
            "
          >
            {/* Contenido principal - sigue siendo un enlace a la página de detalle */}
            <Link href={`/projects/${project.slug}`} className="block p-6 pb-4">
              <h4 className="text-2xl font-semibold text-primary mb-3">
                {project.title}
              </h4>
              <p className="text-muted mb-4 line-clamp-3">
                {project.shortDescription}
              </p>
              
              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx}
                    className="
                      px-3 py-1 
                      text-xs font-medium
                      bg-primary/10 
                      text-primary 
                      rounded-full
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="text-sm text-muted">
                {project.year}
              </div>
            </Link>
            
            {/* Botones de enlaces externos (GitHub y Demo) */}
            <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-3">
                {/* Botón de GitHub */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center gap-2
                      flex-1
                      px-4 py-2
                      bg-gray-100 dark:bg-gray-800
                      text-gray-800 dark:text-gray-200
                      rounded-lg
                      text-sm font-medium
                      hover:bg-gray-200 dark:hover:bg-gray-700
                      transition-colors
                      group/link
                    "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg 
                      className="w-4 h-4 group-hover/link:scale-110 transition-transform" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
                
                {/* Botón de Demo/Live */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center gap-2
                      flex-1
                      px-4 py-2
                      bg-primary/10
                      text-primary
                      rounded-lg
                      text-sm font-medium
                      hover:bg-primary/20
                      transition-colors
                      group/link
                    "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg 
                      className="w-4 h-4 group-hover/link:scale-110 transition-transform" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                    </svg>
                    <span>Demo</span>
                  </a>
                )}
                
                {/* Si no hay enlaces, mostrar solo botón de detalles */}
                {!project.githubUrl && !project.liveUrl && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="
                      flex items-center justify-center gap-2
                      flex-1
                      px-4 py-2
                      bg-primary
                      text-white
                      rounded-lg
                      text-sm font-medium
                      hover:bg-primary-dark
                      transition-colors
                    "
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ver detalles</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}