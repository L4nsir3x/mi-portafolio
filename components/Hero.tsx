"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mt-20 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h2 className="text-5xl font-extrabold leading-tight">
          Soy Diego,
          <br />
          Desarrollador Fullstack
        </h2>

        <p className="mt-4 text-lg max-w-xl text-muted">
          Experiencia con Laravel, React, MySQL, FastAPI y Expo. Construyo
          sistemas completos con enfoque en optimización, arquitectura limpia y
          diseño eficiente.
        </p>

        <a
          href="#projects"
          className="
            inline-block mt-6 
            bg-primary text-white 
            px-8 py-3 rounded-xl text-lg 
            hover:bg-primary-dark 
            transition-all duration-300
            font-medium
            shadow-lg hover:shadow-xl
          "
        >
          Ver mis proyectos
        </a>
      </motion.div>

      <motion.img
        src="https://ui-avatars.com/api/?name=Diego&size=256&background=0f172a&color=3b82f6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="
          w-60 h-60 rounded-full shadow-2xl 
          border-4 border-primary
          ring-4 ring-primary/20
        "
        alt="Avatar de Diego"
      />
    </section>
  );
}