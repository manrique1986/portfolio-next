"use client";

import React from "react";
import { motion } from "framer-motion"; // Para animaciones

const SobreMi = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://www.example.com/your-video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Encabezado */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-8 w-full max-w-screen-md">
          <h1 className="text-4xl font-bold text-teal-400 text-center font-sans">
            Sobre mí
          </h1>
        </div>

        {/* Contenido con animación para móviles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-screen-md w-full"
        >
          <h2 className="text-3xl font-semibold text-teal-400 mb-6 font-sans">
            Biografía e Introducción
          </h2>
          <p className="text-lg mb-4 font-sans">
            ¡Hola! Soy Leandro, un apasionado desarrollador fullstack con enfoque en el frontend. Actualmente, trabajo en diversos proyectos en plataformas variadas para perfeccionar mis habilidades en tecnologías como React y Vue en el frontend, y Node.js en el backend. Utilizo herramientas como Bootstrap y Tailwind para estilos impactantes.
          </p>
          <p className="text-lg font-sans">
            Desde mi descubrimiento en el mundo IT, mantengo un constante proceso de aprendizaje. Me defino como una persona responsable y dinámica, resolutiva en la gestión y toma de decisiones. Mi entusiasmo y energía positiva me caracterizan, siempre dispuesto a ayudar y aprender en todo momento. Busco nuevas oportunidades para aplicar mi experiencia y contribuir al desarrollo de proyectos innovadores. ¡Conversemos sobre cómo puedo aportar a tu equipo o proyecto!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SobreMi;