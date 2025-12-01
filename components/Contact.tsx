"use client";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Reemplaza con tus credenciales reales de EmailJS
    emailjs
      .sendForm(
        "service_id",     // Tu Service ID
        "template_id",    // Tu Template ID
        e.target as HTMLFormElement, 
        "public_key"      // Tu Public Key
      )
      .then(() => setSent(true))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section id="contact" className="mt-32 mb-20">
      <h3 className="text-4xl font-bold mb-10">Contáctame</h3>

      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="
            p-6 
            bg-green-50 dark:bg-green-900/20
            text-green-700 dark:text-green-400 
            rounded-2xl 
            border border-green-200 dark:border-green-800
          "
        >
          <p className="text-xl font-semibold">¡Mensaje enviado con éxito!</p>
          <p className="mt-2 text-muted">
            Te responderé lo antes posible.
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col max-w-lg gap-6"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            placeholder="Tu nombre"
            required
            className="
              px-4 py-3 
              bg-card 
              text-foreground 
              rounded-xl 
              outline-none 
              border border-gray-300 dark:border-gray-700
              focus:border-primary focus:ring-2 focus:ring-primary/20
              transition-all
            "
          />
          
          <input
            name="email"
            type="email"
            placeholder="Tu correo electrónico"
            required
            className="
              px-4 py-3 
              bg-card 
              text-foreground 
              rounded-xl 
              outline-none 
              border border-gray-300 dark:border-gray-700
              focus:border-primary focus:ring-2 focus:ring-primary/20
              transition-all
            "
          />
          
          <textarea
            name="message"
            rows={5}
            placeholder="Tu mensaje..."
            required
            className="
              px-4 py-3 
              bg-card 
              text-foreground 
              rounded-xl 
              outline-none 
              border border-gray-300 dark:border-gray-700
              focus:border-primary focus:ring-2 focus:ring-primary/20
              transition-all
              resize-none
            "
          />
          
          <button
            type="submit"
            className="
              bg-primary 
              text-white 
              px-8 py-3 
              rounded-xl 
              text-lg 
              font-semibold 
              hover:bg-primary-dark 
              transition-all duration-300
              shadow-lg hover:shadow-xl
              active:scale-95
            "
          >
            Enviar mensaje
          </button>
        </motion.form>
      )}
    </section>
  );
}