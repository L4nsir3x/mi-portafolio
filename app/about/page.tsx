"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-20 max-w-3xl mx-auto px-6 md:px-0"
    >
      <h1 className="text-5xl font-bold mb-8">
        Sobre mí
      </h1>
      
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted">
          Soy Diego, desarrollador Fullstack con experiencia construyendo sistemas
          completos usando Laravel, React, MySQL, FastAPI y aplicaciones móviles
          con Expo. Tengo experiencia profesional en la Universidad Politécnica de
          Querétaro desarrollando módulos del sistema institucional, optimizando
          procesos y desplegando proyectos en producción.
        </p>
        
        <p className="text-lg leading-relaxed text-muted">
          Me apasionan los sistemas robustos, la arquitectura limpia, las bases de
          datos bien diseñadas y crear software que realmente resuelva problemas.
        </p>
        
        {/* Puedes agregar más secciones si lo deseas */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Mi enfoque
          </h2>
          <ul className="space-y-3 text-muted">
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Desarrollo de software escalable y mantenible</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Optimización de bases de datos y rendimiento</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Arquitectura de APIs RESTful bien documentadas</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">•</span>
              <span>Interfaces de usuario intuitivas y responsivas</span>
            </li>
          </ul>
        </div>
        
        {/* Experiencia educativa/profesional opcional */}
        <div className="bg-card rounded-2xl p-6 mt-8 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Formación y experiencia
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-1">
              <h4 className="font-medium text-foreground">
                Universidad Politécnica de Querétaro
              </h4>
              <p className="text-sm text-muted mt-1">
                Desarrollo de sistemas institucionales • 2023 - Presente
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-1">
              <h4 className="font-medium text-foreground">
                Tecnologías principales
              </h4>
              <p className="text-sm text-muted mt-1">
                Laravel, React, MySQL, FastAPI, Expo, Docker
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}