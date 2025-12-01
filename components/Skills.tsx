"use client";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Laravel",
  "MySQL",
  "FastAPI",
  "Expo",
  "Python",
  "JavaScript",
  "Git",
  "PHP",
];

export default function Skills() {
  return (
    <section id="skills" className="mt-32">
      <h3 className="text-4xl font-bold mb-10">Skills</h3>
      
      <div className="flex flex-wrap gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="
              px-6 py-3 
              bg-card 
              text-foreground 
              rounded-xl text-lg 
              shadow-md 
              hover:shadow-lg 
              hover:scale-105 
              transition-all duration-300
              font-medium
              border border-gray-200 dark:border-gray-700
            "
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}