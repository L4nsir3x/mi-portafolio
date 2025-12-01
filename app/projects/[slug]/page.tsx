"use client";
import { use } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData";


export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params); 
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return <p>Proyecto no encontrado.</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-20 max-w-3xl mx-auto"
    >
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
      <p>{project.longDescription}</p>

      <img src={project.image} className="rounded-2xl w-full shadow-xl mb-10" />
      <div>{project.longDescription}</div>

    </motion.div>
  );
}
