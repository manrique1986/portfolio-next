"use client"

import React from "react";

import { motion } from "framer-motion"; // Para animaciones

const index = () => {
  return (

      <div className="relative bg-gray-900 text-white min-h-screen z-0">
        {/* Video de fondo */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.example.com/your-background-video.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
          {/* Encabezado */}
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg mb-8 w-full max-w-screen-lg">
            <h1 className="text-4xl font-bold text-teal-400 text-center">
              Educación
            </h1>
          </div>

          {/* Contenido con animación para móviles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-screen-lg w-full"
          >
            {/* Coderhouse */}
            <div className="mb-8 p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-teal-400 text-2xl lg:text-3xl font-semibold">
                Coderhouse (Junio 2021 - Marzo 2022)
              </h3>
              <p className="font-bold mt-4">
                Carrera de Desarrollador Frontend:
              </p>
              <ul className="list-inside list-disc pl-6 mb-4 font-bold">
                <li>Desarrollo Web</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Curso adicional (Marzo 2022): Vue.js</li>
              </ul>
            </div>

            {/* Educación IT */}
            <div className="mb-8 p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-teal-400 text-2xl lg:text-3xl font-semibold">
                Educación IT (Febrero 2023 - Mayo 2023)
              </h3>
              <ul className="list-inside list-disc pl-6 mb-4 font-bold">
                <li>Curso de React</li>
                <li>Node.js</li>
              </ul>
            </div>

            {/* Udemy */}
            <div className="mb-8 p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-teal-400 text-2xl lg:text-3xl font-semibold">
                Udemy (Agosto 2023 - Actualidad)
              </h3>
              <ul className="list-inside list-disc pl-6 mb-4 font-bold">
                <li>Curso actual (Actualidad): Node.js</li>
                <li>Estudios en curso (Actualidad): Buenas Prácticas en Javascript</li>
              </ul>
            </div>

            {/* Coderhouse Next.js */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-teal-400 text-2xl lg:text-3xl font-semibold">
                Coderhouse (Septiembre 2024)
              </h3>
              <p className="font-bold mt-4">
                Curso de Next.js:
              </p>
              <p className="text-lg mt-2">
                En septiembre de 2024, completé un curso intensivo de Next.js en Coderhouse, donde profundicé en técnicas avanzadas de desarrollo y optimización con este potente framework para React.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

  );
};

export default index;