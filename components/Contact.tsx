"use client";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";  // ← Ya tienes esta importación
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await emailjs.sendForm(
        "service_iosfots",
        "template_30wbt02", 
        e.currentTarget,
        "h8KvP6JHDQk56UhRw"
      );

      console.log("EmailJS result:", result);
      
      if (result.status === 200) {
        setSent(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error: any) {
      console.error("Error completo:", error);
      if (error.text) {
        setError(`Error: ${error.text}`);
      } else {
        setError("Error al enviar. Por favor intenta nuevamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <section id="contact" className="mt-32 mb-20 px-6">
        <h3 className="text-4xl font-bold mb-12 text-center">Contáctame</h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto p-8 text-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-2xl border border-green-200 dark:border-green-800"
        >
          <div className="text-5xl mb-4">✅</div>
          <p className="text-2xl font-semibold mb-3">¡Mensaje enviado!</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Gracias por contactarme. Te responderé lo antes posible.
          </p>
          <button
            onClick={() => setSent(false)}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Enviar otro mensaje
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="mt-32 mb-20 px-6">
      <h3 className="text-4xl font-bold mb-12 text-center">Contáctame</h3>

      <div className="flex justify-center">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col max-w-lg w-full gap-6"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl text-center">
              {error}
            </div>
          )}

          <div>
            <input
              name="from_name"
              type="text"
              placeholder="Tu nombre"
              required
              disabled={loading}
              className="w-full px-5 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl outline-none border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-500 disabled:opacity-50"
            />
          </div>

          <div>
            <input
              name="from_email"
              type="email"
              placeholder="Tu correo electrónico"
              required
              disabled={loading}
              className="w-full px-5 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl outline-none border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-500 disabled:opacity-50"
            />
          </div>

          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Tu mensaje..."
              required
              disabled={loading}
              className="w-full px-5 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl outline-none border border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-500 resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-dark disabled:bg-gray-400 transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              "Enviar mensaje"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}